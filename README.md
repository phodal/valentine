# valentina



##Remind

    curl http://0.0.0.0:5000/todo1 -d "data=Remember the milk" -X PUT


##IR Remote

    irsend SEND_ONCE home KEY_0

##Ajax

    lettuce.post("http://127.0.0.1:5000/some", "something", function(data){console.log(data)})

##FX

    L.FX.fadeIn(document.getElementById('results'), {duration: 2000, complete: function() {}});
