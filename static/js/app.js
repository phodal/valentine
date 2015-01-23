(function (lettuce) {
    var L = new lettuce();

    var data = {
        about: "This about A Mobile Framework For Romantic",
        what: "A Framework",
        why: "Why is a new Framework."
    };

    var about = function () {
        var result = L.Template.tmpl("<h3>{%=o.about%}</h3>", data);
	    console.log(result);
        document.getElementById("results").innerHTML = result;
    };

    function what() {
        var result = L.Template.tmpl("<h3>{%=o.what%}</h3>", data);
	    console.log(result);
        document.getElementById("results").innerHTML = result;
    }

	function showLove() {
		var c = document.getElementsByTagName('canvas')[0];
		var b = document.body;
		var a = c.getContext('2d');
		e=[];h=[];O=c.width=innerWidth;Q=c.height=innerHeight;v=32;M=Math;R=M.random;C=M.cos;Y=6.3;for(i=0;i<Y;i+=0.2)h.push([O/2+180*M.pow(M.sin(i),3),Q/2+10*-(15*C(i)-5*C(2*i)-2*C(3*i)-C(4*i))]);
		for(i=0;i<v;){x=R()*O;y=R()*Q;H=80*(i/v)+280;S=40*R()+60;B=60*R()+20;f=[];for(k=0;k<v;)f[k++]={x:x,y:y,X:0,Y:0,R:1-k/v+1,S:R()+1,q:~~(R()*v),D:2*(i%2)-1,F:0.2*R()+0.7,f:"hsla("+~~H+","+~~S+"%,"+~~B+"%,.1)"};e[i++]=f}
		function _(d){a.fillStyle=d.f;a.beginPath();a.arc(d.x,d.y,d.R,0,Y,1);a.closePath();a.fill()}
		setInterval(function(){a.fillStyle="rgba(0,0,0,.2)";a.fillRect(0,0,O,Q);for(i=v;i--;){f=e[i];u=f[0];q=h[u.q];D=u.x-q[0];E=u.y-q[1];G=M.sqrt(D*D+E*E);10>G&&(0.95<R()?u.q=~~(R()*v):(0.99<R()&&(u.D*=-1),u.q+=u.D,u.q%=v,0>u.q&&(u.q+=v)));u.X+=-D/G*u.S;u.Y+=-E/G*u.S;u.x+=u.X;u.y+=u.Y;_(u);u.X*=u.F;u.Y*=u.F;for(k=0;k<v-1;)T=f[k],N=f[++k],N.x-=0.7*(N.x-T.x),N.y-=0.7*(N.y-T.y),_(N)}},25);
	}

    function why() {
	    document.getElementById("results").innerHTML = '<canvas width="1440" height="740"></canvas>';
	    L.Event.trigger("showLove")
    }

	L.Event.on("showLove", showLove);

    var home = function (){
        L.Router.navigate("");
    };

    L.Router
        .add(/#/, home)
        .add(/#about/, about)
        .add(/#what/, what)
        .add(/#why/, why)
        .load();

	window.setTimeout(about, 100);
	window.setTimeout(what, 3000);
	window.setTimeout(why, 6000);

}(lettuce));
