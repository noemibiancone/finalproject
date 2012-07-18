// DOMAINS

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,1]);

// COLORS - All colors are normalized.

var mattBurgundy = [139/255, 0, 0, 1];
var mattCoralRed = [240/255,128/255, 128/255, 1];


/* This function creates an array of knots used by the function nubs. The function takes as input an array of control points. It returns an array of knots. 

   INPUT - An array of points

   OUTPUT - An array of knots.

*/

function knots (point) {
  var k = 2; 
  var m =point.length;
  var n = (m + k + 1);
  var first = 1;
  var last = n - 3;

  var knots = [];

  for (var i = 0; i < 3; i++) {
     knots[i] = 0;
    };

  for (var i = 3; i < last; i++,first++) {
     knots[i] = first;

    };

  for (var i = last; i < n; i++) {
     knots[i] = first;
    };

  return knots;
};

/* This function creates a curve with the function Nubs. The function takes as input an array of control points. It returns to the curve. 

   INPUT - An array of points
   
   OUTPUT - A curve built with the function NUBS

*/

function createNubs (point) {
	
	var knots1 = knots(point);
	var c1 = NUBS(S0)(2)(knots1)(point);
  //var c1Map = MAP(c1)(domain1)
  //DRAW(c1Map)
		return c1;
}

/* This function creates a 1 grade Bezier curve. The function takes as input an array of curves. It returns to the Bezier curve. 

   INPUT - An array of curves

   OUTPUT - A 1 grade Bezier curve

*/

function createBezierS1(curves) {
  var b1 = BEZIER(S1)(curves);
  //var b1Map = MAP(b1)(domain2);
  //DRAW(b1Map)
  return b1;
}

/* This function creates a 2 grade Bezier curve. The function takes as input an array of curves and a color. It returns to the drawing of curves. 

   INPUT - An array of curves and a color

   OUTPUT - A 2 grade Bezier curve

*/

function createBezierS2 (curves, color) {
  var b1 = BEZIER(S2)(curves);
  var b1Map = MAP(b1)(domain3);
  return DRAW(COLOR(color)(b1Map));
}

/* This function creates a 1 grade Bezier curve. It takes in input an initial point, a final point and an array of points. It returns the 1 grade Bezier curve. 
 
   INPUT - An initial point, a final point and an array of points.

   OUTPUT - A 1 grade Bezier curve. 

*/

function createCurveSurface(pointStart, pointFinal, points) {
  var nubs = [];
  nubs.push(pointStart);
  var j = 1;
  for(var i=0; i<points.length; i++) {
      nubs[j] = createNubs(points[i]);
      DRAW(nubs[j]);
      j++;
  }
  nubs.push(pointFinal);

  return createBezierS1(nubs);
    }



//---------------------------------------------------------------------------MITOCHONDRION 1-------------------------------------------------------------------

