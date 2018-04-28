function clock() {
  var weeks = [
    'Sunday',
    'Monday',
    'Thesday',
    'wednesday',
    'Thursday',
    'Friday',
    'Satday'
  ];

  var now = new Date();
  //何年か
  var y = now.getFullYear();
  //何月か
  var mo = now.getMonth() + 1;
  //何日か
  var d = now.getDate();
  //何曜か getDay()は0から6で
  var w = weeks[now.getDay()];
  //何時か
  var h = now.getHours();
  //何分か
  var mi = now.getMinutes();
  //秒
  var s = now.getSeconds();

  //表示を常に２桁
  //例）01月
  if (mo < 10) mo = "0" + mo;
  if (d < 10) d = "0" + d;
  if (mi < 10) mi = "0" + mi;
  if (s < 10) s = "0" + s;
  //日付表示
  document.getElementById('clock_date').innerHTML = y + "." + mo + "." + d + "." + w;
  //時間表示
  document.getElementById('clock_time').innerHTML = h + ":" + mi + ":" + s;
};

setInterval(clock, 1000);
