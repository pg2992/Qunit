module("Demo Group");
test( "Demo Test - Passed", function() {
      var value = "hello world";
      equal( value, "hello world", "We expect value to be 'hello world'" );

      var value = "hello";
      equal( value, "hello", "We expect value to be 'hello'" );

    });


test( "Demo Test - Failed", function() {
      var value = "hello world";
      equal( value, "hello", "We expect value to be hello world" );
    });