var controlsMitoBottom1 = [[278.3294677734375,92.87374877929688,0],[275.994384765625,95.2088394165039,0],[274.0653991699219,96.4271469116211,0],[271.7303161621094,97.44239807128906,0],[269.3952331542969,96.93477630615234,0],[268.07537841796875,95.91951751708984,0],[267.5677795410156,93.7874755859375,0],[268.3799743652344,91.452392578125,0],[267.8723449707031,90.4371337890625,0],[266.8570861816406,89.52339935302734,0],[265.232666015625,89.62493133544922,0],[264.11590576171875,91.85848999023438,0],[262.2884216308594,94.70121002197266,0],[261.37469482421875,96.32562255859375,0],[258.8365478515625,96.32562255859375,0],[255.58773803710938,95.61493682861328,0],[253.86180114746094,93.99053192138672,0],[253.25265502929688,92.0615463256836,0],[254.3694305419922,89.52339935302734,0],[256.1968994140625,87.59441375732422,0],[257.4151916503906,85.4623794555664,0],[257.6182556152344,83.22881317138672,0],[256.50146484375,82.21356201171875,0],[255.181640625,81.7059326171875,0],[253.3541717529297,82.51813507080078,0],[252.23739624023438,84.34559631347656,0],[251.12062072753906,85.36085510253906,0],[249.19163513183594,86.57916259765625,0],[246.6534881591797,87.39136505126953,0],[244.3184051513672,87.18831634521484,0],[242.2878875732422,85.97000885009766,0],[240.8665313720703,84.65017700195312,0],[240.56195068359375,82.21356201171875,0],[241.98330688476562,79.87847137451172,0],[244.52145385742188,77.74642944335938,0],[245.84127807617188,76.12202453613281,0],[246.34890747070312,73.88845825195312,0],[246.34890747070312,71.45184326171875,0],[244.6229705810547,70.43658447265625,0],[242.2878875732422,69.82743072509766,0],[239.34364318847656,71.24879455566406,0],[237.9222869873047,73.17778015136719,0],[235.99330139160156,74.80219268798828,0],[234.06431579589844,75.41134643554688,0],[230.71397399902344,75.10676574707031,0],[229.59718322753906,74.09150695800781,0],[227.56666564941406,71.75642395019531,0],[227.7697296142578,69.52285766601562,0],[228.988037109375,66.68013763427734,0],[230.5109100341797,64.75115203857422,0],[231.01853942871094,62.00996017456055,0],[229.59718322753906,59.57334518432617,0],[227.36361694335938,58.456565856933594,0],[224.52090454101562,57.44131088256836,0],[221.27207946777344,57.13673400878906,0],[219.546142578125,55.816898345947266,0],[218.226318359375,53.989437103271484,0],[217.2110595703125,51.34977340698242,0],[216.90647888183594,47.999427795410156,0],[217.2110595703125,44.852134704589844,0],[219.4446258544922,42.618568420410156,0],[221.88124084472656,41.19721221923828,0],[224.927001953125,41.60331344604492,0],[227.7697296142578,43.02467346191406,0],[230.1048126220703,43.02467346191406,0]];
var nubscontrolsMitoBottom1 = createNubs(controlsMitoBottom1);

