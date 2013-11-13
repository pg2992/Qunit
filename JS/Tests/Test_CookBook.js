module("Cook-book Group");

test( "ok test", function() {
  ok( true, "true succeeds" );
  ok( "non-empty", "non-empty string succeeds" );
 
  ok( false, "false fails" );
  ok( 0, "0 fails" );
  ok( NaN, "NaN fails" );
  ok( "", "empty string fails" );
  ok( null, "null fails" );
  ok( undefined, "undefined fails" );
});


test( "equal test", function() {
  equal( 0, 0, "Zero; equal succeeds" );
  equal( "", 0, "Empty, Zero; equal succeeds" );
  equal( "", "", "Empty, Empty; equal succeeds" );
  equal( 0, 0, "Zero, Zero; equal succeeds" );
 
  equal( "three", 3, "Three, 3; equal fails" );
  equal( null, false, "null, false; equal fails" );
});


test( "strictEqual test", function() {
  strictEqual( 0, 0, "Zero; equal succeeds" );
  strictEqual( "", "", "Empty, Empty; equal succeeds" );
  strictEqual( 0, 0, "Zero, Zero; equal succeeds" );
 
  strictEqual( "", 0, "Empty, Zero; equal fails" );
  strictEqual( "three", 3, "Three, 3; equal fails" );
  strictEqual( null, false, "null, false; equal fails" );
});

test( "deepEqual test", function() {
  var obj = { foo: "bar" };
  deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );

  deepEqual( obj, { bar: "bar" }, "Two objects can be the same in value" );
});

test( "Synchronous Callbacks #1 test", function() {
  expect( 2 );
 
  function calc( x, operation ) {
    return operation( x );
  }
 
  var result = calc( 2, function( x ) {
    ok( true, "calc() calls operation function" );
    return x * x;
  });
 
  equal( result, 4, "2 square equals 4" );
});

test( "Synchronous Callbacks #2 test",2, function() {
 
  function calc( x, operation ) {
    return operation( x );
  }
 
  var result = calc( 2, function( x ) {
    ok( true, "calc() calls operation function" );
    return x * x;
  });
 
  equal( result, 4, "2 square equals 4" );
});


	
module( "Module Test Group", {
  setup: function() {
    ok( true, "one extra assert per test" );
  }, teardown: function() {
    ok( true, "and one extra assert after each test" );
  }
});
test( "test with setup and teardown", function() {
  expect( 2 );
});