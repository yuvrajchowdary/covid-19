var map = L.map("map").setView([20.5937, 78.9629], 4);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; " + mapLink + " Contributors",
  maxZoom: 18,
}).addTo(map);

function tg() {
  var telangana = [
    ["Gandhi Hospital", 17.4238, 78.5035],
    ["Osmania Medical College", 17.38234, 78.48328],
    [
      "Sir Ronald Ross of Tropical & Communicable Diseases, Hyderabad.",
      17.4456,
      78.47215,
    ],
    ["Nizam’s Institute of Medical Sciences, Hyderabad", 17.42262, 78.45358],
  ];
  for (var i = 0; i < telangana.length; i++) {
    marker = new L.marker([telangana[i][1], telangana[i][2]])
      .bindPopup(telangana[i][0])
      .addTo(map.setView([17.4238, 78.5035], 11));
  }
}

function ap() {
  var ap = [
    ["Sri Venkateshwara Institute of medical sciences", 13.6379, 79.403687],
    ["Rangarayya Medical College , Kakinada", 16.979021, 82.236925],
    ["Siddhartah Medical College , vijayawada", 16.517665, 80.671044],
    ["Govt. Medical College, Ananthpur", 14.670992, 77.592777],
  ];
  for (var i = 0; i < ap.length; i++) {
    marker = new L.marker([ap[i][1], ap[i][2]])
      .bindPopup(ap[i][0])
      .addTo(map.setView([14.670992, 77.592777], 7));
  }
}

