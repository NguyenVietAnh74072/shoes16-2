  var Currency = {
    rates: {"USD":1.0,"EUR":1.21209,"GBP":1.38473,"CAD":0.787575,"ARS":0.0113072,"AUD":0.775632,"BRL":0.186226,"CLP":0.00138576,"CNY":0.154843,"CYP":0.397899,"CZK":0.047105,"DKK":0.162998,"EEK":0.0706676,"HKD":0.128977,"HUF":0.00338008,"ISK":0.0077851,"INR":0.0137787,"JMD":0.00674685,"JPY":0.00952849,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0501441,"NZD":0.722223,"NOK":0.118312,"PLN":0.269556,"SGD":0.754771,"SKK":21.5517,"SIT":175.439,"ZAR":0.0687297,"KRW":0.000906484,"SEK":0.12043,"CHF":1.12182,"TWD":0.0356314,"UYU":0.0234189,"MYR":0.247331,"BSD":1.0,"CRC":0.00163307,"RON":0.248312,"PHP":0.0208075,"AED":0.272294,"VEB":0.000100125,"IDR":7.1411e-05,"TRY":0.142143,"THB":0.0334694,"TTD":0.147478,"ILS":0.307298,"SYP":0.00195017,"XCD":0.370351,"COP":0.000286,"RUB":0.013585,"HRK":0.159945,"KZT":0.00238697,"TZS":0.000431499,"XPT":1255.37,"SAR":0.266667,"NIO":0.028532,"LAK":0.000106991,"OMR":2.60078,"AMD":0.00190741,"CDF":0.000504819,"KPW":0.00111111,"SPL":6.0,"KES":0.00913225,"ZWD":0.00276319,"KHR":0.000246799,"MVR":0.0638772,"GTQ":0.129009,"BZD":0.496232,"BYR":3.861e-05,"LYD":0.224557,"DZD":0.00748727,"BIF":0.000513756,"GIP":1.38473,"BOB":0.144614,"XOF":0.00184782,"STD":4.95049e-05,"NGN":0.00262802,"PGK":0.282379,"ERN":0.0666667,"MWK":0.0012879,"CUP":0.0377358,"GMD":0.0194391,"CVE":0.010992,"BTN":0.0137787,"XAF":0.00184782,"UGX":0.000272911,"MAD":0.11168,"MNT":0.00035076,"LSL":0.0687297,"XAG":27.3618,"TOP":0.443499,"SHP":1.38473,"RSD":0.0103093,"HTG":0.0129893,"MGA":0.000265132,"MZN":0.013344,"FKP":1.38473,"BWP":0.0911143,"HNL":0.041514,"PYG":0.000147954,"JEP":1.38473,"EGP":0.0640909,"LBP":0.00066335,"ANG":0.55944,"WST":0.396999,"TVD":0.775632,"GYD":0.00476695,"GGP":1.38473,"NPR":0.00857153,"KMF":0.00246376,"IRR":2.37952e-05,"XPD":2390.04,"SRD":0.0710265,"TMM":5.69801e-05,"SZL":0.0687297,"MOP":0.12522,"BMD":1.0,"XPF":0.0101573,"ETB":0.0252271,"JOD":1.41044,"MDL":0.0576834,"MRO":0.00276781,"YER":0.00404322,"BAM":0.619731,"AWG":0.558659,"PEN":0.274362,"VEF":0.100125,"SLL":9.82006e-05,"KYD":1.21951,"AOA":0.00154324,"TND":0.369691,"TJS":0.0884575,"SCR":0.0469271,"LKR":0.00514722,"DJF":0.00561491,"GNF":9.88453e-05,"VUV":0.00931379,"SDG":0.0181447,"IMP":1.38473,"GEL":0.30349,"FJD":0.494069,"DOP":0.0172382,"XDR":1.44075,"MUR":0.0249387,"MMK":0.00075245,"LRD":0.00581398,"BBD":0.5,"ZMK":4.61281e-05,"XAU":1824.39,"VND":4.30654e-05,"UAH":0.0357719,"TMT":0.2849,"IQD":0.000685202,"BGN":0.619731,"KGS":0.0118765,"RWF":0.00102517,"BHD":2.65957,"UZS":9.49572e-05,"PKR":0.00629979,"MKD":0.0196725,"AFN":0.012945,"NAD":0.0687297,"BDT":0.0117891,"AZN":0.588239,"SOS":0.00170994,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.1252,"ALL":0.00979911,"BND":0.754771,"KWD":3.29928,"GHS":0.173254,"ZMW":0.0461281,"XBT":49065.0,"NTD":0.0337206,"BYN":0.3861,"CNH":0.155694,"MRU":0.0276781,"STN":0.0495049,"VES":5.66609e-07,"MXV":0.328583},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };