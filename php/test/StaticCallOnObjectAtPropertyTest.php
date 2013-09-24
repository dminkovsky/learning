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
    // A parse error :<
    //$this->has_static::static_method();
    $has_static = $this->has_static;
    return $has_static::static_method();
  }

}

class PhpStaticCallOnObjectProperty extends PHPUnit_Framework_TestCase {
  public function testPhpStaticCallOnObjectProperty() {
    $sut = new SUT();
    $this->assertTrue($sut->call_static(), 'call_static() succeeded');
  }
} 
