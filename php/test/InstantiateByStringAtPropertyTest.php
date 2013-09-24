<?php

require __DIR__ . '/../vendor/autoload.php';

class HasStatic {
  public static function static_method() {
    return true;
  }
}

class SUT {
  public $has_static;

  public function __construct() {
    $this->has_static = new HasStatic();
  }

  public function call_static() {
    // This is a parse error
    // $this->has_static::static_method();
    // which makes sense-- don't call static members on objects!
    $has_static = $this->has_static;
    // Still weird and wrong, but works:
    return $has_static::static_method();
  }

}

class StaticCallOnObjectAtProperty extends PHPUnit_Framework_TestCase {
  public function testStaticCallOnObjectAtProperty() {
    $sut = new SUT();
    $this->assertTrue($sut->call_static(), 'call_static() succeeded');
  }
} 
