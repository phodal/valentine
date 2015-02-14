# Valentine

Powered by [Lettuce](http://lettuce.phodal.com)

Tutorial:

教程: [情人节礼物大作战](http://www.xuntayizhan.com/person/geeks-love-programmer-gift-guide/)

- Raspberry Pi
- Arduino
- 其他(控制用)

###[Demo](http://valentine.phodal.com)

Demo: [http://valentine.phodal.com](http://valentine.phodal.com)

Video: [http://www.tudou.com/programs/view/ymr5BpHkHYc/](http://www.tudou.com/programs/view/ymr5BpHkHYc/)

##Install

1.Clone 

    git clone https://github.com/phodal/valentine

2.Install

    pip install -r requirements.txt

3.Run

    python server.py    

##Others

####Remind

    curl http://0.0.0.0:5000/todo1 -d "data=Remember the milk" -X PUT

####IR Remote

    irsend SEND_ONCE home KEY_0

####Ajax

    lettuce.post("http://127.0.0.1:5000/some", "something", function(data){console.log(data)})

####FX

    L.FX.fadeIn(document.getElementById('results'), {duration: 2000, complete: function() {}});

## License

© 2015 [Phodal Huang](http://www.phodal.com). This code is distributed under the MIT license. See `LICENSE.txt` in this directory.

[待我代码编成，娶你为妻可好](http://www.xuntayizhan.com/person/ji-ke-ai-qing-zhi-er-shi-dai-wo-dai-ma-bian-cheng-qu-ni-wei-qi-ke-hao-wan/)