function as() {
  var coords = [
    ["Gauhati Medical College, Guwahati", 26.162, 91.7697],
    ["Regional Medical Research Center, Dibrugarh", 27.472726, 94.982758],
    ["Jorhat Medical College, Jorhat", 26.7426, 94.1951],
    ["Silchar Medical College, Silchar", 24.7758, 92.7949],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([26.162, 91.7697], 6));
  }
}
function bh() {
  var coords = [
    ["Rajendra Memorial Research Institute of Medical Sciences, Patna", 25.5997, 85.1977],
    ["Indira Gandhi Institute Medical Sciences, Patna",25.6106, 85.0889],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([25.5997, 85.1977],11));
  }
}
function mg() {
  var coords = [
    ["North Eastern Indira Gandhi Regional Institute of Health & Medical Sciences, Shillong, Meghalaya", 25.591232, 91.939773],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([25.591232, 91.939773], 7));
  }
}
function mr() {
  var coords = [
    ["Jawaharlal Nehru Institute of Med. Sciences, ImphalEast, Manipur",24.810065, 93.960988],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([24.810065, 93.960988], 7));
  }
}
function mp() {
  var coords = [
    ["All India Institute of Medical Sciences, Bhopal", 23.206933, 77.460054],
    ["National Institute for Research on Tribal Health, Jabalpur", 23.147330, 79.878415],
    ["Mahatma Gandhi Memorial Medical College, Indore", 22.714490, 75.883039],
    ["Gandhi Medical College, Bhopal", 23.260159, 77.390970],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([23.206933, 77.460054], 7));
  }
}
function mh() {
  var coords = [
    ["National Institute of Virology, Pune",18.543224, 73.788935],
    ["Seth GS Medical College & KEM Hospital, Mumbai", 19.002608, 72.841849   ],
    ["Kasturba Hospital for Infectious Diseases, Mumbai", 18.984020, 72.829837   ],
    ["National Institute of Virology Field Unit, Mumbai", 19.002059, 72.843977],
    ["Armed Forces Medical College, Pune", 18.504071, 73.890073],
    ["BJ Medical College, Pune", 18.526235, 73.871277 ],
    [" Indira Gandhi Govt. Medical College, Nagpur", 21.153409, 79.093992],   
    ["  Grant Medical College & Sir JJ Hospital, Mumbai",18.962993, 72.833755] ];  

   
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([18.504071, 73.890073], 6));
  }
}
function kl() {
  var coords = [
   ["National Institute of Virology Field Unit, Allapuzzha",9.418498, 76.343162],
   ["Govt. Medical College, Thiruvanathapuram", 8.523445, 76.928265],
   ["Govt. Medical College, Kozhikode",11.272222, 75.837182],
   ["Govt. Medical College, Thrissur", 10.614579, 76.196296],
   ["Rajiv Gandhi Center for Biotechnology, Thiruvanathapuram",8.492329, 76.966865],
   ["Sree Chitra Tirunal Institute of Medical Sciences, Thiruvanathapuram", 8.521707, 76.926429],
   ["State Public Health Laboratory, Trivandrum",8.498269, 76.939428],   
   ["Interuniversity, Kottayam",9.575193, 76.578964 ]];
  
   for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([9.575193, 76.578964], 6));
  }
}
function kr() {
  var coords = [
    ["Hassan Inst. of Med. Sciences, Hassan", 13.004838, 76.102692],
    ["Mysore Medical College & Research Institute, Mysore", 12.315201, 76.650277],
    ["Shimoga Instt. of Medical Sciences, Shivamoga Inst. of Med. Sciences, Shivamogga",13.932621, 75.566833],
    ["Command Hospital (Air Force) Bengaluru",12.964628, 77.628139],
    ["Bangalore Medical College & Research Institute, Bengalur", 12.959425, 77.574802   ],
    ["Gulbarga Institute of Medical Sciences, Gulbarga ", 17.328356, 76.839873],
    ["National Institute of Virology, Bangalore Field Unit, Bengaluru",12.937290, 77.590844],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([12.964628, 77.628139], 6));
  }
}
function jd() {
  var coords = [
    ["MGM Medical College & Hospital, Jamshedpur", 22.843638, 86.232420   ],
    ["Rajendra Institute of Medical Sciences, Ranchi", 23.390710, 85.348068],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([22.843638, 86.232420], 6));
  }
}
function jk() {
  var coords = [
    ["Govt. Medical College, Jammu", 32.736079, 74.853917],
    ["Command Hospital (NC) Udhampur",32.930750, 75.135396],
    ["Sher-i-Kashmir Institute of Medical Sciences, Srinagar",34.136192, 74.800119],
    ["Govt. Medical College, Srinagar", 34.086003, 74.798831],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([34.086003, 74.798831], 6));
  }
}
function hp() {
  var coords = [
    ["Indira Gandhi Medical College, Shimla", 31.106473, 77.182297],
    ["Dr. Rajendra Prasad Govt. Medical College, Tanda",32.099363, 76.298876],
  ];
  for (var i = 0; i < coords.length; i++) {
    marker = new L.marker([coords[i][1], coords[i][2]])
      .bindPopup(coords[i][0])
      .addTo(map.setView([32.099363, 76.298876], 6));
  }
}
function an() {
   var coords = [
     ["Regional Medical Research Centre, Port Blair",11.634636, 92.714708],
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([11.634636, 92.714708], 6));
   }
 }function wb() {
   var coords = [
     [" National Institute of Cholera & Enteric Diseases, Kolkata",22.565782, 88.399822   ],
     ["Institute of Post Graduate Medical Education & Research, Kolkata ",22.539438, 88.341786   ],
     ["Midnapore Medical College, Midnapore",22.421641, 87.323138   ],
     ["North Bengal Medical College, Darjeeling",26.690627, 88.384909],
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([22.539438, 88.341786

       ], 6));
   }
 }function uk() {
   var coords = [
     [" Govt. Medical College, Haldwani",29.206500, 79.521266   ],
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([29.206500, 79.521266], 6));
   }
 }function up() {
   var coords = [
     ["King George Medical University, Lucknow", 26.869262,80.916241],
     ["Institute of Medical Sciences, Banaras Hindu University, Varanasi",25.274452,82.999524],
     ["Jawaharlal Nehru Medical College, Aligarh",27.918607,78.085736],
     ["Command Hospital, Lucknow", 26.817459,80.940820],
     ["Lala Lajpat Rai Memorial Medical College, Meerut", 28.960004,77.750222],
     ["Sanjay Gandhi Post Graduate Institute, Lucknow, Uttar Pradesh",26.743546,80.945207],
     ["RIMS, Saifai",26.960848,78.960578],
     ["Regional Medical Research Centre, Gorakhpur", 26.814121,83.399619]
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([28.960004,77.750222], 6));
   }
 }function tn() {
   var coords = [
     ["King Institute of Preventive Medicine & Research, Chennai",13.012442,80.217608],
     ["Madras Medical College, Chennai",13.079969,80.272295],
     ["Govt. Theni Medical College, Theni",10.006193,77.553694],
     ["Tirunelveli Medical College, Tirunelveli",8.711788,77.750820],
     ["Govt. Medical College, Thiruvarur", 10.776463,79.606024],
     ["Kumar Mangalam Govt. Medical College, Salem",11.654624,78.152207],
     ["Coimbatore Medical College, Coimbatore",11.028700,77.023892]
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([8.711788,77.750820], 6));
   }
 }
 function rj() {
   var coords = [
     ["Sawai Man Singh Medical College, Jaipur", 26.905378,75.818834],
     ["Dr. Sampurnanand Medical College, Jodhpur",26.269427,73.007418],
     ["Jhalawar Medical College, Jhalawar",24.585561,76.161036],
     ["RNT Medical College, Udaipur", 24.588223,74.694980],
     ["SP Medical College, Bikaner", 28.006394,73.330516],
     ["All India Institute of Medical Sciences, Jodhpur",26.240203,73.0049],
     ["JLN Medical College, Ajmer",26.467302,74.636341],
     [" Govt. Medical College, Kota", 25.123557,75.829649]
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([24.588223,74.694980], 6));
   }
 }
 function pb() {
   var coords = [
     ["Govt. Medical College, Amritsar", 32.653862,74.885228],
     ["Govt. Medical College, Patiala",30.328067,76.385120],

   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([32.653862,74.885228], 6));
   }
 }
 function pd() {
   var coords = [
     ["Jawaharlal Institute of Postgraduate Medical Education & Research, Puducherry", 11.950311,79.79968],

   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([11.950311,79.79968], 6));
   }
 }
 function od() {
   var coords = [
     ["Regional Medical Research Centre, Bhubaneshwar", 20.316655,85.819509],
     ["All India Institute of Medical Sciences, Bhubaneshwar",20.231081,85.775079],

   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([20.316655,85.819509], 6));
   }
 }
 function hr() {
   var coords = [
     ["Pt. B.D. Sharma Post Graduate Inst. of Med. Sciences, Rohtak, Haryana", 28.880130,76.605568],
     ["BPS Govt. Medical College, Sonipat",29.152055,76.808395],
     
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([29.152055,76.808395], 6));
   }
 }
 function gj() {
   var coords = [
     ["BJ Medical College, Ahmedabad", 23.0525, 72.6029],
     ["MP Shah Govt Medical College, Jamnagar",22.477323, 70.065247],
     ["Govt. Medical College, Surat",21.178094,72.820267],
     ["Govt. Medical College, Bhavnagar", 21.768755,72.136987],
     ["Govt. Medical College, Vadodara", 22.303400, 73.161883]
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([21.768755,72.136987], 6));
   }
 }
 function jk() {
   var coords = [
     ["Govt. Medical College, Jammu", 32.736079, 74.853917],
     ["Command Hospital (NC) Udhampur",32.930750, 75.135396],
     ["Sher-i-Kashmir Institute of Medical Sciences, Srinagar",34.136192, 74.800119],
     ["Govt. Medical College, Srinagar", 34.086003, 74.798831],
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([34.086003, 74.798831], 6));
   }
 }
 function dl() {
   var coords = [
     ["All India Institute Medical Sciences",28.704062,77.102457],
     ["Lady Hardinge Medical College",28.634210,77.212567],
     ["National Centre for Disease Control",28.679674,77.223582],
     ["Ram Manohar Lohia Hospital", 28.6257, 77.2027],
     ["Institute of Liver & Biliary Sciences",28.506907,77.166066],
     ["Army Hospital Research & Referral",28.5837, 77.1579]
   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([28.506907,77.166066], 9));
   }
 }
 function cha() {
   var coords = [
     ["All India Institute of Medical Sciences, Raipur", 21.257155, 81.579399],
     ["Late Baliram Kashyap M Govt. Medical College, Jagdalpur",19.050531, 81.948128]

   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([21.257155, 81.579399], 6));
   }
 }

 function ch() {
   var coords = [
     ["Post Graduate Institute of Medical Education & Research, Chandigarh", 30.7650, 76.7750],
     ["Govt. Medical College, Chandigarh",130.7088, 76.7805]

   ];
   for (var i = 0; i < coords.length; i++) {
     marker = new L.marker([coords[i][1], coords[i][2]])
       .bindPopup(coords[i][0])
       .addTo(map.setView([130.7088, 76.7805], 6));
   }
 }


//my-location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
   var coords = [
      ["Your location", position.coords.latitude,position.coords.longitude],
      
 
    ];
    for (var i = 0; i < coords.length; i++) {
      marker = new L.marker([coords[i][1], coords[i][2]])
        .bindPopup(coords[i][0])
        .addTo(map.setView([position.coords.latitude,position.coords.longitude], 6));
    }
}