var controlsMitoIn1 = [[276.0959167480469,91.55391693115234,0],[275.0806579589844,92.56916809082031,0],[273.5577697753906,93.7874755859375,0],[271.6287841796875,94.3966293334961,0],[270.81658935546875,94.1935806274414,0],[270.613525390625,93.68595123291016,0],[270.5119934082031,93.1783218383789,0],[270.613525390625,91.0462875366211,0],[270.0043640136719,89.8279800415039,0],[267.8723449707031,87.59441375732422,0],[265.1980895996094,87.59922790527344,0],[262.1410827636719,90.05345916748047,0],[260.4609680175781,93.27985382080078,0],[259.75030517578125,93.7874755859375,0],[259.03961181640625,93.7874755859375,0],[257.5167236328125,93.38137817382812,0],[256.70452880859375,92.97527313232422,0],[256.6029968261719,92.0615463256836,0],[257.212158203125,90.23408508300781,0],[258.531982421875,88.71119689941406,0],[259.851806640625,85.36085510253906,0],[259.75030517578125,82.82271575927734,0],[258.48126220703125,80.27957916259766,0],[255.58773803710938,79.26931762695312,0],[252.0343475341797,80.79219818115234,0],[250.40994262695312,82.21356201171875,0],[249.39468383789062,83.22881317138672,0],[248.27789306640625,83.73644256591797,0],[246.450439453125,84.34559631347656,0],[244.6229705810547,84.24407196044922,0],[243.50619506835938,84.14254760742188,0],[243.81077575683594,82.11203002929688,0],[244.72450256347656,80.79219818115234,0],[245.94281005859375,79.16779327392578,0],[249.3962860107422,75.75862121582031,0],[249.6546173095703,73.47660827636719,0],[249.5977325439453,70.84268951416016,0],[247.5672149658203,68.2030258178711,0],[244.95138549804688,66.7332534790039,0],[241.77523803710938,67.53477478027344,0],[236.19635009765625,71.24879455566406,0],[235.18109130859375,71.95947265625,0],[234.06431579589844,72.26404571533203,0],[232.4398956298828,72.46710205078125,0],[231.01853942871094,71.95947265625,0],[230.61244201660156,71.14727020263672,0],[230.81549072265625,69.42133331298828,0],[231.72921752929688,67.49234771728516,0],[234.26736450195312,65.66488647460938,0],[234.368896484375,61.603858947753906,0],[231.5261688232422,58.35504150390625,0],[230.0637969970703,57.41643524169922,0],[228.1758270263672,56.62910461425781,0],[224.52090454101562,55.004695892333984,0],[222.5919189453125,54.903167724609375,0],[221.67819213867188,54.39554214477539,0],[220.7644500732422,53.1772346496582,0],[219.74920654296875,51.24824523925781,0],[219.64767456054688,47.89790344238281,0],[219.64767456054688,45.46128845214844,0],[220.66293334960938,44.54755783081055,0],[222.28733825683594,44.64908218383789,0],[225.02853393554688,44.852134704589844,0],[230.4082489013672,47.599491119384766,0],[232.5610809326172,46.48001480102539,0]]
var nubsMitoIn1 = createNubs(controlsMitoIn1);
var controlsMitoIn2 = [[232.5610809326172,46.48001480102539,0],[233.96278381347656,39.77585220336914,0],[235.38414001464844,38.760597229003906,0],[236.29788208007812,39.0651741027832,0],[237.41465759277344,40.385005950927734,0],[238.12533569335938,41.90789031982422,0],[238.76126098632812,46.69527816772461,0],[241.2726287841797,48.60858154296875,0],[243.91229248046875,46.88264465332031,0],[245.33364868164062,44.852134704589844,0],[247.16111755371094,44.64908218383789,0],[248.6840057373047,44.95365905761719,0],[250.8160400390625,45.96891403198242,0],[252.8465576171875,47.18722152709961,0],[253.151123046875,48.710105895996094,0],[253.151123046875,50.23299026489258,0],[252.54197692871094,51.14672088623047,0],[252.44044494628906,51.24824523925781,0],[251.42518615722656,51.34977340698242,0],[249.5977325439453,51.65435028076172,0],[247.4656982421875,53.68486022949219,0],[247.36416625976562,55.410797119140625,0],[247.97332763671875,56.832157135009766,0],[251.72976684570312,59.67487335205078,0],[255.42422485351562,59.52619552612305,0],[258.1368103027344,59.009517669677734,0],[260.93548583984375,57.760868072509766,0],[263.6082763671875,57.33978271484375,0],[265.13116455078125,57.5428352355957,0],[266.1463928222656,58.1519889831543,0],[266.6540222167969,58.862667083740234,0],[266.9586181640625,59.97945022583008,0],[266.3494567871094,60.89318084716797,0],[265.74029541015625,61.40080642700195,0],[265.0296325683594,61.9084358215332,0],[262.4914855957031,63.53284454345703,0],[259.2132263183594,64.52078247070312,0],[256.5867614746094,65.81248474121094,0],[256.5006408691406,69.94593811035156,0],[258.9979553222656,71.58209228515625,0],[262.0980224609375,71.0223617553711,0],[265.943359375,69.31980895996094,0],[267.973876953125,69.11675262451172,0],[270.5119934082031,69.11675262451172,0],[272.5425109863281,69.31980895996094,0],[273.5577697753906,69.42133331298828,0],[273.7608337402344,69.82743072509766,0],[274.47149658203125,70.9442138671875,0],[274.0653991699219,71.85794830322266,0],[273.5577697753906,72.26404571533203,0],[272.7455749511719,72.5686264038086,0],[270.3089599609375,72.9747314453125,0],[266.8570861816406,73.27930450439453,0],[264.46612548828125,74.4238510131836,0],[263.6082763671875,78.05101013183594,0],[264.81060791015625,82.0448989868164,0],[266.96343994140625,83.76716613769531,0],[272.1302490234375,82.69075012207031,0],[274.3699951171875,82.21356201171875,0],[276.705078125,82.11203002929688,0],[278.22796630859375,82.21356201171875,0],[278.9386291503906,82.51813507080078,0],[279.3447265625,82.92424011230469,0],[279.54779052734375,83.63491821289062,0],[279.4462585449219,86.071533203125,0],[279.1416931152344,88.00051879882812,0],[277.7203369140625,90.0310287475586,0],[277.6188049316406,90.0310287475586,0],[276.0959167480469,91.55391693115234,0]];
var nubsMitoIn2 = createNubs(controlsMitoIn2);

