<?php

require __DIR__ . '/../vendor/autoload.php';

class Something {
  public $property;
}


class undefinedPropertiesAreNull extends PHPUnit_Framework_TestCase {
  public function testUndefinedPropertiesAreNull() {
    $something = new Something();
    $this->assertTrue(($something->property === null), 'undefined object properties are `null`');
  }
} 
