/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.72, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "search_for_song"], "isController": true}, {"data": [0.5, 500, 1500, "https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-3"], "isController": false}, {"data": [0.5, 500, 1500, "login"], "isController": true}, {"data": [0.5, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-3"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-4"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-5"], "isController": false}, {"data": [0.875, 500, 1500, "https:\/\/gew-spclient.spotify.com\/gabo-receiver-service\/v3\/events"], "isController": false}, {"data": [0.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-1"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-0"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-2"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-1"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-2"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-0"], "isController": false}, {"data": [0.5, 500, 1500, "view_playlist"], "isController": true}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-14"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-13"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-12"], "isController": false}, {"data": [0.5, 500, 1500, "search_for_artist"], "isController": true}, {"data": [0.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-11"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-10"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-0"], "isController": false}, {"data": [0.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-1"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-2"], "isController": false}, {"data": [0.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-3"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-5"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-4"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-4"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-5"], "isController": false}, {"data": [0.0, 500, 1500, "help"], "isController": true}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-7"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-6"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/pixel.spotify.com\/v2\/sync?ce=1&pp="], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/eg-en\/spotify\/framework\/analytics\/track\/"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-9"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-8"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-1"], "isController": false}, {"data": [1.0, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-0"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-3"], "isController": false}, {"data": [0.5, 500, 1500, "https:\/\/www.spotify.com\/legal\/cookies-policy\/-2"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 45, 0, 0.0, 657.8222222222223, 90, 3233, 368.0, 1587.3999999999996, 2657.0999999999963, 3233.0, 1.224689745264533, 218.67451998965817, 1.665955453611474], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["search_for_song", 1, 0, 0.0, 3201.0, 3201, 3201, 3201.0, 3201.0, 3201.0, 3201.0, 0.31240237425804435, 0.3959944158075601, 0.8575811269915651], "isController": true}, {"data": ["https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-3", 1, 0, 0.0, 596.0, 596, 596, 596.0, 596.0, 596.0, 596.0, 1.6778523489932886, 193.16439020553693, 0.6390257969798658], "isController": false}, {"data": ["login", 1, 0, 0.0, 1055.0, 1055, 1055, 1055.0, 1055.0, 1055.0, 1055.0, 0.9478672985781991, 416.05542802132703, 1.8901806872037916], "isController": true}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-3", 1, 0, 0.0, 726.0, 726, 726, 726.0, 726.0, 726.0, 726.0, 1.3774104683195594, 346.6716167355372, 0.5447766012396694], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-4", 1, 0, 0.0, 784.0, 784, 784, 784.0, 784.0, 784.0, 784.0, 1.2755102040816326, 509.97239716198976, 0.5194216358418368], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-5", 1, 0, 0.0, 486.0, 486, 486, 486.0, 486.0, 486.0, 486.0, 2.05761316872428, 79.0794592335391, 0.8338959619341564], "isController": false}, {"data": ["https:\/\/gew-spclient.spotify.com\/gabo-receiver-service\/v3\/events", 8, 0, 0.0, 616.125, 204, 2925, 305.0, 2925.0, 2925.0, 2925.0, 1.6177957532861476, 1.0253412537917088, 2.267520854398382], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top", 1, 0, 0.0, 2032.0, 2032, 2032, 2032.0, 2032.0, 2032.0, 2032.0, 0.4921259842519685, 906.3182440329724, 6.527878168061023], "isController": false}, {"data": ["https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-1", 1, 0, 0.0, 431.0, 431, 431, 431.0, 431.0, 431.0, 431.0, 2.320185614849188, 13.415838892111369, 0.9267147621809745], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965", 1, 0, 0.0, 1323.0, 1323, 1323, 1323.0, 1323.0, 1323.0, 1323.0, 0.7558578987150416, 580.568251606198, 2.323672524565382], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-0", 1, 0, 0.0, 289.0, 289, 289, 289.0, 289.0, 289.0, 289.0, 3.4602076124567476, 3.389246323529412, 2.4160629325259517], "isController": false}, {"data": ["https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-2", 1, 0, 0.0, 752.0, 752, 752, 752.0, 752.0, 752.0, 752.0, 1.3297872340425532, 417.1778902094415, 0.5090591755319149], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-1", 1, 0, 0.0, 233.0, 233, 233, 233.0, 233.0, 233.0, 233.0, 4.291845493562231, 330.04040370171674, 3.0218951180257507], "isController": false}, {"data": ["https:\/\/support.spotify.com\/?_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-2", 1, 0, 0.0, 258.0, 258, 258, 258.0, 258.0, 258.0, 258.0, 3.875968992248062, 1.0787609011627908, 1.7979348352713178], "isController": false}, {"data": ["https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965-0", 1, 0, 0.0, 297.0, 297, 297, 297.0, 297.0, 297.0, 297.0, 3.3670033670033668, 14.52020202020202, 2.7981639309764312], "isController": false}, {"data": ["view_playlist", 1, 0, 0.0, 1119.0, 1119, 1119, 1119.0, 1119.0, 1119.0, 1119.0, 0.8936550491510277, 2.265555183199285, 5.088772062109026], "isController": true}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-14", 1, 0, 0.0, 463.0, 463, 463, 463.0, 463.0, 463.0, 463.0, 2.1598272138228944, 122.19686487580994, 0.8879758369330453], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-13", 1, 0, 0.0, 106.0, 106, 106, 106.0, 106.0, 106.0, 106.0, 9.433962264150942, 23.124262971698116, 3.620651533018868], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-12", 1, 0, 0.0, 389.0, 389, 389, 389.0, 389.0, 389.0, 389.0, 2.5706940874035986, 181.86405446658097, 1.006687821336761], "isController": false}, {"data": ["search_for_artist", 1, 0, 0.0, 609.0, 609, 609, 609.0, 609.0, 609.0, 609.0, 1.6420361247947455, 2.0814090722495897, 4.554084564860427], "isController": true}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-11", 1, 0, 0.0, 1503.0, 1503, 1503, 1503.0, 1503.0, 1503.0, 1503.0, 0.6653359946773121, 62.81057676314039, 0.26769377910844977], "isController": false}, {"data": ["https:\/\/accounts.spotify.com\/en-US\/login\/?continue=https%3A%2F%2Fsupport.spotify.com%2Feg-en%2Faccount_payment_help%2Faccount_help%2Fchange-password%2F%3Fref%3Din_top&_ga=2.90453210.1797967017.1591564542-1418375554.1590963965", 1, 0, 0.0, 1055.0, 1055, 1055, 1055.0, 1055.0, 1055.0, 1055.0, 0.9478672985781991, 416.05542802132703, 1.8901806872037916], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-10", 1, 0, 0.0, 368.0, 368, 368, 368.0, 368.0, 368.0, 368.0, 2.717391304347826, 674.7808041779891, 1.0588272758152175], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-0", 1, 0, 0.0, 286.0, 286, 286, 286.0, 286.0, 286.0, 286.0, 3.4965034965034967, 222.68015187937064, 4.220388986013987], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/", 1, 0, 0.0, 3233.0, 3233, 3233, 3233.0, 3233.0, 3233.0, 3233.0, 0.3093102381688834, 298.578924856944, 1.7863874497370862], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-1", 1, 0, 0.0, 96.0, 96, 96, 96.0, 96.0, 96.0, 96.0, 10.416666666666666, 2.899169921875, 4.831949869791667], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-2", 1, 0, 0.0, 90.0, 90, 90, 90.0, 90.0, 90.0, 90.0, 11.11111111111111, 3.0707465277777777, 5.490451388888889], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-3", 1, 0, 0.0, 1714.0, 1714, 1714, 1714.0, 1714.0, 1714.0, 1714.0, 0.5834305717619602, 1036.6655347505834, 5.886723308051342], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-5", 1, 0, 0.0, 765.0, 765, 765, 765.0, 765.0, 765.0, 765.0, 1.3071895424836601, 340.3850081699346, 0.49530228758169936], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-4", 1, 0, 0.0, 98.0, 98, 98, 98.0, 98.0, 98.0, 98.0, 10.204081632653061, 2.8200733418367347, 5.161830357142857], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-4", 1, 0, 0.0, 1451.0, 1451, 1451, 1451.0, 1451.0, 1451.0, 1451.0, 0.6891798759476223, 2.7883517832529288, 0.2517121812543074], "isController": false}, {"data": ["https:\/\/support.spotify.com\/eg-en\/account_payment_help\/account_help\/change-password\/?ref=in_top-5", 1, 0, 0.0, 99.0, 99, 99, 99.0, 99.0, 99.0, 99.0, 10.101010101010102, 2.7915877525252526, 5.089962121212121], "isController": false}, {"data": ["help", 1, 0, 0.0, 7044.0, 7044, 7044, 7044.0, 7044.0, 7044.0, 7044.0, 0.1419647927314026, 507.80709313777686, 3.3927367262918797], "isController": true}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-7", 1, 0, 0.0, 490.0, 490, 490, 490.0, 490.0, 490.0, 490.0, 2.0408163265306123, 54.701450892857146, 0.7692920918367347], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-6", 1, 0, 0.0, 1451.0, 1451, 1451, 1451.0, 1451.0, 1451.0, 1451.0, 0.6891798759476223, 0.41525779634734666, 0.26046153514817366], "isController": false}, {"data": ["https:\/\/pixel.spotify.com\/v2\/sync?ce=1&pp=", 1, 0, 0.0, 347.0, 347, 347, 347.0, 347.0, 347.0, 347.0, 2.881844380403458, 2.45407060518732, 1.331164445244957], "isController": false}, {"data": ["https:\/\/www.spotify.com\/eg-en\/spotify\/framework\/analytics\/track\/", 1, 0, 0.0, 109.0, 109, 109, 109.0, 109.0, 109.0, 109.0, 9.174311926605505, 10.14191513761468, 12.130877293577981], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-9", 1, 0, 0.0, 488.0, 488, 488, 488.0, 488.0, 488.0, 488.0, 2.0491803278688527, 32.41667200307377, 0.7504322489754098], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-8", 1, 0, 0.0, 262.0, 262, 262, 262.0, 262.0, 262.0, 262.0, 3.8167938931297707, 9.333253816793892, 1.4983897900763359], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-1", 1, 0, 0.0, 184.0, 184, 184, 184.0, 184.0, 184.0, 184.0, 5.434782608695652, 304.21514096467394, 2.1441915760869565], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-0", 1, 0, 0.0, 293.0, 293, 293, 293.0, 293.0, 293.0, 293.0, 3.4129692832764507, 3.0563406569965874, 1.259865614334471], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-3", 1, 0, 0.0, 509.0, 509, 509, 509.0, 509.0, 509.0, 509.0, 1.9646365422396854, 67.04705918467583, 0.7540060166994106], "isController": false}, {"data": ["https:\/\/www.spotify.com\/legal\/cookies-policy\/-2", 1, 0, 0.0, 617.0, 617, 617, 617.0, 617.0, 617.0, 617.0, 1.6207455429497568, 148.62110008103727, 0.6346864870340356], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 45, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