var boundary1 = createBezierS1([nubscontrolsMitoBottom1, nubsMitoIn1]);
var boundary1Map = MAP(boundary1)(domain2);
DRAW(COLOR(mattCoralRed)(boundary1Map));

var controlsCurveLateral1 = [[278.3294677734375,92.87374877929688,0],[278.3294677734375,92.87374877929688,-5],[278.3294677734375,92.87374877929688,-10]];
var bCurveLateral1 = BEZIER(S1)(controlsCurveLateral1);
var bMapCurveLateral1 = MAP(BEZIER(S0)(controlsCurveLateral1))(domain1);

var controlsCurveLateral12 = [[230.1048126220703,43.02467346191406,0],[230.1048126220703,43.02467346191406,-5],[230.1048126220703,43.02467346191406,-10]];
var bCurveLateral12 = BEZIER(S1)(controlsCurveLateral12);
var bMapCurveLateral12 = MAP(BEZIER(S0)(controlsCurveLateral12))(domain1);

var CurveCentral1 = [[230.1048126220703,43.02467346191406,-10], [232.5397491455078,48.04398727416992,-10], [237.0068817138672,51.69890594482422,-10], [240.56027221679688,58.09502029418945,-10], [248.9868927001953,63.78045654296875,-10], [251.4235076904297,70.78572082519531,-10],[258.2257385253906,74.54216766357422,-10],[262.8959045410156,82.46116638183594,-10],[272.1347351074219,85.40541076660156,-10],[273.0484619140625,89.06033325195312,-10],[278.3294677734375,92.87374877929688,-10]];
var CurveCentralReverse1 = [[278.3294677734375,92.87374877929688,-10], [273.0484619140625,89.06033325195312,-10],[272.1347351074219,85.40541076660156,-10], [262.8959045410156,82.46116638183594,-10],[258.2257385253906,74.54216766357422,-10], [251.4235076904297,70.78572082519531,-10],[248.9868927001953,63.78045654296875,-10], [240.56027221679688,58.09502029418945,-10],[237.0068817138672,51.69890594482422,-10], [232.5397491455078,48.04398727416992,-10],[230.1048126220703,43.02467346191406,-10]];
var nubsCurveCentral1 = createNubs(CurveCentral1);
var nubsCurveCentralReverse1 = createNubs(CurveCentralReverse1);
var mapLateralSx1 = MAP(COONS_PATCH([nubscontrolsMitoBottom1,nubsCurveCentralReverse1,bCurveLateral1,bCurveLateral12]))(domain2);
DRAW(COLOR(mattCoralRed)(mapLateralSx1));


var controlsMitoBottom12 = [[230.1048126220703,43.02467346191406,0],[230.5109100341797,40.99415969848633,0],[230.5109100341797,38.760597229003906,0],[231.3231201171875,37.64381408691406,0],[231.3231201171875,37.54228973388672,0],[234.97804260253906,36.32398223876953,0],[237.11007690429688,37.03466033935547,0],[239.14059448242188,39.3697509765625,0],[239.74974060058594,41.60331344604492,0],[240.66348266601562,43.93840408325195,0],[241.78025817871094,45.15671157836914,0],[243.10009765625,44.750606536865234,0],[244.72450256347656,43.4307746887207,0],[246.95806884765625,42.618568420410156,0],[248.88705444335938,42.82162094116211,0],[251.42518615722656,44.0399284362793,0],[254.1663818359375,46.07044219970703,0],[255.9938507080078,48.4055290222168,0],[256.6029968261719,50.537567138671875,0],[255.79078674316406,51.857398986816406,0],[253.86180114746094,53.38028335571289,0],[251.42518615722656,53.989437103271484,0],[250.71450805664062,55.20774459838867,0],[251.32366943359375,56.12147521972656,0],[252.8465576171875,57.33978271484375,0],[255.3846893310547,57.5428352355957,0],[257.8213195800781,57.238258361816406,0],[260.4609680175781,55.816898345947266,0],[262.8975830078125,54.80164337158203,0],[265.232666015625,54.80164337158203,0],[267.1616516113281,55.71537399291992,0],[268.6845397949219,57.33978271484375,0],[269.49676513671875,59.370296478271484,0],[269.3952331542969,61.40080642700195,0],[268.1769104003906,62.822166442871094,0],[265.943359375,64.24352264404297,0],[263.2021484375,65.15725708007812,0],[260.4609680175781,65.86793518066406,0],[259.75030517578125,67.39081573486328,0],[259.851806640625,69.31980895996094,0],[261.9838562011719,69.72590637207031,0],[263.40521240234375,68.81217956542969,0],[265.5372619628906,67.5938720703125,0],[267.46624755859375,66.88319396972656,0],[270.3089599609375,66.37556457519531,0],[272.7455749511719,66.47708892822266,0],[274.7760925292969,67.1877670288086,0],[276.2989807128906,68.91370391845703,0],[277.4157409667969,70.74116516113281,0],[277.21270751953125,72.77167510986328,0],[276.2989807128906,74.19303894042969,0],[274.16693115234375,74.80219268798828,0],[270.7150573730469,75.20829010009766,0],[267.77081298828125,75.41134643554688,0],[266.75555419921875,76.12202453613281,0],[266.5525207519531,78.05101013183594,0],[267.26318359375,80.690673828125,0],[269.1921691894531,81.50287628173828,0],[271.6287841796875,80.48762512207031,0],[273.86236572265625,79.6754150390625,0],[276.50201416015625,78.76168823242188,0],[278.53253173828125,78.66016387939453,0],[280.2680358886719,79.44512176513672,0],[281.62908935546875,81.31655883789062,0],[282.2123718261719,83.13938903808594,0],[282.7966003417969,85.97000885009766,0],[281.88287353515625,88.40662384033203,0],[279.9538879394531,90.74170684814453,0],[278.3294677734375,92.87374877929688,0]];
var nubscontrolsMitoBottom12 = createNubs(controlsMitoBottom12);

var boundary2 = createBezierS1([nubscontrolsMitoBottom12, nubsMitoIn2]);
var boundary2Map = MAP(boundary2)(domain2);
DRAW(COLOR(mattCoralRed)(boundary2Map));

var mapLateralDx1 = MAP(COONS_PATCH([nubscontrolsMitoBottom12,nubsCurveCentral1,bCurveLateral12,bCurveLateral1]))(domain2);
DRAW(COLOR(mattCoralRed)(mapLateralDx1));


var controls1 = [[210.1256561279297,43.27913284301758,0],[215.26060485839844,38.549560546875,-50],[222.1522674560547,32.06329345703125,-50],[226.20619201660156,28.820159912109375,0]]
var controls2 = [[209.5851287841797,50.84644317626953,0],[215.53086853027344,45.441219329833984,-50],[227.5574951171875,35.03616714477539,-50],[235.3950653076172,28.685028076171875,0]]
var controls3 = [[212.28773498535156,59.35967254638672,0],[218.23348999023438,54.49496841430664,-50],[236.4761199951172,38.6846923828125,-50],[244.04342651367188,31.522769927978516,0]]
var controls4 = [[217.69296264648438,67.6026382446289,0],[221.61175537109375,63.5487174987793,-50],[247.55682373046875,40.57651901245117,-50],[252.28639221191406,35.71181869506836,0]]
var controls5 = [[223.0981903076172,75.3050765991211,0],[224.85488891601562,73.68350982666016,-50],[259.44830322265625,43.68452453613281,-50],[260.79962158203125,42.46834945678711,0]]
var controls6 = [[229.04393005371094,81.25082397460938,0],[230.93576049804688,80.03465270996094,-60],[266.47509765625,50.7113151550293,-60],[268.5020751953125,49.08974838256836,0]]
var controls7 = [[236.4761199951172,88.41275024414062,0],[239.44898986816406,86.25065612792969,-50],[272.69110107421875,59.76506423950195,-50],[275.5288391113281,57.60297393798828,0]]
var controls8 = [[243.50289916992188,94.62875366210938,0],[249.1783905029297,89.89918518066406,-50],[271.3398132324219,69.49446868896484,-50],[279.1773681640625,62.467674255371094,0]]
var controls9 = [[252.55665588378906,101.25015258789062,0],[263.2319641113281,92.87205505371094,-50],[279.1773681640625,80.03465270996094,-50],[286.87982177734375,74.08890533447266,0]]
var controls10 = [[260.52935791015625,104.4932861328125,0],[271.6100769042969,95.57466888427734,-50],[280.2584228515625,88.9532699584961,-50],[289.9878234863281,81.52108764648438,0]]
var controls11 = [[269.1777038574219,105.43920135498047,0],[278.3666076660156,98.95293426513672,-50],[282.6907653808594,95.43953704833984,-50],[288.9067687988281,89.35865783691406,0]]

var curveExMitochondrion = createCurveSurface([217.15243530273438,34.90103530883789+1,0],[281.6097412109375,97.73675537109375-1,0], [controls1, controls2, controls3, controls4, controls5, controls6, controls7, controls8, controls9, controls10, controls11]);
DRAW(COLOR(mattBurgundy)(MAP(curveExMitochondrion)(domain3)));

var controls12 = [[213.774169921875,44.49530792236328,0],[217.28756713867188,40.30625915527344,-15],[220.26043701171875,37.06312561035156,-15],[223.50357055664062,33.95512008666992,0]]
var controls13 = [[213.774169921875,51.386966705322266,0],[218.7740020751953,46.25200271606445,-15],[224.58462524414062,39.49547576904297,-15],[232.4221954345703,32.06329345703125,0]]
var controls14 = [[216.34165954589844,58.684017181396484,0],[221.7468719482422,52.73827362060547,-15],[231.07089233398438,42.873741149902344,-15],[239.58412170410156,33.81999206542969,0]]
var controls15 = [[221.20635986328125,65.84593963623047,0],[225.39540100097656,60.981239318847656,-15],[238.77333068847656,46.79252624511719,-15],[247.42169189453125,37.87390899658203,0]]
var controls16 = [[225.53053283691406,71.92681884765625,0],[229.04393005371094,68.54855346679688,-15],[252.55665588378906,45.711483001708984,-15],[254.85386657714844,43.41426086425781,0]]
var controlss1 = [[232.1519317626953,79.08873748779297,0],[233.63836669921875,78.0076904296875,-15],[262.01580810546875,50.84644317626953,-15],[263.2319641113281,49.76539993286133,0]]
var controlss2 = [[237.28689575195312,83.81830596923828,0],[240.9354248046875,80.3049087524414,-15],[264.8535461425781,57.73810577392578,-15],[268.2318115234375,55.035491943359375,0]]
var controlss3 = [[243.90829467773438,89.35865783691406,0],[249.0432586669922,84.08856964111328,-15],[267.9615478515625,65.98107147216797,-15],[273.23162841796875,61.11636734008789,0]]
var controlss4 = [[250.12429809570312,95.03414916992188,0],[258.6375427246094,87.19657135009766,-15],[272.01544189453125,74.22403717041016,-15],[278.0963439941406,68.27828979492188,0]]
var controlss5 = [[257.1510925292969,98.81780242919922,0],[265.1238098144531,91.6558837890625,-15],[275.12347412109375,82.06160736083984,-15],[283.3664245605469,75.16995239257812,0]]
var controlss6 = [[264.0427551269531,100.84475708007812,0],[270.6641540527344,94.49362182617188,-15],[277.0152893066406,87.87222290039062,-15],[285.39337158203125,80.3049087524414,0]]
var controlss7 = [[269.4479675292969,101.38528442382812,0],[276.0693664550781,95.03414916992188,-15],[278.5017395019531,92.60179138183594,-15],[285.93389892578125,85.57500457763672,0]]

var curveInMitochondrion = createCurveSurface([217.42269897460938,38.414432525634766+1,0],[278.6368408203125,95.16927337646484-1,0], [controls12, controls13, controls14, controls15, controls16, controlss1, controlss2, controlss3, controlss4, controlss5, controlss6, controlss7]);
createBezierS2([curveExMitochondrion, curveInMitochondrion], mattBurgundy);