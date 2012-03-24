(function(){var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
var $JSCompiler_prototypeAlias$$, $tuna$IS_IE$$ = !!eval("'\v' == 'v'");
function $tuna$utils$implement$$($Class$$, $Interface$$) {
  for(var $method$$2$$ in $Interface$$.prototype) {
    "function" === typeof $Interface$$.prototype[$method$$2$$] && ($Class$$.prototype[$method$$2$$] = $Interface$$.prototype[$method$$2$$])
  }
}
function $tuna$utils$extend$$($Class$$1$$, $Parent$$) {
  function $Link$$() {
  }
  $Link$$.prototype = $Parent$$.prototype;
  $Class$$1$$.prototype = new $Link$$;
  $Class$$1$$.prototype.constructor = $Class$$1$$
}
function $tuna$utils$bind$$($func$$3$$, $context$$) {
  if($func$$3$$.bind !== $JSCompiler_alias_VOID$$) {
    return $func$$3$$.bind($context$$)
  }
  var $args$$ = Array.prototype.slice.call(arguments, 2);
  return function() {
    return $func$$3$$.apply($context$$, $args$$.concat(Array.prototype.slice.call(arguments)))
  }
}
function $tuna$utils$isObjectsEquals$$($object1$$, $object2$$) {
  var $result$$ = $object1$$ === $object2$$;
  if(!$result$$ && $object1$$ !== $JSCompiler_alias_NULL$$ && $object2$$ !== $JSCompiler_alias_NULL$$) {
    var $result$$ = $JSCompiler_alias_TRUE$$, $key$$13$$;
    for($key$$13$$ in $object1$$) {
      $result$$ = $object1$$[$key$$13$$] instanceof Object && $object2$$[$key$$13$$] instanceof Object ? $result$$ && $tuna$utils$isObjectsEquals$$($object1$$[$key$$13$$], $object2$$[$key$$13$$]) : $result$$ && $object1$$[$key$$13$$] === $object2$$[$key$$13$$]
    }
  }
  return $result$$
}
function $tuna$utils$indexOf$$($element$$7$$, $array$$10$$) {
  if($array$$10$$.indexOf !== $JSCompiler_alias_VOID$$) {
    return $array$$10$$.indexOf($element$$7$$)
  }
  for(var $i$$1$$ = 0, $l$$ = $array$$10$$.length;$i$$1$$ < $l$$;) {
    if($array$$10$$[$i$$1$$] === $element$$7$$) {
      return $i$$1$$
    }
    $i$$1$$++
  }
  return-1
}
function $Config$$() {
  this.$__data$ = $JSCompiler_alias_NULL$$
}
$Config$$.prototype.init = $JSCompiler_set$$("$__data$");
$Config$$.prototype.get = function $$Config$$$$get$($key$$14$$, $subKey$$) {
  return this.$__data$[$key$$14$$] !== $JSCompiler_alias_VOID$$ ? $subKey$$ !== $JSCompiler_alias_VOID$$ ? this.$__data$[$key$$14$$][$subKey$$] || $JSCompiler_alias_NULL$$ : this.$__data$[$key$$14$$] : $JSCompiler_alias_NULL$$
};
var $tuna$utils$config$$ = new $Config$$;
function $tuna$dom$__addCustomIEListener$$($element$$8$$, $type$$47$$, $handler$$3$$) {
  $element$$8$$.$__customListener$ == $JSCompiler_alias_VOID$$ && ($element$$8$$.$__customListener$ = function $$element$$8$$$$__customListener$$($event$$3$$) {
    if($event$$3$$.$__type$ !== $JSCompiler_alias_VOID$$) {
      var $handlers_type$$48$$ = $event$$3$$.$__type$;
      delete $event$$3$$.$__type$;
      var $handlers_type$$48$$ = $element$$8$$["__" + $handlers_type$$48$$], $i$$2$$;
      for($i$$2$$ in $handlers_type$$48$$) {
        $handlers_type$$48$$[$i$$2$$].call($element$$8$$, $event$$3$$)
      }
    }
  }, $element$$8$$.attachEvent("onhelp", $element$$8$$.$__customListener$));
  $element$$8$$["__" + $type$$47$$] === $JSCompiler_alias_VOID$$ && ($element$$8$$["__" + $type$$47$$] = []);
  $element$$8$$["__" + $type$$47$$].push($handler$$3$$)
}
var $tuna$dom$__selectorEngine$$ = $JSCompiler_alias_NULL$$;
function $tuna$dom$select$$($selector$$, $context$$1$$) {
  return $tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$($selector$$, $context$$1$$) : $JSCompiler_alias_NULL$$
}
function $tuna$dom$selectOne$$($selector$$2$$, $context$$2$$) {
  if($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$) {
    var $result$$1$$ = $tuna$dom$__selectorEngine$$($selector$$2$$, $context$$2$$);
    if(0 < $result$$1$$.length) {
      return $result$$1$$[0]
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $tuna$dom$addChildEventListener$$($element$$11$$, $childSelector$$, $type$$51$$, $handler$$5$$) {
  $tuna$dom$addEventListener$$($element$$11$$, $type$$51$$, function($event$$5$$) {
    var $eventTarget$$ = $event$$5$$.target || $event$$5$$.srcElement, $target$$36$$ = $tuna$dom$__selectorEngine$$.matches($childSelector$$, [$eventTarget$$])[0];
    $target$$36$$ === $JSCompiler_alias_VOID$$ && ($target$$36$$ = $tuna$dom$getParentMatches$$($eventTarget$$, $childSelector$$, $element$$11$$));
    $target$$36$$ !== $JSCompiler_alias_NULL$$ && $handler$$5$$.call($target$$36$$, $event$$5$$)
  })
}
function $tuna$dom$addEventListener$$($element$$12$$, $type$$52$$, $handler$$6_listener$$26$$) {
  if($element$$12$$.addEventListener !== $JSCompiler_alias_VOID$$) {
    $element$$12$$.addEventListener($type$$52$$, $handler$$6_listener$$26$$, $JSCompiler_alias_FALSE$$)
  }else {
    if($element$$12$$.attachEvent !== $JSCompiler_alias_VOID$$) {
      var $handler$$6_listener$$26$$ = $tuna$utils$bind$$($handler$$6_listener$$26$$, $element$$12$$), $eventName$$ = "on" + $type$$52$$;
      $element$$12$$[$eventName$$] === $JSCompiler_alias_VOID$$ ? $tuna$dom$__addCustomIEListener$$($element$$12$$, $type$$52$$, $handler$$6_listener$$26$$) : $element$$12$$.attachEvent($eventName$$, $handler$$6_listener$$26$$)
    }
  }
}
function $tuna$dom$addOneEventListener$$($element$$13$$, $type$$53$$, $handler$$7$$) {
  function $listener$$27$$($event$$6_handler$$inline_12$$) {
    $handler$$7$$.call($element$$13$$, $event$$6_handler$$inline_12$$);
    var $element$$inline_10_handlers$$inline_407$$ = $element$$13$$, $i$$inline_408_type$$inline_11$$ = $type$$53$$, $event$$6_handler$$inline_12$$ = $listener$$27$$;
    if($element$$inline_10_handlers$$inline_407$$.removeEventListener !== $JSCompiler_alias_VOID$$) {
      $element$$inline_10_handlers$$inline_407$$.removeEventListener($i$$inline_408_type$$inline_11$$, $event$$6_handler$$inline_12$$, $JSCompiler_alias_FALSE$$)
    }else {
      if($element$$inline_10_handlers$$inline_407$$.detachEvent !== $JSCompiler_alias_VOID$$) {
        if($element$$inline_10_handlers$$inline_407$$["on" + $i$$inline_408_type$$inline_11$$] === $JSCompiler_alias_VOID$$) {
          if($element$$inline_10_handlers$$inline_407$$ = $element$$inline_10_handlers$$inline_407$$["__" + $i$$inline_408_type$$inline_11$$], $element$$inline_10_handlers$$inline_407$$ !== $JSCompiler_alias_VOID$$) {
            for($i$$inline_408_type$$inline_11$$ = $element$$inline_10_handlers$$inline_407$$.length - 1;0 <= $i$$inline_408_type$$inline_11$$;) {
              $element$$inline_10_handlers$$inline_407$$[$i$$inline_408_type$$inline_11$$] === $event$$6_handler$$inline_12$$ && $element$$inline_10_handlers$$inline_407$$.splice($i$$inline_408_type$$inline_11$$, 1), $i$$inline_408_type$$inline_11$$--
            }
          }
        }else {
          $element$$inline_10_handlers$$inline_407$$.detachEvent("on" + $i$$inline_408_type$$inline_11$$, $event$$6_handler$$inline_12$$)
        }
      }
    }
  }
  $tuna$dom$addEventListener$$($element$$13$$, $type$$53$$, $listener$$27$$)
}
function $tuna$dom$preventDefault$$($event$$8$$) {
  $event$$8$$.preventDefault !== $JSCompiler_alias_VOID$$ ? $event$$8$$.preventDefault() : $event$$8$$.returnValue = $JSCompiler_alias_FALSE$$
}
function $tuna$dom$stopPropagation$$($event$$9$$) {
  $event$$9$$.stopPropagation !== $JSCompiler_alias_VOID$$ ? $event$$9$$.stopPropagation() : $event$$9$$.cancelBubble = $JSCompiler_alias_TRUE$$
}
function $tuna$dom$getParentMatches$$($element$$17_parent$$4$$, $selector$$3$$, $context$$3$$) {
  for($element$$17_parent$$4$$ = $element$$17_parent$$4$$.parentNode;$element$$17_parent$$4$$ !== $JSCompiler_alias_NULL$$ && $element$$17_parent$$4$$ !== $context$$3$$ && 0 === $tuna$dom$__selectorEngine$$.matches($selector$$3$$, [$element$$17_parent$$4$$]).length;) {
    $element$$17_parent$$4$$ = $element$$17_parent$$4$$.parentNode
  }
  return $element$$17_parent$$4$$ === $context$$3$$ ? $JSCompiler_alias_NULL$$ : $element$$17_parent$$4$$
}
function $tuna$dom$getParentWithClass$$($element$$18_parent$$5$$, $className$$1$$, $context$$4$$) {
  for($element$$18_parent$$5$$ = $element$$18_parent$$5$$.parentNode;$element$$18_parent$$5$$ !== $JSCompiler_alias_NULL$$ && $element$$18_parent$$5$$ !== $context$$4$$ && !$tuna$dom$hasClass$$($element$$18_parent$$5$$, $className$$1$$);) {
    $element$$18_parent$$5$$ = $element$$18_parent$$5$$.parentNode
  }
  return $element$$18_parent$$5$$ === $context$$4$$ ? $JSCompiler_alias_NULL$$ : $element$$18_parent$$5$$
}
function $tuna$dom$hasClass$$($element$$19$$, $className$$2$$) {
  return $element$$19$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$19$$.classList.contains($className$$2$$) : $element$$19$$.className !== $JSCompiler_alias_VOID$$ ? $element$$19$$.className.match(RegExp("(\\s|^)" + $className$$2$$ + "(\\s|$)")) !== $JSCompiler_alias_NULL$$ : $JSCompiler_alias_FALSE$$
}
function $tuna$dom$addClass$$($element$$20$$, $className$$3$$) {
  $element$$20$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$20$$.classList.add($className$$3$$) : $tuna$dom$hasClass$$($element$$20$$, $className$$3$$) || ($element$$20$$.className += " " + $className$$3$$)
}
function $tuna$dom$removeClass$$($element$$21$$, $className$$4$$) {
  $element$$21$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$21$$.classList.remove($className$$4$$) : $tuna$dom$hasClass$$($element$$21$$, $className$$4$$) && ($element$$21$$.className = $element$$21$$.className.replace(RegExp("(\\s|^)" + $className$$4$$ + "(\\s|$)"), " "))
}
;function $BasicEvent$$($type$$56$$, $isBubbling$$) {
  this.$_target$ = $JSCompiler_alias_NULL$$;
  this.$_type$ = $type$$56$$;
  this.$_isBubbling$ = !!$isBubbling$$;
  this.$_isImmediateStopped$ = this.$_isStopped$ = this.$_isCanceled$ = $JSCompiler_alias_FALSE$$
}
$BasicEvent$$.prototype.$setTarget$ = $JSCompiler_set$$("$_target$");
$BasicEvent$$.prototype.preventDefault = function $$BasicEvent$$$$preventDefault$() {
  this.$_isCanceled$ = $JSCompiler_alias_TRUE$$
};
$BasicEvent$$.prototype.stopPropagation = function $$BasicEvent$$$$stopPropagation$() {
  this.$_isStopped$ = $JSCompiler_alias_TRUE$$
};
function $IEventDispatcher$$() {
}
$IEventDispatcher$$.prototype.$dispatch$ = $JSCompiler_emptyFn$$();
$IEventDispatcher$$.prototype.addEventListener = $JSCompiler_emptyFn$$();
$IEventDispatcher$$.prototype.removeEventListener = $JSCompiler_emptyFn$$();
$IEventDispatcher$$.prototype.$hasEventListener$ = $JSCompiler_emptyFn$$();
function $EventDispatcher$$($parent$$6$$) {
  this.$_propagationParent$ = $parent$$6$$ || $JSCompiler_alias_NULL$$;
  this.$_listeners$ = {}
}
$tuna$utils$implement$$($EventDispatcher$$, $IEventDispatcher$$);
$EventDispatcher$$.prototype.$dispatch$ = function $$EventDispatcher$$$$$dispatch$$($event$$11$$, $data$$22$$) {
  $event$$11$$ instanceof $BasicEvent$$ || ($event$$11$$ = new $BasicEvent$$($event$$11$$));
  var $type$$60$$ = $event$$11$$.$_type$;
  if(this.$_listeners$[$type$$60$$] !== $JSCompiler_alias_VOID$$) {
    $event$$11$$.$_target$ === $JSCompiler_alias_NULL$$ && $event$$11$$.$setTarget$(this);
    for(var $i$$6$$ = 0, $l$$3$$ = this.$_listeners$[$type$$60$$].length;$i$$6$$ < $l$$3$$;) {
      this.$_listeners$[$type$$60$$][$i$$6$$].call(this, $event$$11$$, $data$$22$$);
      if($event$$11$$.$_isImmediateStopped$) {
        break
      }
      $i$$6$$++
    }
    this.$_propagationParent$ !== $JSCompiler_alias_NULL$$ && $event$$11$$.$_isBubbling$ && !$event$$11$$.$_isImmediateStopped$ && !$event$$11$$.$_isStopped$ && this.$_propagationParent$.$dispatch$($event$$11$$)
  }
  return!$event$$11$$.$_isCanceled$
};
$EventDispatcher$$.prototype.addEventListener = function $$EventDispatcher$$$$addEventListener$($type$$61$$, $listener$$31$$) {
  this.$_listeners$[$type$$61$$] === $JSCompiler_alias_VOID$$ ? this.$_listeners$[$type$$61$$] = [$listener$$31$$] : this.$hasEventListener$($type$$61$$, $listener$$31$$) || this.$_listeners$[$type$$61$$].push($listener$$31$$)
};
$EventDispatcher$$.prototype.removeEventListener = function $$EventDispatcher$$$$removeEventListener$($type$$62$$, $listener$$32$$) {
  if(this.$_listeners$[$type$$62$$] !== $JSCompiler_alias_VOID$$) {
    var $listenerIndex$$ = $tuna$utils$indexOf$$($listener$$32$$, this.$_listeners$[$type$$62$$]);
    -1 !== $listenerIndex$$ && this.$_listeners$[$type$$62$$].splice($listenerIndex$$, 1)
  }
};
$EventDispatcher$$.prototype.$hasEventListener$ = function $$EventDispatcher$$$$$hasEventListener$$($type$$63$$, $listener$$33$$) {
  return this.$_listeners$[$type$$63$$] !== $JSCompiler_alias_VOID$$ ? -1 !== $tuna$utils$indexOf$$($listener$$33$$, this.$_listeners$[$type$$63$$]) : $JSCompiler_alias_FALSE$$
};
function $IRequest$$() {
}
$tuna$utils$extend$$($IRequest$$, $IEventDispatcher$$);
$IRequest$$.prototype.send = $JSCompiler_emptyFn$$();
$IRequest$$.prototype.abort = $JSCompiler_emptyFn$$();
function $Request$$($url$$22$$) {
  $EventDispatcher$$.call(this);
  this.$__url$ = $url$$22$$ || "/";
  this.$isSync$ = $JSCompiler_alias_FALSE$$;
  this.method = "GET";
  this.headers = [];
  this.$__request$ = this.$__response$ = this.$__data$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($Request$$, $IRequest$$);
$tuna$utils$extend$$($Request$$, $EventDispatcher$$);
$Request$$.prototype.setData = $JSCompiler_set$$("$__data$");
$Request$$.prototype.send = function $$Request$$$$send$() {
  var $i$$7_requestURL_sendData$$ = this.$__url$;
  this.$__request$ !== $JSCompiler_alias_NULL$$ && this.$__request$.abort();
  var $request$$1$$ = !$tuna$IS_IE$$ ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
  if(!this.$isSync$) {
    var $self$$1$$ = this;
    $request$$1$$.onreadystatechange = function $$request$$1$$$onreadystatechange$() {
      4 === $request$$1$$.readyState && ($self$$1$$.$__response$ = $request$$1$$.responseText, $self$$1$$.$dispatch$("complete", $self$$1$$.$__response$), $request$$1$$.abort())
    }
  }
  var $dataString$$ = $tuna$net$__splitData$$(this.$__data$).join("&");
  "GET" === this.method && "" !== $dataString$$ && ($i$$7_requestURL_sendData$$ += (-1 === $i$$7_requestURL_sendData$$.indexOf("?") ? "?" : "&") + $dataString$$);
  $request$$1$$.open(this.method, encodeURI($i$$7_requestURL_sendData$$), !this.$isSync$);
  for($i$$7_requestURL_sendData$$ = this.headers.length - 1;0 <= $i$$7_requestURL_sendData$$;) {
    $request$$1$$.setRequestHeader(this.headers[$i$$7_requestURL_sendData$$].name, this.headers[$i$$7_requestURL_sendData$$].value), $i$$7_requestURL_sendData$$--
  }
  $i$$7_requestURL_sendData$$ = $JSCompiler_alias_NULL$$;
  "POST" === this.method && ($request$$1$$.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), $i$$7_requestURL_sendData$$ = $dataString$$);
  $request$$1$$.send($i$$7_requestURL_sendData$$);
  this.$isSync$ && (this.$__response$ = $request$$1$$.responseText, this.$dispatch$("complete", this.$__response$));
  this.$__request$ = $request$$1$$
};
$Request$$.prototype.abort = function $$Request$$$$abort$() {
  this.$__request$ !== $JSCompiler_alias_NULL$$ && this.$__request$.abort()
};
function $tuna$net$__splitData$$($object$$2$$, $path$$2$$) {
  var $result$$5$$ = [];
  $path$$2$$ === $JSCompiler_alias_VOID$$ && ($path$$2$$ = []);
  if($object$$2$$ !== $JSCompiler_alias_NULL$$ && !($object$$2$$ instanceof Function)) {
    if($object$$2$$ instanceof Object) {
      for(var $key$$15$$ in $object$$2$$) {
        $result$$5$$ = $result$$5$$.concat($tuna$net$__splitData$$($object$$2$$[$key$$15$$], 0 === $path$$2$$.length ? [$key$$15$$] : ($path$$2$$.join(",") + "," + $key$$15$$).split(",")))
      }
    }else {
      $result$$5$$ = [$path$$2$$.shift() + (0 < $path$$2$$.length ? "[" + $path$$2$$.join("][") + "]=" : "=") + encodeURIComponent("" + $object$$2$$)]
    }
  }
  return $result$$5$$
}
function $tuna$net$decode$$() {
  for(var $result$$6$$ = {}, $parsedSearch_vars$$ = location.search.substr(1).split("][").join("|"), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("[").join("|"), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("]").join(""), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("&"), $i$$8$$ = 0, $l$$4$$ = $parsedSearch_vars$$.length, $pair$$ = $JSCompiler_alias_NULL$$, $path$$3$$ = $JSCompiler_alias_NULL$$, $pathToken$$ = $JSCompiler_alias_NULL$$, $context$$5$$ = $JSCompiler_alias_NULL$$;$i$$8$$ < 
  $l$$4$$;) {
    $pair$$ = $parsedSearch_vars$$[$i$$8$$].split("=");
    $path$$3$$ = $pair$$.shift().split("|");
    for($context$$5$$ = $result$$6$$;0 < $path$$3$$.length;) {
      $pathToken$$ = $path$$3$$.shift(), 0 === $path$$3$$.length ? $context$$5$$[$pathToken$$] = decodeURIComponent($pair$$.shift()) : $context$$5$$[$pathToken$$] === $JSCompiler_alias_VOID$$ && ($context$$5$$[$pathToken$$] = {}), $context$$5$$ = $context$$5$$[$pathToken$$]
    }
    $i$$8$$++
  }
  return $result$$6$$
}
;function $IResource$$() {
}
$IResource$$.prototype.set = $JSCompiler_emptyFn$$();
$IResource$$.prototype.get = $JSCompiler_emptyFn$$();
$IResource$$.prototype.clear = $JSCompiler_emptyFn$$();
function $ListResource$$($methodName$$, $recordType$$) {
  $EventDispatcher$$.call(this);
  this.$__lastArgs$ = $JSCompiler_alias_NULL$$;
  this.$_methodName$ = $methodName$$ || $JSCompiler_alias_NULL$$;
  this.$_recordType$ = $recordType$$ || $JSCompiler_alias_NULL$$;
  this.$_list$ = []
}
$tuna$utils$implement$$($ListResource$$, $IResource$$);
$tuna$utils$extend$$($ListResource$$, $EventDispatcher$$);
$JSCompiler_prototypeAlias$$ = $ListResource$$.prototype;
$JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($args$$1$$, $isForce$$) {
  var $self$$2$$ = this;
  if($isForce$$ || $args$$1$$ === $JSCompiler_alias_VOID$$ || !$tuna$utils$isObjectsEquals$$(this.$__lastArgs$, $args$$1$$)) {
    this.$_methodName$ !== $JSCompiler_alias_NULL$$ && $tuna$rest$call$$(this.$_methodName$, $args$$1$$ || $JSCompiler_alias_NULL$$, function($records$$) {
      $self$$2$$.set($records$$)
    }, this.$_recordType$), this.$__lastArgs$ = $args$$1$$ || $JSCompiler_alias_NULL$$
  }
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($list$$1$$) {
  this.$_list$ !== $list$$1$$ && (this.$_list$ = $list$$1$$, this.$dispatch$("update", this.$_list$))
};
$JSCompiler_prototypeAlias$$.get = $JSCompiler_get$$("$_list$");
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  0 < this.$_list$.length && (this.$_list$.length = 0, this.$dispatch$("update", this.$_list$))
};
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($record$$) {
  for(var $i$$9$$ = 0, $l$$5$$ = this.$_list$.length;$i$$9$$ < $l$$5$$ && !(this.$_list$[$i$$9$$].id === $record$$.id);) {
    $i$$9$$++
  }
  this.$_list$[$i$$9$$] = $record$$;
  this.$dispatch$("update", this.$_list$)
};
function $JSCompiler_StaticMethods_getItemById$$($JSCompiler_StaticMethods_getItemById$self$$, $id$$3$$) {
  for(var $i$$11$$ = 0, $l$$7$$ = $JSCompiler_StaticMethods_getItemById$self$$.$_list$.length;$i$$11$$ < $l$$7$$;) {
    if($JSCompiler_StaticMethods_getItemById$self$$.$_list$[$i$$11$$].id === $id$$3$$) {
      return $JSCompiler_StaticMethods_getItemById$self$$.$_list$[$i$$11$$]
    }
    $i$$11$$++
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.find = function $$JSCompiler_prototypeAlias$$$find$($callback$$26$$) {
  for(var $result$$7$$ = [], $i$$12$$ = 0, $l$$8$$ = this.$_list$.length;$i$$12$$ < $l$$8$$;) {
    $callback$$26$$(this.$_list$[$i$$12$$]) && $result$$7$$.push(this.$_list$[$i$$12$$]), $i$$12$$++
  }
  return $result$$7$$
};
function $JSCompiler_StaticMethods_findOne$$($callback$$27$$) {
  for(var $JSCompiler_StaticMethods_findOne$self$$ = $model$dimensions$$, $i$$13$$ = 0, $l$$9$$ = $JSCompiler_StaticMethods_findOne$self$$.$_list$.length;$i$$13$$ < $l$$9$$;) {
    if($callback$$27$$($JSCompiler_StaticMethods_findOne$self$$.$_list$[$i$$13$$])) {
      return $JSCompiler_StaticMethods_findOne$self$$.$_list$[$i$$13$$]
    }
    $i$$13$$++
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.map = function $$JSCompiler_prototypeAlias$$$map$($callback$$28$$) {
  for(var $result$$8$$ = [], $i$$14$$ = 0, $l$$10$$ = this.$_list$.length, $item$$ = $JSCompiler_alias_NULL$$;$i$$14$$ < $l$$10$$;) {
    $item$$ = $callback$$28$$(this.$_list$[$i$$14$$]), $item$$ !== $JSCompiler_alias_NULL$$ && $result$$8$$.push($item$$), $i$$14$$++
  }
  return $result$$8$$
};
function $JSCompiler_StaticMethods_each$$($JSCompiler_StaticMethods_each$self$$, $callback$$29$$) {
  for(var $i$$15$$ = 0, $l$$11$$ = $JSCompiler_StaticMethods_each$self$$.$_list$.length;$i$$15$$ < $l$$11$$;) {
    $callback$$29$$($JSCompiler_StaticMethods_each$self$$.$_list$[$i$$15$$]), $i$$15$$++
  }
}
;function $ItemResource$$() {
  $EventDispatcher$$.call(this);
  this.$_item$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($ItemResource$$, $IResource$$);
$tuna$utils$extend$$($ItemResource$$, $EventDispatcher$$);
$ItemResource$$.prototype.set = function $$ItemResource$$$$set$($item$$1$$) {
  this.$_item$ !== $item$$1$$ && (this.$_item$ = $item$$1$$, this.$dispatch$("update", this.$_item$))
};
$ItemResource$$.prototype.get = $JSCompiler_get$$("$_item$");
$ItemResource$$.prototype.clear = function $$ItemResource$$$$clear$() {
  this.$_item$ = $JSCompiler_alias_NULL$$;
  this.$dispatch$("update", this.$_item$)
};
function $Record$$($data$$25$$) {
  this.id = "";
  $data$$25$$ !== $JSCompiler_alias_VOID$$ && this.$populate$($data$$25$$)
}
$Record$$.prototype.$clone$ = function $$Record$$$$$clone$$() {
  var $clone$$ = new this.constructor, $param$$;
  for($param$$ in this) {
    this.hasOwnProperty($param$$) && ($clone$$[$param$$] = this[$param$$])
  }
  return $clone$$
};
$Record$$.prototype.$populate$ = $JSCompiler_emptyFn$$();
$Record$$.prototype.$serialize$ = $JSCompiler_emptyFn$$();
var $tuna$model$recordFactory$$ = new function() {
  this.$__records$ = {}
};
function $tuna$model$serialize$$($object$$3$$, $options$$3$$) {
  if($object$$3$$ !== $JSCompiler_alias_NULL$$) {
    if($object$$3$$ instanceof Array) {
      for(var $result$$9$$ = [], $i$$16$$ = 0, $l$$12$$ = $object$$3$$.length;$i$$16$$ < $l$$12$$;) {
        $result$$9$$.push($object$$3$$[$i$$16$$].$serialize$($options$$3$$)), $i$$16$$++
      }
      return $result$$9$$
    }
    return $object$$3$$ instanceof $Record$$ ? $object$$3$$.$serialize$($options$$3$$) : $object$$3$$
  }
  return $JSCompiler_alias_NULL$$
}
;function $IMethod$$() {
}
$IMethod$$.prototype.call = $JSCompiler_emptyFn$$();
$IMethod$$.prototype.$clone$ = $JSCompiler_emptyFn$$();
function $Method$$($name$$55$$) {
  $EventDispatcher$$.call(this);
  this.$_name$ = $name$$55$$ || $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($Method$$, $IMethod$$);
$tuna$utils$extend$$($Method$$, $EventDispatcher$$);
$Method$$.prototype.call = $JSCompiler_emptyFn$$();
$Method$$.prototype.$clone$ = function $$Method$$$$$clone$$() {
  return new this.constructor(this.$_name$)
};
function $IMethodFactory$$() {
}
$IMethodFactory$$.prototype.$createMethod$ = $JSCompiler_emptyFn$$();
function $MethodFactory$$() {
  this.$__methods$ = {};
  this.$__commonFactory$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($MethodFactory$$, $IMethodFactory$$);
$MethodFactory$$.prototype.$createMethod$ = function $$MethodFactory$$$$$createMethod$$($name$$57$$) {
  return this.$__methods$[$name$$57$$] !== $JSCompiler_alias_VOID$$ ? this.$__methods$[$name$$57$$].$clone$() : this.$__commonFactory$ !== $JSCompiler_alias_NULL$$ ? this.$__commonFactory$.$createMethod$($name$$57$$) : $JSCompiler_alias_NULL$$
};
var $tuna$rest$methodFactory$$ = new $MethodFactory$$;
function $tuna$rest$call$$($name$$59$$, $args$$4$$, $callback$$30$$, $recordName$$) {
  var $method$$4$$ = $tuna$rest$methodFactory$$.$createMethod$($name$$59$$);
  if($callback$$30$$ !== $JSCompiler_alias_VOID$$) {
    var $listener$$34$$ = function $$listener$$34$$$($event$$12$$, $data$$27$$) {
      var $result$$10$$ = $data$$27$$;
      $recordName$$ !== $JSCompiler_alias_NULL$$ && $recordName$$ !== $JSCompiler_alias_VOID$$ && ($result$$10$$ = $tuna$rest$populateRecords$$($data$$27$$, $recordName$$));
      $callback$$30$$($result$$10$$);
      $method$$4$$.removeEventListener("result", $listener$$34$$)
    };
    $method$$4$$.addEventListener("result", $listener$$34$$)
  }
  $method$$4$$.call($args$$4$$)
}
function $tuna$rest$populateRecords$$($data$$28$$, $name$$60$$) {
  if($data$$28$$ !== $JSCompiler_alias_NULL$$) {
    if($data$$28$$.splice !== $JSCompiler_alias_VOID$$) {
      for(var $result$$11$$ = [], $i$$17$$ = 0, $l$$13$$ = $data$$28$$.length;$i$$17$$ < $l$$13$$;) {
        $result$$11$$.push($tuna$rest$__populateRecord$$($data$$28$$[$i$$17$$], $name$$60$$)), $i$$17$$++
      }
      return $result$$11$$
    }
    return $tuna$rest$__populateRecord$$($data$$28$$, $name$$60$$)
  }
  return $JSCompiler_alias_NULL$$
}
function $tuna$rest$__populateRecord$$($data$$29$$, $name$$61$$) {
  var $record$$3$$ = $tuna$model$recordFactory$$.$__records$[$name$$61$$].$clone$();
  $record$$3$$.$populate$($data$$29$$);
  return $record$$3$$
}
;function $DataNode$$($value$$41$$, $parent$$7$$, $key$$16$$) {
  this.$__value$ = $value$$41$$;
  this.$__parent$ = $parent$$7$$ || $JSCompiler_alias_NULL$$;
  this.$__key$ = $key$$16$$ || $JSCompiler_alias_NULL$$;
  this.$__keyNode$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {}
}
$DataNode$$.prototype.getParent = $JSCompiler_get$$("$__parent$");
$DataNode$$.prototype.getKey = function $$DataNode$$$$getKey$() {
  this.$__keyNode$ === $JSCompiler_alias_NULL$$ && (this.$__keyNode$ = new $tuna$tmpl$data$DataNode$$(this.$__key$));
  return this.$__keyNode$
};
$DataNode$$.prototype.$getRoot$ = function $$DataNode$$$$$getRoot$$() {
  return this.$__parent$ !== $JSCompiler_alias_NULL$$ ? this.$__parent$.$getRoot$() : this
};
$DataNode$$.prototype.$getValue$ = $JSCompiler_get$$("$__value$");
function $JSCompiler_StaticMethods_growChild$$($JSCompiler_StaticMethods_growChild$self$$, $key$$17$$) {
  var $result$$12$$ = $JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$17$$] !== $JSCompiler_alias_VOID$$) {
    $result$$12$$ = $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$17$$]
  }else {
    if($JSCompiler_StaticMethods_growChild$self$$.$__value$ !== $JSCompiler_alias_NULL$$) {
      var $keyValue$$ = $JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$17$$];
      $keyValue$$ !== $JSCompiler_alias_VOID$$ ? ($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$17$$] = new $tuna$tmpl$data$DataNode$$($keyValue$$, $JSCompiler_StaticMethods_growChild$self$$, $key$$17$$), $result$$12$$ = $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$17$$]) : $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$17$$] = $tuna$tmpl$data$NULL_NODE$$
    }
  }
  return $result$$12$$
}
var $tuna$tmpl$data$DataNode$$ = $DataNode$$, $tuna$tmpl$data$NULL_NODE$$ = new $tuna$tmpl$data$DataNode$$($JSCompiler_alias_NULL$$);
function $PathEvaluator$$() {
  this.$__parsedPath$ = $JSCompiler_alias_NULL$$
}
$PathEvaluator$$.prototype.$setPath$ = function $$PathEvaluator$$$$$setPath$$($path$$4$$) {
  this.$__parsedPath$ = $path$$4$$.split("/")
};
$PathEvaluator$$.prototype.evaluate = function $$PathEvaluator$$$$evaluate$($dataNode_node$$2$$) {
  $dataNode_node$$2$$ = $JSCompiler_StaticMethods___applyNextToken$$(this, this.$__parsedPath$, $dataNode_node$$2$$, 0);
  return $dataNode_node$$2$$ !== $JSCompiler_alias_NULL$$ ? $dataNode_node$$2$$ : $tuna$tmpl$data$NULL_NODE$$
};
function $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $dataNode$$1$$, $index$$52$$) {
  var $token$$4$$ = $path$$5$$[$index$$52$$];
  return $dataNode$$1$$ !== $JSCompiler_alias_NULL$$ && $token$$4$$ !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $JSCompiler_StaticMethods___applyToken$$($token$$4$$, $dataNode$$1$$), ++$index$$52$$) : $dataNode$$1$$
}
function $JSCompiler_StaticMethods___applyToken$$($token$$5$$, $dataNode$$2$$) {
  switch($token$$5$$) {
    case "":
      return $dataNode$$2$$.$getRoot$();
    case ".":
      return $dataNode$$2$$;
    case "..":
      return $dataNode$$2$$.getParent();
    case "$key":
      return $dataNode$$2$$.getKey()
  }
  return $JSCompiler_StaticMethods_growChild$$($dataNode$$2$$, $token$$5$$)
}
;function $tuna$tmpl$settings$SpotSettings$$() {
  this.$dataPath$ = this.$targetClass$ = "";
  this.filter = $JSCompiler_alias_NULL$$
}
;function $AttributeSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$attributeName$ = "";
  this.$hasEvent$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($AttributeSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $ConditionSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$operatorData$ = this.$operatorType$ = this.$actionData$ = this.$actionType$ = ""
}
$tuna$utils$extend$$($ConditionSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $CheckboxSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this)
}
$tuna$utils$extend$$($CheckboxSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $ListSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$itemRendererID$ = this.keyPath = "";
  this.$itemSettings$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($ListSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $TemplateSettings$$() {
  this.$__spots$ = [];
  this.$__lists$ = [];
  this.$__attributes$ = [];
  this.$__conditions$ = [];
  this.$__checkboxex$ = []
}
;function $IMarkupExtractor$$() {
}
$IMarkupExtractor$$.prototype.$extract$ = $JSCompiler_emptyFn$$();
function $SpotExtractor$$() {
  this.$_tagName$ = "spot";
  this.$_ns$ = "tuna:"
}
$tuna$utils$implement$$($SpotExtractor$$, $IMarkupExtractor$$);
$SpotExtractor$$.prototype.$extract$ = function $$SpotExtractor$$$$$extract$$($element$$25$$, $settings$$1$$) {
  for(var $elements$$1$$ = $element$$25$$.getElementsByTagName($tuna$IS_IE$$ ? this.$_tagName$ : this.$_ns$ + this.$_tagName$), $i$$18$$ = 0, $l$$14$$ = $elements$$1$$.length, $item$$2$$ = $JSCompiler_alias_NULL$$;$i$$18$$ < $l$$14$$;) {
    $item$$2$$ = this.$_createItem$(), this.$_parseElement$($elements$$1$$.item($i$$18$$), $item$$2$$), this.$_saveItem$($item$$2$$, $settings$$1$$), $i$$18$$++
  }
};
$SpotExtractor$$.prototype.$_createItem$ = function $$SpotExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$SpotSettings$$
};
$SpotExtractor$$.prototype.$_parseElement$ = function $$SpotExtractor$$$$$_parseElement$$($element$$26$$, $item$$3$$) {
  $item$$3$$.$targetClass$ = $element$$26$$.getAttribute(this.$_ns$ + "target");
  $item$$3$$.$dataPath$ = $element$$26$$.getAttribute(this.$_ns$ + "path");
  $item$$3$$.filter = $element$$26$$.getAttribute(this.$_ns$ + "filter")
};
$SpotExtractor$$.prototype.$_saveItem$ = function $$SpotExtractor$$$$$_saveItem$$($item$$4$$, $settings$$2$$) {
  $settings$$2$$.$__spots$.push($item$$4$$)
};
function $ListExtractor$$($templateBuilder$$) {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "list";
  this.$__templateBuilder$ = $templateBuilder$$
}
$tuna$utils$extend$$($ListExtractor$$, $SpotExtractor$$);
$ListExtractor$$.prototype.$_createItem$ = function $$ListExtractor$$$$$_createItem$$() {
  return new $ListSettings$$
};
$ListExtractor$$.prototype.$_parseElement$ = function $$ListExtractor$$$$$_parseElement$$($element$$27$$, $item$$5$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$27$$, $item$$5$$);
  $item$$5$$.$itemRendererID$ = $element$$27$$.getAttribute(this.$_ns$ + "item-renderer-id");
  $item$$5$$.keyPath = $element$$27$$.getAttribute(this.$_ns$ + "key-path");
  var $templateID$$ = $element$$27$$.getAttribute(this.$_ns$ + "item-template-id");
  $item$$5$$.$itemSettings$ = $JSCompiler_StaticMethods_buildSettings$$(this.$__templateBuilder$, $templateID$$)
};
$ListExtractor$$.prototype.$_saveItem$ = function $$ListExtractor$$$$$_saveItem$$($item$$6$$, $settings$$3$$) {
  $settings$$3$$.$__lists$.push($item$$6$$)
};
function $AttributeExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "attr"
}
$tuna$utils$extend$$($AttributeExtractor$$, $SpotExtractor$$);
$AttributeExtractor$$.prototype.$_createItem$ = function $$AttributeExtractor$$$$$_createItem$$() {
  return new $AttributeSettings$$
};
$AttributeExtractor$$.prototype.$_parseElement$ = function $$AttributeExtractor$$$$$_parseElement$$($element$$28$$, $item$$7$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$28$$, $item$$7$$);
  $item$$7$$.$attributeName$ = $element$$28$$.getAttribute(this.$_ns$ + "name");
  $item$$7$$.$hasEvent$ = !!$element$$28$$.getAttribute(this.$_ns$ + "event")
};
$AttributeExtractor$$.prototype.$_saveItem$ = function $$AttributeExtractor$$$$$_saveItem$$($item$$8$$, $settings$$4$$) {
  $settings$$4$$.$__attributes$.push($item$$8$$)
};
function $ConditionExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "if";
  this.$__operatorAttrs$ = ["isset", "notset", "eq", "ne"];
  this.$__actionAttrs$ = ["class"]
}
$tuna$utils$extend$$($ConditionExtractor$$, $SpotExtractor$$);
$ConditionExtractor$$.prototype.$_createItem$ = function $$ConditionExtractor$$$$$_createItem$$() {
  return new $ConditionSettings$$
};
$ConditionExtractor$$.prototype.$_parseElement$ = function $$ConditionExtractor$$$$$_parseElement$$($element$$29$$, $item$$9$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$29$$, $item$$9$$);
  for(var $i$$inline_33_i$$inline_41$$ = 0, $l$$inline_34_l$$inline_42$$ = this.$__operatorAttrs$.length, $attr$$inline_35_attr$$inline_43$$ = $JSCompiler_alias_NULL$$, $value$$inline_36_value$$inline_44$$ = $JSCompiler_alias_NULL$$;$i$$inline_33_i$$inline_41$$ < $l$$inline_34_l$$inline_42$$;) {
    $attr$$inline_35_attr$$inline_43$$ = this.$__operatorAttrs$[$i$$inline_33_i$$inline_41$$];
    $value$$inline_36_value$$inline_44$$ = $element$$29$$.getAttribute("tuna:" + $attr$$inline_35_attr$$inline_43$$);
    if($value$$inline_36_value$$inline_44$$ !== $JSCompiler_alias_NULL$$) {
      $item$$9$$.$operatorType$ = $attr$$inline_35_attr$$inline_43$$;
      $item$$9$$.$operatorData$ = $value$$inline_36_value$$inline_44$$;
      break
    }
    $i$$inline_33_i$$inline_41$$++
  }
  $i$$inline_33_i$$inline_41$$ = 0;
  $l$$inline_34_l$$inline_42$$ = this.$__actionAttrs$.length;
  for($value$$inline_36_value$$inline_44$$ = $attr$$inline_35_attr$$inline_43$$ = $JSCompiler_alias_NULL$$;$i$$inline_33_i$$inline_41$$ < $l$$inline_34_l$$inline_42$$;) {
    $attr$$inline_35_attr$$inline_43$$ = this.$__actionAttrs$[$i$$inline_33_i$$inline_41$$];
    $value$$inline_36_value$$inline_44$$ = $element$$29$$.getAttribute("tuna:" + $attr$$inline_35_attr$$inline_43$$);
    if($value$$inline_36_value$$inline_44$$ !== $JSCompiler_alias_NULL$$) {
      $item$$9$$.$actionType$ = $attr$$inline_35_attr$$inline_43$$;
      $item$$9$$.$actionData$ = $value$$inline_36_value$$inline_44$$;
      break
    }
    $i$$inline_33_i$$inline_41$$++
  }
};
$ConditionExtractor$$.prototype.$_saveItem$ = function $$ConditionExtractor$$$$$_saveItem$$($item$$12$$, $settings$$5$$) {
  $settings$$5$$.$__conditions$.push($item$$12$$)
};
function $CheckboxExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "checkbox"
}
$tuna$utils$extend$$($CheckboxExtractor$$, $SpotExtractor$$);
$CheckboxExtractor$$.prototype.$_createItem$ = function $$CheckboxExtractor$$$$$_createItem$$() {
  return new $CheckboxSettings$$
};
$CheckboxExtractor$$.prototype.$_saveItem$ = function $$CheckboxExtractor$$$$$_saveItem$$($item$$13$$, $settings$$6$$) {
  $settings$$6$$.$__checkboxex$.push($item$$13$$)
};
function $JSCompiler_StaticMethods_buildSettings$$($JSCompiler_StaticMethods_buildSettings$self$$, $templateID$$1$$) {
  var $template$$ = $JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] !== $JSCompiler_alias_VOID$$) {
    $template$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$]
  }else {
    var $templateElement$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__doc$.getElementById($templateID$$1$$);
    if($templateElement$$ !== $JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] = $template$$ = new $TemplateSettings$$;
      for(var $i$$21$$ = 0, $l$$17$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$.length;$i$$21$$ < $l$$17$$;) {
        $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$[$i$$21$$].$extract$($templateElement$$, $template$$), $i$$21$$++
      }
    }
  }
  return $template$$
}
;function $IListItemRouter$$() {
}
$IListItemRouter$$.prototype.append = $JSCompiler_emptyFn$$();
function $ListContainerRouter$$($container$$) {
  this.$_container$ = $container$$
}
$tuna$utils$implement$$($ListContainerRouter$$, $IListItemRouter$$);
$ListContainerRouter$$.prototype.append = function $$ListContainerRouter$$$$append$($node$$3$$) {
  this.$_container$.appendChild($node$$3$$)
};
function $CompiledUnit$$($root$$) {
  this.$__rootTemplate$ = $root$$
}
$CompiledUnit$$.prototype.$destroy$ = $JSCompiler_emptyFn$$();
$CompiledUnit$$.prototype.$applyData$ = $JSCompiler_emptyFn$$();
function $Spot$$($root$$1$$) {
  this.$__rootTemplate$ = $root$$1$$;
  this.$__pathEvaluator$ = new $PathEvaluator$$;
  this.$_nodes$ = [];
  this.$_filter$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Spot$$, $CompiledUnit$$);
$Spot$$.prototype.$setPath$ = function $$Spot$$$$$setPath$$($path$$6$$) {
  this.$__pathEvaluator$.$setPath$($path$$6$$)
};
$Spot$$.prototype.$applyData$ = function $$Spot$$$$$applyData$$($dataNode$$4_value$$44_valueNode$$) {
  $dataNode$$4_value$$44_valueNode$$ = this.$__pathEvaluator$.evaluate($dataNode$$4_value$$44_valueNode$$);
  $dataNode$$4_value$$44_valueNode$$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$4_value$$44_valueNode$$ = $dataNode$$4_value$$44_valueNode$$.$getValue$(), this.$_filter$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$4_value$$44_valueNode$$ = this.$_filter$.join($dataNode$$4_value$$44_valueNode$$)), this.$_applyValue$($dataNode$$4_value$$44_valueNode$$))
};
$Spot$$.prototype.$_applyValue$ = function $$Spot$$$$$_applyValue$$($html$$1_value$$45$$) {
  $html$$1_value$$45$$ === $JSCompiler_alias_NULL$$ && ($html$$1_value$$45$$ = "");
  for(var $html$$1_value$$45$$ = $html$$1_value$$45$$.toString(), $i$$22$$ = this.$_nodes$.length - 1;0 <= $i$$22$$;) {
    this.$_nodes$[$i$$22$$].innerHTML !== $html$$1_value$$45$$ && (this.$_nodes$[$i$$22$$].innerHTML = $html$$1_value$$45$$), $i$$22$$--
  }
};
$Spot$$.prototype.$destroy$ = function $$Spot$$$$$destroy$$($isHard$$1_node$$4$$) {
  if($isHard$$1_node$$4$$) {
    for($isHard$$1_node$$4$$ = $JSCompiler_alias_NULL$$;0 < this.$_nodes$.length;) {
      if($isHard$$1_node$$4$$ = this.$_nodes$.shift(), $isHard$$1_node$$4$$.parentNode !== $JSCompiler_alias_NULL$$) {
        $isHard$$1_node$$4$$.parentNode.removeChild($isHard$$1_node$$4$$);
        var $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_54$$ = this.$__rootTemplate$;
        $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_54$$.$__removedChildren$ = $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_54$$.$__removedChildren$.concat($isHard$$1_node$$4$$)
      }
    }
  }else {
    this.$_nodes$.length = 0
  }
  this.$__pathEvaluator$ = $JSCompiler_alias_NULL$$
};
function $Attribute$$($root$$2$$) {
  $Spot$$.call(this, $root$$2$$);
  this.$__eventName$ = this.$__attributeName$ = "";
  this.$__hasEvent$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($Attribute$$, $Spot$$);
$Attribute$$.prototype.$_applyValue$ = function $$Attribute$$$$$_applyValue$$($value$$46$$) {
  $value$$46$$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods___setAttribute$$(this, $value$$46$$) : $JSCompiler_StaticMethods___removeAttribute$$(this);
  if(this.$__hasEvent$) {
    var $self$$3$$ = this;
    setTimeout(function() {
      for(var $i$$inline_59$$ = $self$$3$$.$_nodes$.length - 1;0 <= $i$$inline_59$$;) {
        var $element$$inline_410$$ = $self$$3$$.$_nodes$[$i$$inline_59$$], $type$$inline_411$$ = $self$$3$$.$__eventName$, $data$$inline_412_eventName$$inline_415$$ = "" + $value$$46$$, $doc$$inline_413$$ = $element$$inline_410$$.ownerDocument, $event$$inline_414_event$$inline_416$$ = $JSCompiler_alias_NULL$$;
        $doc$$inline_413$$.createEventObject !== $JSCompiler_alias_VOID$$ ? ($event$$inline_414_event$$inline_416$$ = $doc$$inline_413$$.createEventObject(), $data$$inline_412_eventName$$inline_415$$ && ($event$$inline_414_event$$inline_416$$.data = $data$$inline_412_eventName$$inline_415$$), $data$$inline_412_eventName$$inline_415$$ = "on" + $type$$inline_411$$, $element$$inline_410$$[$data$$inline_412_eventName$$inline_415$$] === $JSCompiler_alias_VOID$$ ? ($event$$inline_414_event$$inline_416$$.$__type$ = 
        $type$$inline_411$$, $element$$inline_410$$.fireEvent("onhelp", $event$$inline_414_event$$inline_416$$)) : $element$$inline_410$$.fireEvent($data$$inline_412_eventName$$inline_415$$, $event$$inline_414_event$$inline_416$$)) : ($event$$inline_414_event$$inline_416$$ = document.createEvent("UIEvents"), $event$$inline_414_event$$inline_416$$.initUIEvent($type$$inline_411$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, window, 1), $data$$inline_412_eventName$$inline_415$$ && ($event$$inline_414_event$$inline_416$$.data = 
        $data$$inline_412_eventName$$inline_415$$), $element$$inline_410$$.dispatchEvent($event$$inline_414_event$$inline_416$$));
        $i$$inline_59$$--
      }
    }, 0)
  }
};
function $JSCompiler_StaticMethods___setAttribute$$($JSCompiler_StaticMethods___setAttribute$self$$, $value$$47$$) {
  for(var $i$$23$$ = $JSCompiler_StaticMethods___setAttribute$self$$.$_nodes$.length - 1;0 <= $i$$23$$;) {
    $JSCompiler_StaticMethods___setAttribute$self$$.$_nodes$[$i$$23$$][$JSCompiler_StaticMethods___setAttribute$self$$.$__attributeName$] !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods___setAttribute$self$$.$_nodes$[$i$$23$$][$JSCompiler_StaticMethods___setAttribute$self$$.$__attributeName$] = $value$$47$$ : $JSCompiler_StaticMethods___setAttribute$self$$.$_nodes$[$i$$23$$].setAttribute($JSCompiler_StaticMethods___setAttribute$self$$.$__attributeName$, $value$$47$$ + ""), $i$$23$$--
  }
}
function $JSCompiler_StaticMethods___removeAttribute$$($JSCompiler_StaticMethods___removeAttribute$self$$) {
  for(var $i$$24$$ = $JSCompiler_StaticMethods___removeAttribute$self$$.$_nodes$.length - 1;0 <= $i$$24$$;) {
    $JSCompiler_StaticMethods___removeAttribute$self$$.$_nodes$[$i$$24$$].removeAttribute($JSCompiler_StaticMethods___removeAttribute$self$$.$__attributeName$), $i$$24$$--
  }
}
;function $Condition$$($root$$3$$) {
  $Spot$$.call(this, $root$$3$$);
  this.$__operator$ = this.$__action$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Condition$$, $Spot$$);
$Condition$$.prototype.$_applyValue$ = function $$Condition$$$$$_applyValue$$($value$$49$$) {
  for(var $testResult$$ = this.$__operator$.test($value$$49$$), $i$$26$$ = this.$_nodes$.length - 1;0 <= $i$$26$$;) {
    this.$__action$.apply(this.$_nodes$[$i$$26$$], $testResult$$, $value$$49$$), $i$$26$$--
  }
};
function $Checkbox$$($root$$4$$) {
  $Spot$$.call(this, $root$$4$$)
}
$tuna$utils$extend$$($Checkbox$$, $Spot$$);
$Checkbox$$.prototype.$_applyValue$ = function $$Checkbox$$$$$_applyValue$$($value$$50$$) {
  if($value$$50$$ !== $JSCompiler_alias_NULL$$) {
    var $i$$27$$ = this.$_nodes$.length - 1;
    if($value$$50$$ === $JSCompiler_alias_TRUE$$ || $value$$50$$ === $JSCompiler_alias_FALSE$$) {
      for(;0 <= $i$$27$$;) {
        this.$_nodes$[$i$$27$$].checked = $value$$50$$, $i$$27$$--
      }
    }else {
      if($value$$50$$ instanceof Array) {
        for(;0 <= $i$$27$$;) {
          this.$_nodes$[$i$$27$$].checked = -1 !== $tuna$utils$indexOf$$(this.$_nodes$[$i$$27$$].value, $value$$50$$), $i$$27$$--
        }
      }else {
        for($value$$50$$ += "";0 <= $i$$27$$;) {
          this.$_nodes$[$i$$27$$].checked = this.$_nodes$[$i$$27$$].value === $value$$50$$, $i$$27$$--
        }
      }
    }
  }
};
function $List$$($root$$5$$) {
  this.$__rootTemplate$ = $root$$5$$;
  this.$__itemSettings$ = this.$__itemRenderer$ = this.$__templateCompiler$ = $JSCompiler_alias_NULL$$;
  this.$__itemsTable$ = {};
  this.$__pathEvaluator$ = new $PathEvaluator$$;
  this.$__keyPathEvaluator$ = new $PathEvaluator$$;
  this.$__listNodeRouter$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($List$$, $CompiledUnit$$);
$List$$.prototype.$setPath$ = function $$List$$$$$setPath$$($path$$7$$) {
  this.$__pathEvaluator$.$setPath$($path$$7$$)
};
$List$$.prototype.$addItem$ = function $$List$$$$$addItem$$($compiledItem$$, $key$$18$$) {
  this.$__itemsTable$[$key$$18$$] = $compiledItem$$
};
$List$$.prototype.$applyData$ = function $$List$$$$$applyData$$($dataNode$$5_sampleNode$$) {
  $dataNode$$5_sampleNode$$ = this.$__pathEvaluator$.evaluate($dataNode$$5_sampleNode$$);
  if($dataNode$$5_sampleNode$$ !== $JSCompiler_alias_NULL$$) {
    var $sample$$ = $dataNode$$5_sampleNode$$.$getValue$(), $oldItemsTable$$ = this.$__itemsTable$;
    this.$__itemsTable$ = {};
    for(var $index$$53$$ in $sample$$) {
      var $itemNode$$inline_64$$ = $JSCompiler_StaticMethods_growChild$$($dataNode$$5_sampleNode$$, $index$$53$$), $oldItemsTable$$inline_65$$ = $oldItemsTable$$, $key$$inline_67_keyNode$$inline_66$$ = this.$__keyPathEvaluator$.evaluate($itemNode$$inline_64$$);
      $key$$inline_67_keyNode$$inline_66$$ !== $JSCompiler_alias_NULL$$ && ($key$$inline_67_keyNode$$inline_66$$ = $key$$inline_67_keyNode$$inline_66$$.$getValue$(), $key$$inline_67_keyNode$$inline_66$$ !== $JSCompiler_alias_NULL$$ && ($oldItemsTable$$inline_65$$[$key$$inline_67_keyNode$$inline_66$$] === $JSCompiler_alias_VOID$$ ? this.$addItem$($JSCompiler_StaticMethods___makeNewItem$$(this), $key$$inline_67_keyNode$$inline_66$$) : (this.$__itemsTable$[$key$$inline_67_keyNode$$inline_66$$] = $oldItemsTable$$inline_65$$[$key$$inline_67_keyNode$$inline_66$$], 
      delete $oldItemsTable$$inline_65$$[$key$$inline_67_keyNode$$inline_66$$]), this.$__itemsTable$[$key$$inline_67_keyNode$$inline_66$$].$applyData$($itemNode$$inline_64$$)))
    }
    $JSCompiler_StaticMethods___destroyItems$$($oldItemsTable$$)
  }else {
    $JSCompiler_StaticMethods___destroyItems$$(this.$__itemsTable$)
  }
};
function $JSCompiler_StaticMethods___destroyItems$$($itemsTable$$) {
  for(var $key$$20$$ in $itemsTable$$) {
    $itemsTable$$[$key$$20$$].$destroy$($JSCompiler_alias_TRUE$$), delete $itemsTable$$[$key$$20$$]
  }
}
function $JSCompiler_StaticMethods___makeNewItem$$($JSCompiler_StaticMethods___makeNewItem$self$$) {
  var $itemElement$$ = $JSCompiler_StaticMethods___makeNewItem$self$$.$__itemRenderer$.cloneNode($JSCompiler_alias_TRUE$$), $rootTemplate$$ = $JSCompiler_StaticMethods___makeNewItem$self$$.$__rootTemplate$, $template$$1$$ = $JSCompiler_StaticMethods_compileTemplate$$($JSCompiler_StaticMethods___makeNewItem$self$$.$__templateCompiler$, $JSCompiler_StaticMethods___makeNewItem$self$$.$__itemSettings$, $itemElement$$, $rootTemplate$$);
  $JSCompiler_StaticMethods___makeNewItem$self$$.$__listNodeRouter$.append($itemElement$$);
  $rootTemplate$$.$__createdChildren$ = $rootTemplate$$.$__createdChildren$.concat($itemElement$$);
  return $template$$1$$
}
$List$$.prototype.$destroy$ = function $$List$$$$$destroy$$($isHard$$2$$) {
  for(var $key$$21$$ in this.$__itemsTable$) {
    this.$__itemsTable$[$key$$21$$].$destroy$($isHard$$2$$), this.$__itemsTable$[$key$$21$$] = $JSCompiler_alias_NULL$$
  }
  this.$__itemsTable$ = this.$__listNodeRouter$ = this.$__keyPathEvaluator$ = this.$__pathEvaluator$ = this.$__itemSettings$ = this.$__itemRenderer$ = this.$__templateCompiler$ = $JSCompiler_alias_NULL$$
};
function $Template$$($root$$6$$) {
  this.$__rootTemplate$ = $root$$6$$ || this;
  this.$__items$ = [];
  this.$__createdChildren$ = [];
  this.$__removedChildren$ = [];
  this.$__target$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Template$$, $CompiledUnit$$);
$Template$$.prototype.$setTarget$ = $JSCompiler_set$$("$__target$");
$Template$$.prototype.$applyData$ = function $$Template$$$$$applyData$$($dataNode$$6$$) {
  for(var $i$$28$$ = this.$__items$.length - 1;0 <= $i$$28$$;) {
    this.$__items$[$i$$28$$].$applyData$($dataNode$$6$$), $i$$28$$--
  }
};
$Template$$.prototype.$destroy$ = function $$Template$$$$$destroy$$($isHard$$3$$) {
  for(var $i$$29$$ = this.$__items$.length - 1;0 <= $i$$29$$;) {
    this.$__items$[$i$$29$$].$destroy$($isHard$$3$$), $i$$29$$--
  }
  $isHard$$3$$ && this.$__target$.parentNode.removeChild(this.$__target$)
};
function $IItemCompiler$$() {
}
$IItemCompiler$$.prototype.compile = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_compileTemplate$$($JSCompiler_StaticMethods_compileTemplate$self$$, $settings$$9$$, $element$$36$$, $root$$7_template$$3$$) {
  $root$$7_template$$3$$ = new $Template$$($root$$7_template$$3$$);
  $root$$7_template$$3$$.$setTarget$($element$$36$$);
  for(var $i$$30$$ = 0, $l$$18$$ = $JSCompiler_StaticMethods_compileTemplate$self$$.$__itemCompilers$.length;$i$$30$$ < $l$$18$$;) {
    $JSCompiler_StaticMethods_compileTemplate$self$$.$__itemCompilers$[$i$$30$$].compile($element$$36$$, $settings$$9$$, $root$$7_template$$3$$), $i$$30$$++
  }
  return $root$$7_template$$3$$
}
;function $SpotCompiler$$() {
}
$tuna$utils$implement$$($SpotCompiler$$, $IItemCompiler$$);
$SpotCompiler$$.prototype.compile = function $$SpotCompiler$$$$compile$($element$$37$$, $itemsSettings_settings$$10$$, $template$$4$$) {
  for(var $root$$8$$ = $template$$4$$.$__rootTemplate$, $item$$14$$ = $JSCompiler_alias_NULL$$, $itemsSettings_settings$$10$$ = this.$_getItemsSettings$($itemsSettings_settings$$10$$), $i$$31$$ = $itemsSettings_settings$$10$$.length - 1;0 <= $i$$31$$;) {
    $item$$14$$ = this.$_createItem$($root$$8$$), this.$_compileItem$($element$$37$$, $itemsSettings_settings$$10$$[$i$$31$$], $item$$14$$), $template$$4$$.$__items$ = $template$$4$$.$__items$.concat($item$$14$$), $i$$31$$--
  }
};
$SpotCompiler$$.prototype.$_getItemsSettings$ = function $$SpotCompiler$$$$$_getItemsSettings$$($settings$$11$$) {
  return $settings$$11$$.$__spots$
};
$SpotCompiler$$.prototype.$_createItem$ = function $$SpotCompiler$$$$$_createItem$$($rootTemplate$$1$$) {
  return new $Spot$$($rootTemplate$$1$$)
};
$SpotCompiler$$.prototype.$_compileItem$ = function $$SpotCompiler$$$$$_compileItem$$($element$$38_elements$$inline_81$$, $className$$6_settings$$12$$, $item$$15$$) {
  $item$$15$$.$setPath$($className$$6_settings$$12$$.$dataPath$);
  $className$$6_settings$$12$$.filter !== $JSCompiler_alias_NULL$$ && ($item$$15$$.$_filter$ = $className$$6_settings$$12$$.filter.split("$$"));
  $className$$6_settings$$12$$ = $className$$6_settings$$12$$.$targetClass$;
  $tuna$dom$hasClass$$($element$$38_elements$$inline_81$$, $className$$6_settings$$12$$) || ($element$$38_elements$$inline_81$$ = $tuna$dom$select$$("." + $className$$6_settings$$12$$, $element$$38_elements$$inline_81$$));
  $item$$15$$.$_nodes$ = $item$$15$$.$_nodes$.concat($element$$38_elements$$inline_81$$)
};
function $AttributeCompiler$$() {
}
$tuna$utils$extend$$($AttributeCompiler$$, $SpotCompiler$$);
$AttributeCompiler$$.prototype.$_getItemsSettings$ = function $$AttributeCompiler$$$$$_getItemsSettings$$($settings$$13$$) {
  return $settings$$13$$.$__attributes$
};
$AttributeCompiler$$.prototype.$_createItem$ = function $$AttributeCompiler$$$$$_createItem$$($rootTemplate$$2$$) {
  return new $Attribute$$($rootTemplate$$2$$)
};
$AttributeCompiler$$.prototype.$_compileItem$ = function $$AttributeCompiler$$$$$_compileItem$$($attributeName$$inline_84_element$$39$$, $settings$$14$$, $item$$16$$) {
  $SpotCompiler$$.prototype.$_compileItem$.call(this, $attributeName$$inline_84_element$$39$$, $settings$$14$$, $item$$16$$);
  $attributeName$$inline_84_element$$39$$ = $settings$$14$$.$attributeName$;
  $item$$16$$.$__attributeName$ = $attributeName$$inline_84_element$$39$$;
  $item$$16$$.$__eventName$ = $attributeName$$inline_84_element$$39$$ + "-change";
  $item$$16$$.$__hasEvent$ = $settings$$14$$.$hasEvent$
};
function $ConditionCompiler$$() {
}
$tuna$utils$extend$$($ConditionCompiler$$, $SpotCompiler$$);
$ConditionCompiler$$.prototype.$_getItemsSettings$ = function $$ConditionCompiler$$$$$_getItemsSettings$$($settings$$15$$) {
  return $settings$$15$$.$__conditions$
};
$ConditionCompiler$$.prototype.$_createItem$ = function $$ConditionCompiler$$$$$_createItem$$($rootTemplate$$3$$) {
  return new $Condition$$($rootTemplate$$3$$)
};
$ConditionCompiler$$.prototype.$_compileItem$ = function $$ConditionCompiler$$$$$_compileItem$$($JSCompiler_inline_result$$89_element$$40$$, $settings$$16$$, $item$$17$$) {
  $SpotCompiler$$.prototype.$_compileItem$.call(this, $JSCompiler_inline_result$$89_element$$40$$, $settings$$16$$, $item$$17$$);
  a: {
    switch($settings$$16$$.$actionType$) {
      case "class":
        $JSCompiler_inline_result$$89_element$$40$$ = new $__ClassAction$$($settings$$16$$.$actionData$);
        break a
    }
    $JSCompiler_inline_result$$89_element$$40$$ = $JSCompiler_alias_NULL$$
  }
  $item$$17$$.$__action$ = $JSCompiler_inline_result$$89_element$$40$$;
  $item$$17$$.$__operator$ = $JSCompiler_StaticMethods___createOperator$$($settings$$16$$.$operatorType$, $settings$$16$$.$operatorData$)
};
function $JSCompiler_StaticMethods___createOperator$$($type$$65$$, $data$$31$$) {
  switch($type$$65$$) {
    case "isset":
      return new $__IsSetOperator$$;
    case "notset":
      return new $__NotSetOperator$$;
    case "eq":
      return new $__EqualsOperator$$($data$$31$$);
    case "ne":
      return new $__NotEqualsOperator$$($data$$31$$)
  }
  return $JSCompiler_alias_NULL$$
}
function $__ConditionOperator$$($data$$32$$) {
  this.$_data$ = $data$$32$$ || ""
}
$__ConditionOperator$$.prototype.test = $JSCompiler_emptyFn$$();
function $__IsSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($__IsSetOperator$$, $__ConditionOperator$$);
$__IsSetOperator$$.prototype.test = function $$__IsSetOperator$$$$test$($value$$52$$) {
  return $value$$52$$ != $JSCompiler_alias_NULL$$
};
function $__NotSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($__NotSetOperator$$, $__ConditionOperator$$);
$__NotSetOperator$$.prototype.test = function $$__NotSetOperator$$$$test$($value$$53$$) {
  return $value$$53$$ == $JSCompiler_alias_NULL$$
};
function $__EqualsOperator$$($data$$33$$) {
  this.$_data$ = $data$$33$$ || ""
}
$tuna$utils$extend$$($__EqualsOperator$$, $__ConditionOperator$$);
$__EqualsOperator$$.prototype.test = function $$__EqualsOperator$$$$test$($value$$54$$) {
  return $value$$54$$ === this.$_data$ || $value$$54$$ + "" === this.$_data$
};
function $__NotEqualsOperator$$($data$$34$$) {
  this.$_data$ = $data$$34$$ || ""
}
$tuna$utils$extend$$($__NotEqualsOperator$$, $__ConditionOperator$$);
$__NotEqualsOperator$$.prototype.test = function $$__NotEqualsOperator$$$$test$($value$$55$$) {
  return!($value$$55$$ == this.$_data$ || $value$$55$$ + "" == this.$_data$)
};
function $__ConditionAction$$($data$$35$$) {
  this.$_data$ = $data$$35$$ || ""
}
$__ConditionAction$$.prototype.apply = $JSCompiler_emptyFn$$();
function $__ClassAction$$($data$$36$$) {
  this.$_data$ = $data$$36$$ || "";
  this.$__lastName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($__ClassAction$$, $__ConditionAction$$);
$__ClassAction$$.prototype.apply = function $$__ClassAction$$$$apply$($element$$42$$, $testResult$$2$$, $value$$57$$) {
  var $className$$7$$ = this.$_data$;
  "" !== $className$$7$$ ? $testResult$$2$$ ? $tuna$dom$addClass$$($element$$42$$, $className$$7$$) : $tuna$dom$removeClass$$($element$$42$$, $className$$7$$) : this.$__lastName$ !== $value$$57$$ && $testResult$$2$$ && (this.$__lastName$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($element$$42$$, this.$__lastName$ + ""), $tuna$dom$addClass$$($element$$42$$, $value$$57$$ + ""), this.$__lastName$ = $value$$57$$)
};
function $__AttrAction$$($data$$37$$) {
  this.$_data$ = $data$$37$$ || "";
  this.$__lastName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($__AttrAction$$, $__ConditionAction$$);
$__AttrAction$$.prototype.apply = function $$__AttrAction$$$$apply$($element$$43$$, $testResult$$3$$, $value$$58$$) {
  var $className$$8$$ = this.$_data$;
  "" !== $className$$8$$ ? $testResult$$3$$ ? $tuna$dom$addClass$$($element$$43$$, $className$$8$$) : $tuna$dom$removeClass$$($element$$43$$, $className$$8$$) : this.$__lastName$ !== $value$$58$$ && $testResult$$3$$ && (this.$__lastName$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($element$$43$$, this.$__lastName$ + ""), $tuna$dom$addClass$$($element$$43$$, $value$$58$$ + ""), this.$__lastName$ = $value$$58$$)
};
function $CheckboxCompiler$$() {
}
$tuna$utils$extend$$($CheckboxCompiler$$, $SpotCompiler$$);
$CheckboxCompiler$$.prototype.$_getItemsSettings$ = function $$CheckboxCompiler$$$$$_getItemsSettings$$($settings$$17$$) {
  return $settings$$17$$.$__checkboxex$
};
$CheckboxCompiler$$.prototype.$_createItem$ = function $$CheckboxCompiler$$$$$_createItem$$($rootTemplate$$4$$) {
  return new $Checkbox$$($rootTemplate$$4$$)
};
function $ListCompiler$$($doc$$4$$, $compiler$$1$$) {
  this.$__doc$ = $doc$$4$$;
  this.$__templateCompiler$ = $compiler$$1$$
}
$tuna$utils$implement$$($ListCompiler$$, $IItemCompiler$$);
$ListCompiler$$.prototype.compile = function $$ListCompiler$$$$compile$($element$$44$$, $itemsSettings$$1_settings$$18$$, $template$$5$$) {
  for(var $itemsSettings$$1_settings$$18$$ = $itemsSettings$$1_settings$$18$$.$__lists$, $i$$32$$ = $itemsSettings$$1_settings$$18$$.length - 1;0 <= $i$$32$$;) {
    var $element$$inline_112$$ = $element$$44$$, $settings$$inline_113$$ = $itemsSettings$$1_settings$$18$$[$i$$32$$], $template$$inline_114$$ = $template$$5$$, $root$$inline_115$$ = $template$$inline_114$$.$__rootTemplate$, $lists$$inline_116$$ = [], $className$$inline_117$$ = $settings$$inline_113$$.$targetClass$;
    if($tuna$dom$hasClass$$($element$$inline_112$$, $className$$inline_117$$)) {
      $lists$$inline_116$$.push($JSCompiler_StaticMethods___createList$$(this, $element$$inline_112$$, $settings$$inline_113$$, $root$$inline_115$$))
    }else {
      for(var $elements$$inline_118$$ = $tuna$dom$select$$("." + $className$$inline_117$$, $element$$inline_112$$), $i$$inline_119$$ = $elements$$inline_118$$.length - 1;0 <= $i$$inline_119$$;) {
        $tuna$dom$getParentWithClass$$($elements$$inline_118$$[$i$$inline_119$$], $className$$inline_117$$, $element$$inline_112$$) === $JSCompiler_alias_NULL$$ && $lists$$inline_116$$.push($JSCompiler_StaticMethods___createList$$(this, $elements$$inline_118$$[$i$$inline_119$$], $settings$$inline_113$$, $root$$inline_115$$)), $i$$inline_119$$--
      }
    }
    $template$$inline_114$$.$__items$ = $template$$inline_114$$.$__items$.concat($lists$$inline_116$$);
    $i$$32$$--
  }
};
function $JSCompiler_StaticMethods___createList$$($JSCompiler_StaticMethods___createList$self_renderer$$, $element$$46_router$$inline_134$$, $settings$$20$$, $list$$3_root$$10$$) {
  $list$$3_root$$10$$ = new $List$$($list$$3_root$$10$$);
  $list$$3_root$$10$$.$__templateCompiler$ = $JSCompiler_StaticMethods___createList$self_renderer$$.$__templateCompiler$;
  var $rendererId$$ = $settings$$20$$.$itemRendererID$, $JSCompiler_StaticMethods___createList$self_renderer$$ = $JSCompiler_StaticMethods___createList$self_renderer$$.$__doc$.getElementById($rendererId$$);
  $JSCompiler_StaticMethods___createList$self_renderer$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods___createList$self_renderer$$ = $JSCompiler_StaticMethods___createList$self_renderer$$.cloneNode($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods___createList$self_renderer$$.removeAttribute("id"), $list$$3_root$$10$$.$__itemRenderer$ = $JSCompiler_StaticMethods___createList$self_renderer$$) : alert("Cannot find item renderer with id: " + $rendererId$$);
  $list$$3_root$$10$$.$__itemSettings$ = $settings$$20$$.$itemSettings$;
  $list$$3_root$$10$$.$__keyPathEvaluator$.$setPath$($settings$$20$$.keyPath);
  $list$$3_root$$10$$.$setPath$($settings$$20$$.$dataPath$);
  $element$$46_router$$inline_134$$ = new $ListContainerRouter$$($element$$46_router$$inline_134$$);
  $list$$3_root$$10$$.$__listNodeRouter$ = $element$$46_router$$inline_134$$;
  return $list$$3_root$$10$$
}
;var $tuna$tmpl$__markupBuilder$$ = new function() {
  this.$__doc$ = document;
  this.$__templatesTable$ = {};
  this.$__extractors$ = [];
  this.$__extractors$.push(new $SpotExtractor$$);
  this.$__extractors$.push(new $CheckboxExtractor$$);
  this.$__extractors$.push(new $AttributeExtractor$$);
  this.$__extractors$.push(new $ConditionExtractor$$);
  this.$__extractors$.push(new $ListExtractor$$(this))
}, $tuna$tmpl$__settingsTable$$ = {}, $tuna$tmpl$__compiler$$ = new function() {
  this.$__doc$ = document;
  this.$__itemCompilers$ = [];
  this.$__itemCompilers$.push(new $SpotCompiler$$);
  this.$__itemCompilers$.push(new $CheckboxCompiler$$);
  this.$__itemCompilers$.push(new $AttributeCompiler$$);
  this.$__itemCompilers$.push(new $ConditionCompiler$$);
  this.$__itemCompilers$.push(new $ListCompiler$$(this.$__doc$, this))
};
function $Module$$($selector$$4$$) {
  this.$_selector$ = $selector$$4$$
}
$Module$$.prototype.init = function $$Module$$$$init$($context$$6$$, $container$$1$$) {
  var $instances$$ = [], $targets_targets$$inline_142$$;
  $targets_targets$$inline_142$$ = $tuna$dom$select$$(this.$_selector$, $context$$6$$);
  $targets_targets$$inline_142$$ = $targets_targets$$inline_142$$.concat($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$__selectorEngine$$.filter !== $JSCompiler_alias_VOID$$ ? $tuna$dom$__selectorEngine$$.filter(this.$_selector$, [$context$$6$$]) : $JSCompiler_alias_NULL$$);
  for(var $i$$34$$ = 0, $l$$19$$ = $targets_targets$$inline_142$$.length, $instance_target$$inline_145$$ = $JSCompiler_alias_NULL$$;$i$$34$$ < $l$$19$$;) {
    for(var $instance_target$$inline_145$$ = $targets_targets$$inline_142$$[$i$$34$$], $context$$inline_146$$ = $context$$6$$, $result$$inline_147$$ = $JSCompiler_alias_TRUE$$, $isolators$$inline_148$$ = $tuna$ui$modules$__isolators$$, $i$$inline_149$$ = 0, $l$$inline_150$$ = $isolators$$inline_148$$.length;$i$$inline_149$$ < $l$$inline_150$$ && !($instance_target$$inline_145$$ !== $context$$inline_146$$ && ($result$$inline_147$$ = $result$$inline_147$$ && !$tuna$dom$hasClass$$($instance_target$$inline_145$$, 
    $isolators$$inline_148$$[$i$$inline_149$$]) && $tuna$dom$getParentWithClass$$($instance_target$$inline_145$$, $isolators$$inline_148$$[$i$$inline_149$$], $context$$inline_146$$) === $JSCompiler_alias_NULL$$, !$result$$inline_147$$));) {
      $i$$inline_149$$++
    }
    $result$$inline_147$$ && ($instance_target$$inline_145$$ = this.$initInstance$($targets_targets$$inline_142$$[$i$$34$$], $container$$1$$), $instance_target$$inline_145$$ !== $JSCompiler_alias_NULL$$ && ($instances$$.push($instance_target$$inline_145$$), $JSCompiler_StaticMethods_getBooleanOption$$($instance_target$$inline_145$$, "not-init") || $instance_target$$inline_145$$.init()));
    $i$$34$$++
  }
  return $instances$$
};
$Module$$.prototype.$destroy$ = function $$Module$$$$$destroy$$($instances$$1_l$$21$$) {
  for(var $i$$36$$ = 0, $instances$$1_l$$21$$ = $instances$$1_l$$21$$.length;$i$$36$$ < $instances$$1_l$$21$$;) {
    $i$$36$$++
  }
};
$Module$$.prototype.$initInstance$ = $JSCompiler_emptyFn$$();
function $ModuleInstance$$($target$$40$$) {
  $EventDispatcher$$.call(this);
  this.$_target$ = $target$$40$$;
  this.$__defaultOptions$ = {}
}
$tuna$utils$extend$$($ModuleInstance$$, $EventDispatcher$$);
$ModuleInstance$$.prototype.getName = function $$ModuleInstance$$$$getName$() {
  return this.$_target$.getAttribute("data-name")
};
$ModuleInstance$$.prototype.isEnabled = function $$ModuleInstance$$$$isEnabled$() {
  return!$tuna$dom$hasClass$$(this.$_target$, "disabled")
};
function $JSCompiler_StaticMethods__setDefaultOption$$($JSCompiler_StaticMethods__setDefaultOption$self$$, $name$$62$$, $option$$) {
  $option$$ === $JSCompiler_alias_NULL$$ ? delete $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$62$$] : $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$62$$] = $option$$
}
function $JSCompiler_StaticMethods_setOption$$($JSCompiler_StaticMethods_setOption$self$$, $name$$63$$, $option$$1$$) {
  $option$$1$$ ? $JSCompiler_StaticMethods_setOption$self$$.$_target$.setAttribute("data-" + $name$$63$$, $option$$1$$) : $JSCompiler_StaticMethods_setOption$self$$.$_target$.removeAttribute("data-" + $name$$63$$)
}
function $JSCompiler_StaticMethods_getOption$$($JSCompiler_StaticMethods_getOption$self$$) {
  var $option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$_target$.getAttribute("data-popup-id");
  $option$$2$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"] !== $JSCompiler_alias_VOID$$ && ($option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"]);
  return $option$$2$$
}
function $JSCompiler_StaticMethods_getStringOption$$($JSCompiler_StaticMethods_getStringOption$self$$, $name$$65$$) {
  var $option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$_target$.getAttribute("data-" + $name$$65$$);
  $option$$3$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$65$$] !== $JSCompiler_alias_VOID$$ && ($option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$65$$]);
  return $option$$3$$
}
function $JSCompiler_StaticMethods_getNumberOption$$($JSCompiler_StaticMethods_getNumberOption$self$$, $name$$66$$) {
  var $option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$_target$.getAttribute("data-" + $name$$66$$);
  $option$$4$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$66$$] !== $JSCompiler_alias_VOID$$ && ($option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$66$$]);
  return Number($option$$4$$)
}
function $JSCompiler_StaticMethods_getBooleanOption$$($JSCompiler_StaticMethods_getBooleanOption$self$$, $name$$67$$) {
  var $option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$_target$.getAttribute("data-" + $name$$67$$);
  $option$$5$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$67$$] !== $JSCompiler_alias_VOID$$ && ($option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$67$$]);
  return!!$option$$5$$
}
$ModuleInstance$$.prototype.init = $JSCompiler_emptyFn$$();
$ModuleInstance$$.prototype.$destroy$ = $JSCompiler_emptyFn$$();
function $ModuleContainer$$($target$$41$$) {
  $ModuleInstance$$.call(this, $target$$41$$);
  this.$__modules$ = [];
  this.$__instances$ = {}
}
$tuna$utils$extend$$($ModuleContainer$$, $ModuleInstance$$);
$ModuleContainer$$.prototype.clear = function $$ModuleContainer$$$$clear$() {
  this.$_target$.innerHTML = ""
};
function $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_initModules$self$$, $target$$42$$) {
  for(var $target$$42$$ = $target$$42$$ || $JSCompiler_StaticMethods_initModules$self$$.$_target$, $i$$37$$ = 0, $l$$22$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$.length, $type$$67$$ = $JSCompiler_alias_NULL$$, $module$$ = $JSCompiler_alias_NULL$$;$i$$37$$ < $l$$22$$;) {
    $type$$67$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$[$i$$37$$], $module$$ = $tuna$ui$modules$__typeTable$$[$type$$67$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$modules$__typeTable$$[$type$$67$$] : $JSCompiler_alias_NULL$$, $module$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_initModules$self$$.$__instances$[$type$$67$$] === $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_initModules$self$$.$__instances$[$type$$67$$] = []), $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$type$$67$$] = 
    $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$type$$67$$].concat($module$$.init($target$$42$$, $JSCompiler_StaticMethods_initModules$self$$))) : alert('Unknown module "' + $type$$67$$ + '"'), $i$$37$$++
  }
}
function $JSCompiler_StaticMethods_getOneModuleInstance$$($JSCompiler_StaticMethods_getOneModuleInstance$self$$, $type$$69$$) {
  return $JSCompiler_StaticMethods_getOneModuleInstance$self$$.$__instances$[$type$$69$$] !== $JSCompiler_alias_VOID$$ && $JSCompiler_StaticMethods_getOneModuleInstance$self$$.$__instances$[$type$$69$$][0] !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods_getOneModuleInstance$self$$.$__instances$[$type$$69$$][0] : $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_getModuleInstanceByName$$($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$, $i$$38_type$$70$$, $name$$68$$) {
  if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$.$__instances$[$i$$38_type$$70$$] !== $JSCompiler_alias_VOID$$) {
    for(var $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$.$__instances$[$i$$38_type$$70$$], $i$$38_type$$70$$ = 0, $l$$23$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$.length;$i$$38_type$$70$$ < $l$$23$$;) {
      if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$[$i$$38_type$$70$$].getName() === $name$$68$$) {
        return $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$2$$[$i$$38_type$$70$$]
      }
      $i$$38_type$$70$$++
    }
  }
  return $JSCompiler_alias_NULL$$
}
;var $tuna$ui$modules$__typeTable$$ = {}, $tuna$ui$modules$__isolators$$ = [];
function $Popup$$($target$$43$$) {
  $ModuleInstance$$.call(this, $target$$43$$);
  this.$__isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($Popup$$, $ModuleInstance$$);
$Popup$$.prototype.init = function $$Popup$$$$init$() {
  if(!this.$__isInit$) {
    var $self$$4$$ = this;
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-close", "click", function($event$$13$$) {
      $tuna$dom$preventDefault$$($event$$13$$);
      $self$$4$$.close()
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-apply", "click", function($event$$14$$) {
      $tuna$dom$preventDefault$$($event$$14$$);
      $self$$4$$.apply()
    })
  }
};
$Popup$$.prototype.open = function $$Popup$$$$open$() {
  this.$dispatch$("popup-open") && $tuna$dom$addClass$$(this.$_target$, "show")
};
$Popup$$.prototype.close = function $$Popup$$$$close$() {
  this.$dispatch$("popup-close") && $tuna$dom$removeClass$$(this.$_target$, "show")
};
$Popup$$.prototype.apply = function $$Popup$$$$apply$() {
  this.$dispatch$("popup-apply", $JSCompiler_StaticMethods___collectData$$(this)) && $tuna$dom$removeClass$$(this.$_target$, "show")
};
function $JSCompiler_StaticMethods___collectData$$($JSCompiler_StaticMethods___collectData$self_form$$) {
  $JSCompiler_StaticMethods___collectData$self_form$$ = $tuna$dom$selectOne$$("form.j-popup-form", $JSCompiler_StaticMethods___collectData$self_form$$.$_target$);
  return $JSCompiler_StaticMethods___collectData$self_form$$ !== $JSCompiler_alias_NULL$$ ? $tuna$ui$forms$serialize$$($JSCompiler_StaticMethods___collectData$self_form$$) : $JSCompiler_alias_NULL$$
}
;var $tuna$ui$popups$__idTable$$ = {}, $tuna$ui$popups$__lastId$$ = 0;
function $tuna$ui$popups$create$$($target$$44$$) {
  "" === $target$$44$$.id && ($target$$44$$.id = "popup_" + $tuna$ui$popups$__lastId$$++);
  if($tuna$ui$popups$__idTable$$[$target$$44$$.id] === $JSCompiler_alias_VOID$$) {
    var $popup$$ = new $Popup$$($target$$44$$);
    $popup$$.init();
    $tuna$ui$popups$__idTable$$[$target$$44$$.id] = $popup$$
  }
  return $tuna$ui$popups$__idTable$$[$target$$44$$.id]
}
var $tuna$ui$popups$__alert$$ = $JSCompiler_alias_NULL$$, $tuna$ui$popups$__alertMessage$$ = $JSCompiler_alias_NULL$$;
function $tuna$ui$popups$alert$$($message$$10$$) {
  $tuna$ui$popups$__alert$$ !== $JSCompiler_alias_NULL$$ && $tuna$ui$popups$__alertMessage$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__alertMessage$$.innerHTML = $message$$10$$, $tuna$ui$popups$__alert$$.open())
}
var $tuna$ui$popups$__confirm$$ = $JSCompiler_alias_NULL$$, $tuna$ui$popups$__confirmMessage$$ = $JSCompiler_alias_NULL$$;
function $tuna$ui$popups$confirm$$($callback$$31$$) {
  function $handler$$9$$($event$$15$$) {
    $callback$$31$$("popup-apply" === $event$$15$$.$_type$);
    $tuna$ui$popups$__confirm$$.removeEventListener("popup-apply", $handler$$9$$);
    $tuna$ui$popups$__confirm$$.removeEventListener("popup-close", $handler$$9$$)
  }
  $tuna$ui$popups$__confirmMessage$$.innerHTML = "\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0444\u043e\u0440\u043c\u044b \u0442\u043e\u0440\u0442\u0430, \u0432\u0441\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u043e!";
  $tuna$ui$popups$__confirm$$.addEventListener("popup-apply", $handler$$9$$);
  $tuna$ui$popups$__confirm$$.addEventListener("popup-close", $handler$$9$$);
  $tuna$ui$popups$__confirm$$.open()
}
;function $Button$$($target$$47$$) {
  $ModuleInstance$$.call(this, $target$$47$$);
  this.$_isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($Button$$, $ModuleInstance$$);
$Button$$.prototype.init = function $$Button$$$$init$() {
  if(!this.$_isInit$) {
    this.$_isInit$ = $JSCompiler_alias_TRUE$$;
    var $self$$5$$ = this;
    $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$16$$) {
      $self$$5$$.isEnabled() ? $self$$5$$.$dispatch$("click") : $tuna$dom$stopPropagation$$($event$$16$$)
    })
  }
};
$Button$$.prototype.setActive = function $$Button$$$$setActive$($isActive$$) {
  var $element$$inline_158$$ = this.$_target$;
  !$isActive$$ && $tuna$dom$hasClass$$($element$$inline_158$$, "active") ? $tuna$dom$removeClass$$($element$$inline_158$$, "active") : $isActive$$ && !$tuna$dom$hasClass$$($element$$inline_158$$, "active") && $tuna$dom$addClass$$($element$$inline_158$$, "active")
};
function $PopupButton$$($target$$48$$) {
  $Button$$.call(this, $target$$48$$);
  this.$_popup$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($PopupButton$$, $Button$$);
$PopupButton$$.prototype.init = function $$PopupButton$$$$init$() {
  var $popupId_popupTarget$$ = $JSCompiler_StaticMethods_getOption$$(this);
  $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && ($popupId_popupTarget$$ = $tuna$dom$selectOne$$("#" + $popupId_popupTarget$$), $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && (this.$_popup$ = $tuna$ui$popups$create$$($popupId_popupTarget$$)));
  var $self$$6$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$17$$) {
    $self$$6$$.isEnabled() ? $self$$6$$.$dispatch$("click") && $self$$6$$.$_popup$ !== $JSCompiler_alias_NULL$$ && $self$$6$$.$_popup$.open() : $tuna$dom$stopPropagation$$($event$$17$$)
  })
};
function $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getPopup$self$$) {
  return $JSCompiler_StaticMethods_getPopup$self$$.$_popup$
}
;function $ButtonGroup$$($target$$49$$) {
  $ModuleInstance$$.call(this, $target$$49$$);
  this.$__defaultAction$ = $JSCompiler_alias_NULL$$;
  this.$__isPreventDefault$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "button-selector", ".j-button")
}
$tuna$utils$extend$$($ButtonGroup$$, $ModuleInstance$$);
$ButtonGroup$$.prototype.init = function $$ButtonGroup$$$$init$() {
  var $self$$7$$ = this, $buttonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  $buttonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $buttonSelector$$, "click", function($event$$18$$) {
    $self$$7$$.$__isPreventDefault$ && $tuna$dom$preventDefault$$($event$$18$$);
    var $button$$ = $tuna$ui$buttons$create$$(this), $action$$3$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$, "action");
    $action$$3$$ === $JSCompiler_alias_NULL$$ && ($action$$3$$ = $self$$7$$.$__defaultAction$);
    $action$$3$$ !== $JSCompiler_alias_NULL$$ && ($self$$7$$.$dispatch$($action$$3$$, $button$$) || $tuna$dom$stopPropagation$$($event$$18$$))
  })
};
var $tuna$ui$buttons$__idTable$$ = {}, $tuna$ui$buttons$__lastId$$ = 0;
function $tuna$ui$buttons$create$$($target$$50$$) {
  "" === $target$$50$$.id && ($target$$50$$.id = "button_" + $tuna$ui$buttons$__lastId$$++);
  if($tuna$ui$buttons$__idTable$$[$target$$50$$.id] === $JSCompiler_alias_VOID$$) {
    var $button$$1$$ = new $Button$$($target$$50$$);
    $button$$1$$.init();
    $tuna$ui$buttons$__idTable$$[$target$$50$$.id] = $button$$1$$
  }
  return $tuna$ui$buttons$__idTable$$[$target$$50$$.id]
}
;function $SWF$$($target$$51$$) {
  $ModuleInstance$$.call(this, $target$$51$$);
  this.$__movie$ = this.$__movieId$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "wmode", "opaque");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "menu", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-fullscreen", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-script-access", "always")
}
$tuna$utils$extend$$($SWF$$, $ModuleInstance$$);
$SWF$$.prototype.init = function $$SWF$$$$init$() {
  this.$__movieId$ = "swf_" + $tuna$ui$flash$__lastId$$++;
  this.$_target$.innerHTML = '<div id="' + this.$__movieId$ + '"></div>';
  swfobject.embedSWF($JSCompiler_StaticMethods_getStringOption$$(this, "src"), this.$__movieId$, $JSCompiler_StaticMethods_getNumberOption$$(this, "width"), $JSCompiler_StaticMethods_getNumberOption$$(this, "height"), "10.0.0", $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getStringOption$$(this, "flashvars"), {wmode:$JSCompiler_StaticMethods_getStringOption$$(this, "wmode"), allowfullscreen:$JSCompiler_StaticMethods_getStringOption$$(this, "allow-fullscreen"), allowscriptaccess:$JSCompiler_StaticMethods_getStringOption$$(this, 
  "allow-script-access"), menu:$JSCompiler_StaticMethods_getStringOption$$(this, "menu")})
};
$SWF$$.prototype.$destroy$ = function $$SWF$$$$$destroy$$() {
  this.$_target$.innerHTML = "";
  this.$__movie$ = this.$__movieId$ = $JSCompiler_alias_NULL$$
};
$SWF$$.prototype.reset = function $$SWF$$$$reset$() {
  this.$destroy$();
  this.init()
};
var $tuna$ui$flash$__lastId$$ = 0;
function $Form$$($target$$52$$) {
  $ModuleInstance$$.call(this, $target$$52$$);
  this.$__formMessage$ = $JSCompiler_alias_NULL$$;
  this.$__inputTable$ = {};
  this.$__recordName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Form$$, $ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $Form$$.prototype;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$() {
  this.$__recordName$ = $JSCompiler_StaticMethods_getStringOption$$(this, "record-type");
  this.$__formMessage$ = $tuna$dom$selectOne$$(".j-form-message", this.$_target$);
  var $callbackInput$$ = document.createElement("input");
  $callbackInput$$.type = "hidden";
  $callbackInput$$.name = "__callback";
  this.$_target$.appendChild($callbackInput$$);
  var $self$$8$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "submit", function($event$$19$$) {
    $self$$8$$.isEnabled() ? ($callbackInput$$.value = "form_callback" + (Math.random() + "").substr(2), window[$callbackInput$$.value] = function $window$$callbackInput$$$value$($data$$inline_162_errors$$inline_164_response$$) {
      var $data$$inline_162_errors$$inline_164_response$$ = JSON.parse(JSON.stringify($data$$inline_162_errors$$inline_164_response$$)), $i$$inline_426_response$$inline_163$$ = $data$$inline_162_errors$$inline_164_response$$.response, $data$$inline_162_errors$$inline_164_response$$ = $data$$inline_162_errors$$inline_164_response$$.errors;
      if($i$$inline_426_response$$inline_163$$ !== $JSCompiler_alias_VOID$$) {
        $self$$8$$.$__recordName$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_426_response$$inline_163$$ = $tuna$rest$populateRecords$$($i$$inline_426_response$$inline_163$$, $self$$8$$.$__recordName$)), $self$$8$$.$dispatch$("result", $i$$inline_426_response$$inline_163$$)
      }else {
        if($data$$inline_162_errors$$inline_164_response$$ !== $JSCompiler_alias_VOID$$) {
          for(var $i$$inline_426_response$$inline_163$$ = 0, $l$$inline_427$$ = $data$$inline_162_errors$$inline_164_response$$.length, $error$$inline_428_name$$inline_462$$ = $JSCompiler_alias_NULL$$;$i$$inline_426_response$$inline_163$$ < $l$$inline_427$$;) {
            $error$$inline_428_name$$inline_462$$ = $data$$inline_162_errors$$inline_164_response$$[$i$$inline_426_response$$inline_163$$];
            if($error$$inline_428_name$$inline_462$$.param !== $JSCompiler_alias_VOID$$) {
              var $JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$ = $self$$8$$, $message$$inline_430_message$$inline_468$$ = $error$$inline_428_name$$inline_462$$.message, $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$ = $JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$;
              var $error$$inline_428_name$$inline_462$$ = $error$$inline_428_name$$inline_462$$.param, $result$$inline_463$$ = $JSCompiler_alias_NULL$$;
              if($JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$.$__inputTable$[$error$$inline_428_name$$inline_462$$] === $JSCompiler_alias_VOID$$) {
                var $input$$inline_465_inputWrapper$$inline_464$$ = $tuna$dom$selectOne$$(".j-" + $error$$inline_428_name$$inline_462$$ + "-input", $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$.$_target$);
                $input$$inline_465_inputWrapper$$inline_464$$ !== $JSCompiler_alias_NULL$$ && ($input$$inline_465_inputWrapper$$inline_464$$ = new $tuna$ui$forms$FormInput$$($input$$inline_465_inputWrapper$$inline_464$$), $input$$inline_465_inputWrapper$$inline_464$$.init(), $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$.$__inputTable$[$error$$inline_428_name$$inline_462$$] = $input$$inline_465_inputWrapper$$inline_464$$)
              }
              $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$.$__inputTable$[$error$$inline_428_name$$inline_462$$] !== $JSCompiler_alias_VOID$$ && ($result$$inline_463$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$.$__inputTable$[$error$$inline_428_name$$inline_462$$]);
              $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$ = $result$$inline_463$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_461_formInput$$inline_431$$, $tuna$dom$addClass$$($JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$.$_target$, "error"), $JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$.$__message$ !== 
              $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$.$__message$.innerHTML = $message$$inline_430_message$$inline_468$$)) : $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showInputError$self$$inline_429_JSCompiler_StaticMethods_showErrorMessage$self$$inline_467$$, $message$$inline_430_message$$inline_468$$)
            }else {
              $JSCompiler_StaticMethods___showErrorMessage$$($self$$8$$, $error$$inline_428_name$$inline_462$$.message)
            }
            $i$$inline_426_response$$inline_163$$++
          }
          $self$$8$$.$dispatch$("error", $data$$inline_162_errors$$inline_164_response$$)
        }
      }
      window[$callbackInput$$.value] = $JSCompiler_alias_VOID$$
    }, $JSCompiler_StaticMethods___prepareTo$$($self$$8$$, $event$$19$$.type, $event$$19$$)) : $tuna$dom$preventDefault$$($event$$19$$)
  });
  $tuna$dom$addEventListener$$(this.$_target$, "reset", function($event$$20$$) {
    $self$$8$$.isEnabled() ? $JSCompiler_StaticMethods___prepareTo$$($self$$8$$, $event$$20$$.type, $event$$20$$) : $tuna$dom$preventDefault$$($event$$20$$)
  })
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$49_name$$70$$) {
  var $result$$14$$ = $JSCompiler_alias_NULL$$, $element$$49_name$$70$$ = this.$_target$.elements[$element$$49_name$$70$$];
  if($element$$49_name$$70$$ !== $JSCompiler_alias_VOID$$) {
    var $isCheck$$ = $JSCompiler_alias_FALSE$$;
    if($element$$49_name$$70$$.value === $JSCompiler_alias_VOID$$) {
      for(var $i$$39$$ = 0, $l$$24$$ = $element$$49_name$$70$$.length, $result$$14$$ = [];$i$$39$$ < $l$$24$$;) {
        $isCheck$$ = "checkbox" === $element$$49_name$$70$$[$i$$39$$].type || "radio" === $element$$49_name$$70$$[$i$$39$$].type, (!$isCheck$$ || $isCheck$$ && $element$$49_name$$70$$[$i$$39$$].checked) && $result$$14$$.push($element$$49_name$$70$$[$i$$39$$].value), $i$$39$$++
      }
    }else {
      if($isCheck$$ = "checkbox" === $element$$49_name$$70$$.type || "radio" === $element$$49_name$$70$$.type, !$isCheck$$ || $isCheck$$ && $element$$49_name$$70$$.checked) {
        $result$$14$$ = $element$$49_name$$70$$.value
      }
    }
  }
  return $result$$14$$
};
function $JSCompiler_StaticMethods_setValue$$($JSCompiler_StaticMethods_setValue$self_element$$50$$, $i$$40_name$$71$$, $index$$54_value$$59$$) {
  $JSCompiler_StaticMethods_setValue$self_element$$50$$ = $JSCompiler_StaticMethods_setValue$self_element$$50$$.$_target$.elements[$i$$40_name$$71$$];
  if($JSCompiler_StaticMethods_setValue$self_element$$50$$ !== $JSCompiler_alias_VOID$$) {
    if($JSCompiler_StaticMethods_setValue$self_element$$50$$.value === $JSCompiler_alias_VOID$$) {
      var $i$$40_name$$71$$ = 0, $l$$25$$ = $JSCompiler_StaticMethods_setValue$self_element$$50$$.length, $stringValue$$1$$ = "", $arrayValue$$ = [];
      $index$$54_value$$59$$ instanceof Array ? ($arrayValue$$ = $index$$54_value$$59$$.slice(0), $stringValue$$1$$ = $index$$54_value$$59$$.join(",")) : ($stringValue$$1$$ = $index$$54_value$$59$$ + "", $arrayValue$$ = [$stringValue$$1$$]);
      for($index$$54_value$$59$$ = -1;$i$$40_name$$71$$ < $l$$25$$;) {
        "radio" === $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].type ? $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].checked = $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].value === $stringValue$$1$$ : "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].type ? ($index$$54_value$$59$$ = $tuna$utils$indexOf$$($JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].value, 
        $arrayValue$$), $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$40_name$$71$$].checked = -1 !== $index$$54_value$$59$$, -1 !== $index$$54_value$$59$$ && $arrayValue$$.splice($index$$54_value$$59$$, 1)) : $JSCompiler_StaticMethods_setValue$self_element$$50$$.value = $stringValue$$1$$, $i$$40_name$$71$$++
      }
    }else {
      "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$50$$.type || "radio" === $JSCompiler_StaticMethods_setValue$self_element$$50$$.type ? $JSCompiler_StaticMethods_setValue$self_element$$50$$.checked = $JSCompiler_StaticMethods_setValue$self_element$$50$$.value === $index$$54_value$$59$$ : $JSCompiler_StaticMethods_setValue$self_element$$50$$.value = $index$$54_value$$59$$
    }
  }
}
$JSCompiler_prototypeAlias$$.submit = function $$JSCompiler_prototypeAlias$$$submit$() {
  $JSCompiler_StaticMethods___prepareTo$$(this, "submit");
  this.$_target$.submit()
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  $JSCompiler_StaticMethods___prepareTo$$(this, "reset");
  this.$_target$.reset()
};
$JSCompiler_prototypeAlias$$.$serialize$ = function $$JSCompiler_prototypeAlias$$$$serialize$$() {
  return $tuna$ui$forms$serialize$$(this.$_target$)
};
function $JSCompiler_StaticMethods___prepareTo$$($JSCompiler_StaticMethods___prepareTo$self$$, $JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$, $event$$21$$) {
  if($JSCompiler_StaticMethods___prepareTo$self$$.$dispatch$($JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$)) {
    $JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$.innerHTML = "", $tuna$dom$addClass$$($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$, "hide"));
    for(var $name$$inline_169$$ in $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$) {
      $JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$ = $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$[$name$$inline_169$$], $tuna$dom$removeClass$$($JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$.$_target$, "error"), $JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$.$__message$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$.$__message$.innerHTML = $JSCompiler_StaticMethods_cleanup$self$$inline_433_type$$73$$.$__defaultMessage$)
    }
  }else {
    $event$$21$$ !== $JSCompiler_alias_VOID$$ && $tuna$dom$preventDefault$$($event$$21$$)
  }
}
function $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showErrorMessage$self$$, $message$$12$$) {
  $JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$.innerHTML += $message$$12$$ + "<br />", $tuna$dom$removeClass$$($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$, "hide"))
}
;function $FormInput$$($target$$53$$) {
  $ModuleInstance$$.call(this, $target$$53$$);
  this.$__message$ = $JSCompiler_alias_NULL$$;
  this.$__defaultMessage$ = ""
}
$tuna$utils$extend$$($FormInput$$, $ModuleInstance$$);
$FormInput$$.prototype.init = function $$FormInput$$$$init$() {
  this.$__message$ = $tuna$dom$selectOne$$(".j-message", this.$_target$);
  this.$__message$ !== $JSCompiler_alias_NULL$$ && (this.$__defaultMessage$ = this.$__message$.innerHTML)
};
var $tuna$ui$forms$FormInput$$ = $FormInput$$;
function $InputFilter$$($target$$54$$) {
  $ModuleInstance$$.call(this, $target$$54$$);
  this.$_input$ = this.$_currentData$ = this.$_data$ = $JSCompiler_alias_NULL$$;
  this.$_itemSerializeCallback$ = function $this$$_itemSerializeCallback$$($item$$18$$) {
    return $item$$18$$.name !== $JSCompiler_alias_VOID$$ ? "" + $item$$18$$.name : ""
  };
  this.$_transformer$ = new $tuna$ui$transformers$TemplateTransformer$$($target$$54$$)
}
$tuna$utils$extend$$($InputFilter$$, $ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $InputFilter$$.prototype;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$() {
  this.$_input$ = $tuna$dom$selectOne$$("input.j-filtration", this.$_target$);
  if(this.$_input$ !== $JSCompiler_alias_NULL$$) {
    var $self$$9$$ = this, $lastValue$$ = $JSCompiler_alias_NULL$$;
    $tuna$dom$addEventListener$$(this.$_input$, "keyup", function() {
      this.value !== $lastValue$$ && ($self$$9$$.filter(this.value), $lastValue$$ = this.value)
    })
  }
  this.$_transformer$.init()
};
function $JSCompiler_StaticMethods_setItemSerializeCallback$$($JSCompiler_StaticMethods_setItemSerializeCallback$self$$, $callback$$32$$) {
  $JSCompiler_StaticMethods_setItemSerializeCallback$self$$.$_itemSerializeCallback$ = $callback$$32$$
}
$JSCompiler_prototypeAlias$$.setData = function $$JSCompiler_prototypeAlias$$$setData$($data$$39$$) {
  this.$_currentData$ = this.$_data$ = $data$$39$$;
  this.update()
};
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($term$$) {
  this.$_currentData$ = $JSCompiler_StaticMethods__filterData$$(this, $term$$);
  this.update()
};
$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$() {
  this.$_transformer$.$applyTransform$(this.$_currentData$)
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$_input$.value = "";
  this.filter("")
};
function $JSCompiler_StaticMethods__filterData$$($JSCompiler_StaticMethods__filterData$self$$, $term$$1$$) {
  var $result$$16$$ = [];
  if(!$term$$1$$ || 0 === $term$$1$$.length) {
    $result$$16$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.slice(0)
  }else {
    for(var $needle$$ = $term$$1$$.toUpperCase(), $i$$42$$ = 0, $l$$27$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.length, $core$$ = $JSCompiler_alias_NULL$$;$i$$42$$ < $l$$27$$;) {
      $core$$ = $JSCompiler_StaticMethods__filterData$self$$.$_itemSerializeCallback$($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$42$$]), -1 !== $core$$.toUpperCase().indexOf($needle$$) && $result$$16$$.push($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$42$$]), $i$$42$$++
    }
  }
  return $result$$16$$
}
;function $Autocomplete$$($target$$55$$) {
  $InputFilter$$.call(this, $target$$55$$);
  this.$__selectedData$ = $JSCompiler_alias_NULL$$;
  this.$__selectionGroup$ = new $tuna$ui$selection$SelectionGroup$$($target$$55$$, $JSCompiler_alias_NULL$$)
}
$tuna$utils$extend$$($Autocomplete$$, $InputFilter$$);
$Autocomplete$$.prototype.init = function $$Autocomplete$$$$init$() {
  $InputFilter$$.prototype.init.call(this);
  var $body$$1$$ = $tuna$dom$selectOne$$(".j-autocomplete-body", this.$_target$), $self$$10$$ = this, $isOpen$$ = $JSCompiler_alias_FALSE$$;
  this.$_input$ !== $JSCompiler_alias_NULL$$ && ($tuna$dom$addEventListener$$(this.$_input$, "focus", function() {
    $isOpen$$ || (document.body !== $JSCompiler_alias_NULL$$ && $tuna$dom$addOneEventListener$$(document.body, "click", function() {
      var $value$$inline_177$$ = $self$$10$$.$_input$.value;
      $self$$10$$.$__selectedData$ = $JSCompiler_alias_NULL$$;
      var $dataItem$$inline_178$$ = $JSCompiler_StaticMethods__filterData$$($self$$10$$, $value$$inline_177$$).shift();
      $dataItem$$inline_178$$ !== $JSCompiler_alias_VOID$$ && $self$$10$$.$_itemSerializeCallback$($dataItem$$inline_178$$) === $value$$inline_177$$ && $JSCompiler_StaticMethods___selectData$$($self$$10$$, $dataItem$$inline_178$$);
      $self$$10$$.$__selectedData$ === $JSCompiler_alias_NULL$$ && $self$$10$$.clear();
      $tuna$dom$addClass$$($body$$1$$, "hide");
      $isOpen$$ = $JSCompiler_alias_FALSE$$
    }), $self$$10$$.filter(""), $tuna$dom$removeClass$$($body$$1$$, "hide"), $isOpen$$ = $JSCompiler_alias_TRUE$$)
  }), $tuna$dom$addChildEventListener$$(this.$_target$, ".j-autocomplete-item", "click", function($event$$23$$) {
    var $index$$55$$ = $self$$10$$.$__selectionGroup$.$getItemIndex$(this);
    $index$$55$$ !== $JSCompiler_alias_NULL$$ ? $self$$10$$.$selectIndex$($index$$55$$) : $tuna$dom$stopPropagation$$($event$$23$$)
  }), $tuna$dom$addEventListener$$(this.$_input$, "click", function($event$$24$$) {
    $tuna$dom$stopPropagation$$($event$$24$$)
  }), $JSCompiler_StaticMethods_setOption$$(this.$__selectionGroup$, "item-selector", ".j-autocomplete-item"), this.$__selectionGroup$.init())
};
$Autocomplete$$.prototype.$selectIndex$ = function $$Autocomplete$$$$$selectIndex$$($index$$56$$) {
  0 < this.$_currentData$.length && $JSCompiler_StaticMethods___selectData$$(this, this.$_currentData$[$index$$56$$])
};
function $JSCompiler_StaticMethods___selectData$$($JSCompiler_StaticMethods___selectData$self$$, $dataItem$$1$$) {
  $JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ !== $dataItem$$1$$ && ($JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ = $dataItem$$1$$, $JSCompiler_StaticMethods___selectData$self$$.$_input$.value = $JSCompiler_StaticMethods___selectData$self$$.$_itemSerializeCallback$($dataItem$$1$$), $JSCompiler_StaticMethods___selectData$self$$.$dispatch$("change"))
}
$Autocomplete$$.prototype.$clearSelection$ = function $$Autocomplete$$$$$clearSelection$$() {
  this.$__selectedData$ !== $JSCompiler_alias_NULL$$ && (this.$__selectedData$ = $JSCompiler_alias_NULL$$, this.$dispatch$("change"))
};
$Autocomplete$$.prototype.update = function $$Autocomplete$$$$update$() {
  $InputFilter$$.prototype.update.call(this);
  this.$__selectionGroup$.$updateView$();
  this.$clearSelection$()
};
function $tuna$ui$forms$serialize$$($elements$$4_formElement$$) {
  for(var $result$$17$$ = {}, $elements$$4_formElement$$ = $elements$$4_formElement$$.elements, $i$$43$$ = 0, $l$$28$$ = $elements$$4_formElement$$.length, $name$$75$$ = $JSCompiler_alias_NULL$$;$i$$43$$ < $l$$28$$;) {
    $name$$75$$ = $elements$$4_formElement$$[$i$$43$$].name, $result$$17$$[$name$$75$$] !== $JSCompiler_alias_VOID$$ ? ($result$$17$$[$name$$75$$] instanceof Array || ($result$$17$$[$name$$75$$] = [$result$$17$$[$name$$75$$]]), $result$$17$$[$name$$75$$].push($elements$$4_formElement$$[$i$$43$$].value)) : $result$$17$$[$name$$75$$] = $elements$$4_formElement$$[$i$$43$$].value, $i$$43$$++
  }
  return $result$$17$$
}
;function $ITransformHandler$$() {
}
$ITransformHandler$$.prototype.$handleTransformComplete$ = $JSCompiler_emptyFn$$();
function $ITransformer$$() {
}
$ITransformer$$.prototype.$applyTransform$ = $JSCompiler_emptyFn$$();
function $TemplateTransformer$$($target$$59$$) {
  $ModuleInstance$$.call(this, $target$$59$$);
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($TemplateTransformer$$, $ModuleInstance$$);
$tuna$utils$implement$$($TemplateTransformer$$, $ITransformer$$);
$TemplateTransformer$$.prototype.init = function $$TemplateTransformer$$$$init$() {
  var $templateId$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "template-id"), $settings$$22$$;
  $templateId$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$tmpl$__settingsTable$$[$templateId$$] === $JSCompiler_alias_VOID$$ && ($tuna$tmpl$__settingsTable$$[$templateId$$] = $JSCompiler_StaticMethods_buildSettings$$($tuna$tmpl$__markupBuilder$$, $templateId$$)), $settings$$22$$ = $tuna$tmpl$__settingsTable$$[$templateId$$]) : $settings$$22$$ = $JSCompiler_alias_NULL$$;
  $settings$$22$$ !== $JSCompiler_alias_NULL$$ ? this.$__template$ = $JSCompiler_StaticMethods_compileTemplate$$($tuna$tmpl$__compiler$$, $settings$$22$$, this.$_target$, $JSCompiler_alias_NULL$$) : alert("Unknown template " + $templateId$$)
};
$TemplateTransformer$$.prototype.$applyTransform$ = function $$TemplateTransformer$$$$$applyTransform$$($data$$41$$) {
  this.$__template$.$applyData$(new $tuna$tmpl$data$DataNode$$($data$$41$$));
  this.$__transformHandler$ !== $JSCompiler_alias_NULL$$ && this.$__transformHandler$.$handleTransformComplete$(this.$_target$, this.$__template$.$__createdChildren$.splice(0, this.$__template$.$__createdChildren$.length), this.$__template$.$__removedChildren$.splice(0, this.$__template$.$__removedChildren$.length))
};
$TemplateTransformer$$.prototype.$destroy$ = function $$TemplateTransformer$$$$$destroy$$() {
  this.$__template$.$destroy$();
  this.$__transformHandler$ !== $JSCompiler_alias_NULL$$ && this.$__template$.$__removedChildren$.splice(0, this.$__template$.$__removedChildren$.length);
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
};
$TemplateTransformer$$.prototype.reset = function $$TemplateTransformer$$$$reset$() {
  var $transformHandler$$ = this.$__transformHandler$;
  this.$destroy$();
  this.init();
  this.$__transformHandler$ = $transformHandler$$
};
var $tuna$ui$transformers$TemplateTransformer$$ = $TemplateTransformer$$;
function $ISelectionGroup$$() {
}
$JSCompiler_prototypeAlias$$ = $ISelectionGroup$$.prototype;
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$selectIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$clearSelection$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getItemIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getItemAt$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$updateView$ = $JSCompiler_emptyFn$$();
function $AbstractSelectionGroup$$($target$$60$$) {
  $ModuleInstance$$.call(this, $target$$60$$);
  this.$_selectionRule$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($AbstractSelectionGroup$$, $ISelectionGroup$$);
$tuna$utils$extend$$($AbstractSelectionGroup$$, $ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $AbstractSelectionGroup$$.prototype;
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$() {
  return this.$_selectionRule$.$isIndexEnabled$()
};
$JSCompiler_prototypeAlias$$.$updateView$ = function $$JSCompiler_prototypeAlias$$$$updateView$$() {
  this.$_selectionView$.update()
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$20$$) {
  return this.$_itemsCollection$.$getItemIndex$($item$$20$$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$64$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$64$$)
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$_selectionRule$.$getSelectedIndexes$()
};
function $JSCompiler_StaticMethods_getLastSelectedIndex$$($JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$) {
  $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$ = $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.$_selectionRule$.$getSelectedIndexes$();
  return 0 < $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.length ? $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.pop() : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$65$$) {
  return this.$_selectionRule$.$selectIndex$($index$$65$$)
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$_selectionRule$.$clearSelection$()
};
function $SelectionGroup$$($target$$61$$, $indexAttribute$$) {
  $AbstractSelectionGroup$$.call(this, $target$$61$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-selection-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "index-attribute", $indexAttribute$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "is-multiple", $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-class", "active");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-event", "click")
}
$tuna$utils$extend$$($SelectionGroup$$, $AbstractSelectionGroup$$);
$SelectionGroup$$.prototype.init = function $$SelectionGroup$$$$init$() {
  var $indexAttribute$$1$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "index-attribute");
  this.$_itemsCollection$ = $indexAttribute$$1$$ === $JSCompiler_alias_NULL$$ ? new $tuna$ui$selection$items$ElementsCollection$$ : new $tuna$ui$selection$items$NamedElementsCollection$$($indexAttribute$$1$$);
  this.$_selectionView$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$);
  this.$_selectionRule$ = $JSCompiler_StaticMethods_getBooleanOption$$(this, "is-multiple") ? new $tuna$ui$selection$rule$MultipleSelectionRule$$ : new $tuna$ui$selection$rule$SingleSelectionRule$$;
  this.$_selectionView$.$_selectionClass$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  this.$_selectionView$.$_itemSelector$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  this.$_selectionView$.$_selectionRule$ = this.$_selectionRule$;
  this.$_selectionView$.$setItemsCollection$(this.$_itemsCollection$);
  this.$_selectionRule$.$_eventDispatcher$ = this;
  this.$_selectionRule$.$setItemsCollection$(this.$_itemsCollection$);
  this.$_selectionRule$.$_selectionView$ = this.$_selectionView$;
  this.$_selectionView$.update()
};
var $tuna$ui$selection$SelectionGroup$$ = $SelectionGroup$$;
function $Navigation$$($target$$62$$) {
  $ModuleInstance$$.call(this, $target$$62$$);
  this.$__navigationRule$ = $JSCompiler_alias_NULL$$;
  this.$__menuLinks$ = {};
  this.$__parent$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {};
  this.$__history$ = [];
  this.$__currentState$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-class", "active");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-navigation-page");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "menu-selector", ".j-navigation-menu")
}
$tuna$utils$extend$$($Navigation$$, $ModuleInstance$$);
$Navigation$$.prototype.init = function $$Navigation$$$$init$() {
  this.$__navigationRule$ = new $tuna$ui$selection$rule$NavigationSelectionRule$$;
  var $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ = new $tuna$ui$selection$items$NamedElementsCollection$$("data-name"), $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$), $className$$inline_436_l$$inline_207_selector$$inline_439$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$.$_selectionClass$ = $className$$inline_436_l$$inline_207_selector$$inline_439$$;
  $className$$inline_436_l$$inline_207_selector$$inline_439$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$.$_itemSelector$ = $className$$inline_436_l$$inline_207_selector$$inline_439$$;
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$.$_selectionRule$ = this.$__navigationRule$;
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$.$setItemsCollection$($buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$);
  this.$__navigationRule$.$_eventDispatcher$ = this;
  this.$__navigationRule$.$_selectionView$ = $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$;
  this.$__navigationRule$.$setItemsCollection$($buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$);
  this.$__navigationRule$.$setNavigation$(this);
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$.update();
  $JSCompiler_StaticMethods___initControls$$(this);
  $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "menu-selector");
  $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  if($i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ !== $JSCompiler_alias_NULL$$ && $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ = $tuna$dom$selectOne$$($i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$, this.$_target$), $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ !== 
  $JSCompiler_alias_NULL$$)) {
    for(var $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ = $tuna$dom$select$$($buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$, $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$), $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ = 0, $className$$inline_436_l$$inline_207_selector$$inline_439$$ = $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$.length, 
    $href$$inline_208_index$$inline_209$$ = $JSCompiler_alias_NULL$$, $button$$inline_210$$ = $href$$inline_208_index$$inline_209$$ = $JSCompiler_alias_NULL$$;$i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$ < $className$$inline_436_l$$inline_207_selector$$inline_439$$;) {
      $button$$inline_210$$ = $tuna$ui$buttons$create$$($buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$[$i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$]), $href$$inline_208_index$$inline_209$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$inline_210$$, "href"), $href$$inline_208_index$$inline_209$$ !== $JSCompiler_alias_NULL$$ && ($href$$inline_208_index$$inline_209$$ = $href$$inline_208_index$$inline_209$$.split("/").shift(), 
      this.$__menuLinks$[$href$$inline_208_index$$inline_209$$] === $JSCompiler_alias_VOID$$ && (this.$__menuLinks$[$href$$inline_208_index$$inline_209$$] = []), this.$__menuLinks$[$href$$inline_208_index$$inline_209$$].push($button$$inline_210$$)), $i$$inline_206_menu$$inline_204_menuSelector$$inline_202_selectionView$$inline_199$$++
    }
  }
  $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ = this.$__navigationRule$.$__currentIndex$;
  $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateMenu$$(this, $buttonSelector$$inline_203_buttons$$inline_205_currentIndex$$inline_211_itemsCollection$$inline_198$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods___initControls$$($JSCompiler_StaticMethods___initControls$self$$) {
  var $controls$$ = new $ButtonGroup$$($JSCompiler_StaticMethods___initControls$self$$.$_target$);
  $JSCompiler_StaticMethods_setOption$$($controls$$, "button-selector", ".j-navigation-link");
  $controls$$.$__defaultAction$ = "navigate";
  $controls$$.addEventListener("navigate", function($event$$25$$, $button$$2$$) {
    $event$$25$$.preventDefault();
    var $index$$67$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$2$$, "href");
    if($index$$67$$ !== $JSCompiler_alias_NULL$$) {
      var $prefix$$inline_451$$;
      $prefix$$inline_451$$ === $JSCompiler_alias_VOID$$ && ($prefix$$inline_451$$ = "data-");
      for(var $result$$inline_452$$ = {}, $attrs$$inline_453$$ = $button$$2$$.$_target$.attributes, $i$$inline_454$$ = 0, $l$$inline_455$$ = $attrs$$inline_453$$.length;$i$$inline_454$$ < $l$$inline_455$$;) {
        0 === $attrs$$inline_453$$[$i$$inline_454$$].name.indexOf($prefix$$inline_451$$) && ($result$$inline_452$$[$attrs$$inline_453$$[$i$$inline_454$$].name.substr($prefix$$inline_451$$.length)] = $attrs$$inline_453$$[$i$$inline_454$$].value), $i$$inline_454$$++
      }
      delete $result$$inline_452$$.href;
      $JSCompiler_StaticMethods___initControls$self$$.navigate($index$$67$$, $result$$inline_452$$)
    }
  });
  $controls$$.addEventListener("back", function($event$$26$$) {
    $event$$26$$.preventDefault();
    $JSCompiler_StaticMethods___initControls$self$$.back()
  });
  $controls$$.init()
}
function $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$, $i$$45_path$$9$$, $isSelected$$) {
  if($i$$45_path$$9$$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.$__menuLinks$[$i$$45_path$$9$$], $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ !== $JSCompiler_alias_VOID$$)) {
    for(var $i$$45_path$$9$$ = 0, $l$$30$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.length;$i$$45_path$$9$$ < $l$$30$$;) {
      $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$[$i$$45_path$$9$$].setActive($isSelected$$), $i$$45_path$$9$$++
    }
  }
}
function $JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$) {
  var $result$$18$$ = [], $index$$69$$ = $JSCompiler_StaticMethods_getPathDesc$self$$.$__navigationRule$.$__currentIndex$;
  $index$$69$$ !== $JSCompiler_alias_NULL$$ && ($result$$18$$.push($index$$69$$), $JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$] !== $JSCompiler_alias_VOID$$ && ($result$$18$$ = $result$$18$$.concat($JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$]))));
  return $result$$18$$
}
function $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$) {
  var $result$$19$$ = [];
  $JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$ !== $JSCompiler_alias_NULL$$ && ($result$$19$$.push($JSCompiler_StaticMethods_getRelatedPath$self$$.getName()), $result$$19$$ = $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$).concat($result$$19$$));
  return $result$$19$$
}
$Navigation$$.prototype.$getRoot$ = function $$Navigation$$$$$getRoot$$() {
  return this.$__parent$ === $JSCompiler_alias_NULL$$ ? this : this.$__parent$.$getRoot$()
};
$Navigation$$.prototype.back = function $$Navigation$$$$back$() {
  this.$__parent$ === $JSCompiler_alias_NULL$$ ? 0 < this.$__history$.length && (this.$__currentState$ = this.$__history$.pop(), $JSCompiler_StaticMethods_navigatePath$$(this, this.$__currentState$.$__path$.slice(0), this.$__currentState$.getData())) : this.$getRoot$().back()
};
$Navigation$$.prototype.navigate = function $$Navigation$$$$navigate$($path$$10$$, $data$$43$$) {
  if($path$$10$$ instanceof Array) {
    this.$__parent$ === $JSCompiler_alias_NULL$$ ? (this.$__currentState$ === $JSCompiler_alias_NULL$$ && (this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this))), $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$43$$), this.$__history$.push(this.$__currentState$), this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this), $data$$43$$)) : $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$43$$)
  }else {
    var $parsedPath$$ = $path$$10$$.split("/");
    0 !== $path$$10$$.indexOf("/") && ($parsedPath$$ = $JSCompiler_StaticMethods_getRelatedPath$$(this).concat($parsedPath$$));
    this.$getRoot$().navigate($parsedPath$$, $data$$43$$)
  }
};
function $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$, $path$$11$$, $data$$44$$) {
  for(var $index$$70$$ = $path$$11$$.shift();"" === $index$$70$$ && 0 < $path$$11$$.length;) {
    $index$$70$$ = $path$$11$$.shift()
  }
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.navigate($index$$70$$, $data$$44$$ || $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_TRUE$$);
  if($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$] !== $JSCompiler_alias_VOID$$) {
    return $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$], $path$$11$$, $data$$44$$)
  }
}
function $NavigationState$$($path$$12$$, $data$$45$$) {
  this.$__path$ = $path$$12$$;
  this.$__data$ = $data$$45$$ || $JSCompiler_alias_NULL$$
}
$NavigationState$$.prototype.$serialize$ = function $$NavigationState$$$$$serialize$$() {
  var $result$$20$$ = "";
  this.$__data$ !== $JSCompiler_alias_NULL$$ && ($result$$20$$ = $tuna$net$__splitData$$(this.$__data$).join("&"));
  "" !== $result$$20$$ && ($result$$20$$ = "?" + $result$$20$$);
  return"/" + this.$__path$.join("/") + $result$$20$$
};
$NavigationState$$.prototype.getData = $JSCompiler_get$$("$__data$");
function $Carousel$$($target$$63$$) {
  $tuna$ui$selection$SelectionGroup$$.call(this, $target$$63$$, $JSCompiler_alias_NULL$$);
  this.$__shiftIndex$ = -1;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-carousel-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "next-button-selector", ".j-carousel-next");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "back-button-selector", ".j-carousel-back")
}
$tuna$utils$extend$$($Carousel$$, $tuna$ui$selection$SelectionGroup$$);
$Carousel$$.prototype.init = function $$Carousel$$$$init$() {
  $tuna$ui$selection$SelectionGroup$$.prototype.init.call(this);
  var $self$$12$$ = this;
  this.$__shiftIndex$ = Number($JSCompiler_StaticMethods_getLastSelectedIndex$$(this));
  var $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "next-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$27$$) {
    $tuna$dom$preventDefault$$($event$$27$$);
    $self$$12$$.next()
  });
  $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "back-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$28$$) {
    $tuna$dom$preventDefault$$($event$$28$$);
    $self$$12$$.back()
  })
};
$Carousel$$.prototype.next = function $$Carousel$$$$next$() {
  this.$__shiftIndex$++;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = 0);
  this.$selectIndex$(this.$__shiftIndex$)
};
$Carousel$$.prototype.back = function $$Carousel$$$$back$() {
  this.$__shiftIndex$--;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = this.$_itemsCollection$.$getItemsCount$() - 1);
  this.$selectIndex$(this.$__shiftIndex$)
};
function $IItemsCollection$$() {
}
$JSCompiler_prototypeAlias$$ = $IItemsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getItemIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getItemAt$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.clear = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getItemsCount$ = $JSCompiler_emptyFn$$();
function $ElementsCollection$$() {
  this.$__items$ = []
}
$tuna$utils$implement$$($ElementsCollection$$, $IItemsCollection$$);
$JSCompiler_prototypeAlias$$ = $ElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$23$$) {
  return this.$__items$.push($item$$23$$) - 1
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$24$$) {
  return $tuna$utils$indexOf$$($item$$24$$, this.$__items$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$72$$) {
  return this.$__items$[$index$$72$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$.length = 0
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  return this.$__items$.length
};
var $tuna$ui$selection$items$ElementsCollection$$ = $ElementsCollection$$;
function $NamedElementsCollection$$($indexAttribute$$2$$) {
  this.$__indexAttribute$ = $indexAttribute$$2$$;
  this.$__items$ = {}
}
$tuna$utils$implement$$($NamedElementsCollection$$, $IItemsCollection$$);
$JSCompiler_prototypeAlias$$ = $NamedElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$25$$) {
  var $index$$73$$ = $item$$25$$.getAttribute(this.$__indexAttribute$);
  $index$$73$$ !== $JSCompiler_alias_NULL$$ && (this.$__items$[$index$$73$$] = $item$$25$$);
  return $index$$73$$
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($index$$74_item$$26$$) {
  $index$$74_item$$26$$ = $index$$74_item$$26$$.getAttribute(this.$__indexAttribute$);
  return $index$$74_item$$26$$ !== $JSCompiler_alias_NULL$$ && this.$__items$[$index$$74_item$$26$$] !== $JSCompiler_alias_VOID$$ ? $index$$74_item$$26$$ : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$75$$) {
  return this.$__items$[$index$$75$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$ = {}
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  var $i$$47$$ = 0, $index$$77$$;
  for($index$$77$$ in this.$__items$) {
    $i$$47$$++
  }
  return $i$$47$$
};
var $tuna$ui$selection$items$NamedElementsCollection$$ = $NamedElementsCollection$$;
function $ISelectionRule$$() {
}
$ISelectionRule$$.prototype.$getSelectedIndexes$ = $JSCompiler_emptyFn$$();
$ISelectionRule$$.prototype.$selectIndex$ = $JSCompiler_emptyFn$$();
$ISelectionRule$$.prototype.$clearSelection$ = $JSCompiler_emptyFn$$();
$ISelectionRule$$.prototype.$isIndexEnabled$ = $JSCompiler_emptyFn$$();
function $AbstractSelectionRule$$() {
  this.$_eventDispatcher$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$;
  this.$_disabledIndexes$ = []
}
$tuna$utils$implement$$($AbstractSelectionRule$$, $ISelectionRule$$);
$JSCompiler_prototypeAlias$$ = $AbstractSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setItemsCollection$ = $JSCompiler_set$$("$_itemsCollection$");
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$selectIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$clearSelection$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$85$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$85$$) !== $JSCompiler_alias_NULL$$ && -1 === $tuna$utils$indexOf$$($index$$85$$, this.$_disabledIndexes$)
};
function $SingleSelectionRule$$() {
  $AbstractSelectionRule$$.call(this);
  this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($SingleSelectionRule$$, $AbstractSelectionRule$$);
$SingleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$SingleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$SingleSelectionRule$$.prototype.$selectIndex$ = function $$SingleSelectionRule$$$$$selectIndex$$($index$$86$$) {
  var $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$;
  if($JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ = this.$isIndexEnabled$($index$$86$$)) {
    if($JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ = this.$__currentIndex$ !== $index$$86$$) {
      $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ = this.$__currentIndex$, $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ = ($JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ === $JSCompiler_alias_NULL$$ || this.$_eventDispatcher$.$dispatch$("deselect", $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$)) && this.$_eventDispatcher$.$dispatch$("select", $index$$86$$)
    }
  }
  return $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ ? ($JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ = this.$__currentIndex$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_selectionView$.$applySelectionAt$($index$$86$$), this.$__currentIndex$ = $index$$86$$, $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$ !== $JSCompiler_alias_NULL$$ && this.$_eventDispatcher$.$dispatch$("deselected", 
  $JSCompiler_temp$$7_JSCompiler_temp$$8_oldIndex_oldIndex$$inline_232$$), this.$_eventDispatcher$.$dispatch$("selected", $index$$86$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$SingleSelectionRule$$.prototype.$clearSelection$ = function $$SingleSelectionRule$$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
var $tuna$ui$selection$rule$SingleSelectionRule$$ = $SingleSelectionRule$$;
function $MultipleSelectionRule$$() {
  $AbstractSelectionRule$$.call(this);
  this.$__selectedIndexes$ = []
}
$tuna$utils$extend$$($MultipleSelectionRule$$, $AbstractSelectionRule$$);
$MultipleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$MultipleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__selectedIndexes$.slice(0)
};
$MultipleSelectionRule$$.prototype.$selectIndex$ = function $$MultipleSelectionRule$$$$$selectIndex$$($index$$88$$) {
  if(this.$isIndexEnabled$($index$$88$$)) {
    var $indexPosition$$1$$ = $tuna$utils$indexOf$$($index$$88$$, this.$__selectedIndexes$);
    if(-1 === $indexPosition$$1$$) {
      if(this.$_eventDispatcher$.$dispatch$("select", $index$$88$$)) {
        return this.$_selectionView$.$applySelectionAt$($index$$88$$), this.$__selectedIndexes$.push($index$$88$$), $JSCompiler_alias_TRUE$$
      }
    }else {
      if(this.$_eventDispatcher$.$dispatch$("deselect", $index$$88$$)) {
        return this.$_selectionView$.$destroySelectionAt$($index$$88$$), this.$__selectedIndexes$.splice($indexPosition$$1$$, 1), $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$MultipleSelectionRule$$.prototype.$clearSelection$ = function $$MultipleSelectionRule$$$$$clearSelection$$() {
  for(;0 < this.$__selectedIndexes$.length;) {
    this.$_selectionView$.$destroySelectionAt$(this.$__selectedIndexes$.shift())
  }
};
var $tuna$ui$selection$rule$MultipleSelectionRule$$ = $MultipleSelectionRule$$;
function $NavigationSelectionRule$$() {
  $AbstractSelectionRule$$.call(this);
  this.$__openData$ = this.$__navigation$ = this.$__currentController$ = this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($NavigationSelectionRule$$, $AbstractSelectionRule$$);
$JSCompiler_prototypeAlias$$ = $NavigationSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setNavigation$ = $JSCompiler_set$$("$__navigation$");
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$JSCompiler_prototypeAlias$$.navigate = function $$JSCompiler_prototypeAlias$$$navigate$($index$$90$$, $data$$46$$) {
  this.$__openData$ = $data$$46$$;
  return this.$selectIndex$($index$$90$$)
};
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$91_page$$inline_235$$) {
  return this.$isIndexEnabled$($index$$91_page$$inline_235$$) && this.$__currentIndex$ !== $index$$91_page$$inline_235$$ ? (this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ instanceof $tuna$view$PageViewController$$ && this.$__currentController$.$canClose$($index$$91_page$$inline_235$$) && this.$__currentController$ instanceof $tuna$view$PageViewController$$ && this.$__currentController$.close(), this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("close", 
  this.$__currentIndex$)), this.$__currentIndex$ = $index$$91_page$$inline_235$$, this.$__currentController$ = $JSCompiler_alias_NULL$$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && ($index$$91_page$$inline_235$$ = this.$_itemsCollection$.$getItemAt$(this.$__currentIndex$), $index$$91_page$$inline_235$$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ = $tuna$view$__controllerTable$$[$index$$91_page$$inline_235$$.id] !== $JSCompiler_alias_VOID$$ ? $tuna$view$__controllerTable$$[$index$$91_page$$inline_235$$.id] : 
  $JSCompiler_alias_NULL$$, this.$__currentController$ !== $JSCompiler_alias_NULL$$ && !this.$__currentController$.$_isActive$ && (this.$__currentController$ instanceof $tuna$view$PageViewController$$ && this.$__currentController$.$setNavigation$(this.$__navigation$), $JSCompiler_StaticMethods_bootstrap$$(this.$__currentController$, $index$$91_page$$inline_235$$)))), this.$_selectionView$.$applySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("open", this.$__currentIndex$), 
  this.$__currentController$ !== $JSCompiler_alias_NULL$$ && this.$__currentController$ instanceof $tuna$view$PageViewController$$ && this.$__currentController$.open(this.$__openData$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
var $tuna$ui$selection$rule$NavigationSelectionRule$$ = $NavigationSelectionRule$$;
function $ISelectionView$$() {
}
$ISelectionView$$.prototype.$applySelectionAt$ = $JSCompiler_emptyFn$$();
$ISelectionView$$.prototype.$destroySelectionAt$ = $JSCompiler_emptyFn$$();
$ISelectionView$$.prototype.update = $JSCompiler_emptyFn$$();
function $AbstractSelectionView$$() {
  this.$_selectionRule$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$implement$$($AbstractSelectionView$$, $ISelectionView$$);
$AbstractSelectionView$$.prototype.$setItemsCollection$ = $JSCompiler_set$$("$_itemsCollection$");
$AbstractSelectionView$$.prototype.$applySelectionAt$ = $JSCompiler_emptyFn$$();
$AbstractSelectionView$$.prototype.$destroySelectionAt$ = $JSCompiler_emptyFn$$();
$AbstractSelectionView$$.prototype.update = $JSCompiler_emptyFn$$();
function $ClassSelectionView$$($target$$64$$) {
  $AbstractSelectionView$$.call(this);
  this.$_target$ = $target$$64$$;
  this.$_selectionClass$ = this.$_itemSelector$ = ""
}
$tuna$utils$extend$$($ClassSelectionView$$, $AbstractSelectionView$$);
$ClassSelectionView$$.prototype.$applySelectionAt$ = function $$ClassSelectionView$$$$$applySelectionAt$$($index$$101_item$$27$$) {
  $index$$101_item$$27$$ = this.$_itemsCollection$.$getItemAt$($index$$101_item$$27$$);
  $index$$101_item$$27$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addClass$$($index$$101_item$$27$$, this.$_selectionClass$)
};
$ClassSelectionView$$.prototype.$destroySelectionAt$ = function $$ClassSelectionView$$$$$destroySelectionAt$$($index$$102_item$$28$$) {
  $index$$102_item$$28$$ = this.$_itemsCollection$.$getItemAt$($index$$102_item$$28$$);
  $index$$102_item$$28$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($index$$102_item$$28$$, this.$_selectionClass$)
};
$ClassSelectionView$$.prototype.update = function $$ClassSelectionView$$$$update$() {
  if(this.$_itemSelector$ !== $JSCompiler_alias_NULL$$) {
    this.$_selectionRule$.$clearSelection$();
    this.$_itemsCollection$.clear();
    for(var $possibleItems$$ = $tuna$dom$select$$(this.$_itemSelector$, this.$_target$), $i$$48$$ = 0, $l$$32$$ = $possibleItems$$.length, $index$$105$$ = $JSCompiler_alias_NULL$$, $item$$31$$ = $JSCompiler_alias_NULL$$;$i$$48$$ < $l$$32$$;) {
      $item$$31$$ = $possibleItems$$[$i$$48$$], $tuna$dom$getParentMatches$$($item$$31$$, this.$_itemSelector$, this.$_target$) === $JSCompiler_alias_NULL$$ && ($index$$105$$ = this.$_itemsCollection$.$addItem$($item$$31$$), $index$$105$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$hasClass$$($item$$31$$, this.$_selectionClass$) && this.$_selectionRule$.$selectIndex$($index$$105$$)), $i$$48$$++
    }
  }
};
var $tuna$ui$selection$view$ClassSelectionView$$ = $ClassSelectionView$$;
function $FormModule$$() {
  this.$_selector$ = "form.j-form"
}
$tuna$utils$extend$$($FormModule$$, $Module$$);
$FormModule$$.prototype.$initInstance$ = function $$FormModule$$$$$initInstance$$($target$$65$$) {
  return new $Form$$($target$$65$$)
};
var $module$$inline_240$$ = new $FormModule$$;
$tuna$ui$modules$__typeTable$$.form = $module$$inline_240$$;
function $NavigationModule$$() {
  this.$_selector$ = ".j-navigation"
}
$tuna$utils$extend$$($NavigationModule$$, $Module$$);
$NavigationModule$$.prototype.$initInstance$ = function $$NavigationModule$$$$$initInstance$$($target$$66$$) {
  return new $Navigation$$($target$$66$$)
};
var $module$$inline_245$$ = new $NavigationModule$$;
$tuna$ui$modules$__typeTable$$.navigation = $module$$inline_245$$;
function $PopupModule$$() {
  this.$_selector$ = ".j-popup"
}
$tuna$utils$extend$$($PopupModule$$, $Module$$);
$PopupModule$$.prototype.$initInstance$ = function $$PopupModule$$$$$initInstance$$($target$$67$$) {
  return $tuna$ui$popups$create$$($target$$67$$)
};
var $module$$inline_250$$ = new $PopupModule$$;
$tuna$ui$modules$__typeTable$$.popup = $module$$inline_250$$;
function $ButtonModule$$() {
  this.$_selector$ = ".j-button"
}
$tuna$utils$extend$$($ButtonModule$$, $Module$$);
$ButtonModule$$.prototype.$initInstance$ = function $$ButtonModule$$$$$initInstance$$($target$$68$$) {
  return $tuna$ui$buttons$create$$($target$$68$$)
};
var $module$$inline_255$$ = new $ButtonModule$$;
$tuna$ui$modules$__typeTable$$.button = $module$$inline_255$$;
function $PopupButtonModule$$() {
  this.$_selector$ = ".j-popup-button"
}
$tuna$utils$extend$$($PopupButtonModule$$, $Module$$);
$PopupButtonModule$$.prototype.$initInstance$ = function $$PopupButtonModule$$$$$initInstance$$($target$$69$$) {
  return new $PopupButton$$($target$$69$$)
};
var $module$$inline_260$$ = new $PopupButtonModule$$;
$tuna$ui$modules$__typeTable$$["popup-button"] = $module$$inline_260$$;
function $SelectionGroupModule$$() {
  this.$_selector$ = ".j-selection-group"
}
$tuna$utils$extend$$($SelectionGroupModule$$, $Module$$);
$SelectionGroupModule$$.prototype.$initInstance$ = function $$SelectionGroupModule$$$$$initInstance$$($target$$70$$) {
  var $selectionGroup$$ = new $tuna$ui$selection$SelectionGroup$$($target$$70$$, $JSCompiler_alias_NULL$$), $selectionEvent$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "selection-event"), $itemSelector$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "item-selector");
  $selectionEvent$$ !== $JSCompiler_alias_NULL$$ && $itemSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$($target$$70$$, $itemSelector$$, $selectionEvent$$, function() {
    var $index$$106$$ = $selectionGroup$$.$getItemIndex$(this);
    $index$$106$$ !== $JSCompiler_alias_NULL$$ && $selectionGroup$$.$selectIndex$($index$$106$$)
  });
  return $selectionGroup$$
};
var $module$$inline_265$$ = new $SelectionGroupModule$$;
$tuna$ui$modules$__typeTable$$["selection-group"] = $module$$inline_265$$;
function $TemplateTransformerModule$$() {
  this.$_selector$ = ".j-template-transformer"
}
$tuna$utils$extend$$($TemplateTransformerModule$$, $Module$$);
$TemplateTransformerModule$$.prototype.$initInstance$ = function $$TemplateTransformerModule$$$$$initInstance$$($target$$71$$) {
  return new $tuna$ui$transformers$TemplateTransformer$$($target$$71$$)
};
var $module$$inline_270$$ = new $TemplateTransformerModule$$;
$tuna$ui$modules$__typeTable$$["template-transformer"] = $module$$inline_270$$;
function $ButtonGroupModule$$() {
  this.$_selector$ = ".j-button-group"
}
$tuna$utils$extend$$($ButtonGroupModule$$, $Module$$);
$ButtonGroupModule$$.prototype.$initInstance$ = function $$ButtonGroupModule$$$$$initInstance$$($target$$72$$) {
  return new $ButtonGroup$$($target$$72$$)
};
var $module$$inline_275$$ = new $ButtonGroupModule$$;
$tuna$ui$modules$__typeTable$$["button-group"] = $module$$inline_275$$;
function $SWFModule$$() {
  this.$_selector$ = ".j-swf"
}
$tuna$utils$extend$$($SWFModule$$, $Module$$);
$SWFModule$$.prototype.$initInstance$ = function $$SWFModule$$$$$initInstance$$($target$$73$$) {
  return new $SWF$$($target$$73$$)
};
var $module$$inline_280$$ = new $SWFModule$$;
$tuna$ui$modules$__typeTable$$.swf = $module$$inline_280$$;
function $InputFilterModule$$() {
  this.$_selector$ = ".j-input-filter"
}
$tuna$utils$extend$$($InputFilterModule$$, $Module$$);
$InputFilterModule$$.prototype.$initInstance$ = function $$InputFilterModule$$$$$initInstance$$($target$$74$$) {
  return new $InputFilter$$($target$$74$$)
};
var $module$$inline_285$$ = new $InputFilterModule$$;
$tuna$ui$modules$__typeTable$$["input-filter"] = $module$$inline_285$$;
function $AutocompleteModule$$() {
  this.$_selector$ = ".j-autocomplete"
}
$tuna$utils$extend$$($AutocompleteModule$$, $Module$$);
$AutocompleteModule$$.prototype.$initInstance$ = function $$AutocompleteModule$$$$$initInstance$$($target$$75$$) {
  return new $Autocomplete$$($target$$75$$)
};
var $module$$inline_290$$ = new $AutocompleteModule$$;
$tuna$ui$modules$__typeTable$$.autocomplete = $module$$inline_290$$;
function $CarouselModule$$() {
  this.$_selector$ = ".j-carousel"
}
$tuna$utils$extend$$($CarouselModule$$, $Module$$);
$CarouselModule$$.prototype.$initInstance$ = function $$CarouselModule$$$$$initInstance$$($target$$76$$) {
  return new $Carousel$$($target$$76$$)
};
var $module$$inline_295$$ = new $CarouselModule$$;
$tuna$ui$modules$__typeTable$$.carousel = $module$$inline_295$$;
var $tuna$view$__controllerTable$$ = {}, $tuna$view$__mainController$$ = $JSCompiler_alias_NULL$$;
function $ViewController$$() {
  this.$_container$ = $JSCompiler_alias_NULL$$;
  this.$_isActive$ = $JSCompiler_alias_FALSE$$;
  this.$_modules$ = []
}
$tuna$utils$implement$$($ViewController$$, $ITransformHandler$$);
function $JSCompiler_StaticMethods_bootstrap$$($JSCompiler_StaticMethods_bootstrap$self$$, $target$$78$$) {
  $JSCompiler_StaticMethods_bootstrap$self$$.$_container$ = new $ModuleContainer$$($target$$78$$);
  for(var $i$$inline_298$$ = 0, $l$$inline_299$$ = $JSCompiler_StaticMethods_bootstrap$self$$.$_modules$.length;$i$$inline_298$$ < $l$$inline_299$$;) {
    $JSCompiler_StaticMethods_bootstrap$self$$.$_container$.$__modules$.push($JSCompiler_StaticMethods_bootstrap$self$$.$_modules$[$i$$inline_298$$]), $i$$inline_298$$++
  }
  $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_bootstrap$self$$.$_container$);
  $JSCompiler_StaticMethods_bootstrap$self$$.$_initActions$();
  $JSCompiler_StaticMethods_bootstrap$self$$.$_isActive$ = $JSCompiler_alias_TRUE$$
}
$ViewController$$.prototype.$_initActions$ = $JSCompiler_emptyFn$$();
$ViewController$$.prototype.$handleTransformComplete$ = function $$ViewController$$$$$handleTransformComplete$$($target$$79$$, $createdElements$$1$$) {
  for(var $i$$50$$ = 0, $l$$34$$ = $createdElements$$1$$.length;$i$$50$$ < $l$$34$$;) {
    $JSCompiler_StaticMethods_initModules$$(this.$_container$, $createdElements$$1$$[$i$$50$$]), $i$$50$$++
  }
};
function $PageViewController$$() {
  $ViewController$$.call(this);
  this.$_navigation$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($PageViewController$$, $ViewController$$);
$PageViewController$$.prototype.$setNavigation$ = $JSCompiler_set$$("$_navigation$");
$PageViewController$$.prototype.$canClose$ = function $$PageViewController$$$$$canClose$$() {
  return $JSCompiler_alias_TRUE$$
};
$PageViewController$$.prototype.close = $JSCompiler_emptyFn$$();
$PageViewController$$.prototype.open = $JSCompiler_emptyFn$$();
var $tuna$view$PageViewController$$ = $PageViewController$$;
window.main = function $window$main$($body$$2$$) {
  $tuna$utils$config$$.init($tuna$net$decode$$());
  $tuna$dom$__selectorEngine$$ = $.find;
  -1 === $tuna$utils$indexOf$$("j-module-container", $tuna$ui$modules$__isolators$$) && $tuna$ui$modules$__isolators$$.push("j-module-container");
  var $target$$inline_303_target$$inline_305$$ = $tuna$dom$selectOne$$("#confirm_popup");
  $target$$inline_303_target$$inline_305$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$ui$popups$__confirm$$ = $tuna$ui$popups$create$$($target$$inline_303_target$$inline_305$$), $tuna$ui$popups$__confirm$$.init(), $tuna$ui$popups$__confirmMessage$$ = $tuna$dom$selectOne$$(".j-message", $target$$inline_303_target$$inline_305$$)) : $tuna$ui$popups$__confirm$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__confirm$$.$destroy$(), $tuna$ui$popups$__confirmMessage$$ = $tuna$ui$popups$__confirm$$ = $JSCompiler_alias_NULL$$);
  $target$$inline_303_target$$inline_305$$ = $tuna$dom$selectOne$$("#alert_popup");
  $target$$inline_303_target$$inline_305$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$ui$popups$__alert$$ = $tuna$ui$popups$create$$($target$$inline_303_target$$inline_305$$), $tuna$ui$popups$__alert$$.init(), $tuna$ui$popups$__alertMessage$$ = $tuna$dom$selectOne$$(".j-message", $target$$inline_303_target$$inline_305$$)) : $tuna$ui$popups$__alert$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__alert$$.$destroy$(), $tuna$ui$popups$__alertMessage$$ = $tuna$ui$popups$__alert$$ = $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods_bootstrap$$($tuna$view$__mainController$$, $body$$2$$);
  VK.init()
};
function $DataImage$$($target$$82$$) {
  $ModuleInstance$$.call(this, $target$$82$$);
  this.$_data$ = $JSCompiler_alias_NULL$$;
  this.type = "image/jpeg"
}
$tuna$utils$extend$$($DataImage$$, $ModuleInstance$$);
$DataImage$$.prototype.setData = function $$DataImage$$$$setData$($data$$47$$) {
  this.$_data$ = $data$$47$$;
  $JSCompiler_StaticMethods___updateImage$$(this)
};
$DataImage$$.prototype.getData = $JSCompiler_get$$("$_data$");
function $JSCompiler_StaticMethods___updateImage$$($JSCompiler_StaticMethods___updateImage$self$$) {
  if($tuna$IS_IE$$) {
    var $form$$1$$ = document.createElement("form");
    $form$$1$$.method = "POST";
    $form$$1$$.target = "support_frame";
    $form$$1$$.action = "/api/?method=utils.base64Echo&type=" + $JSCompiler_StaticMethods___updateImage$self$$.type;
    var $dataInput$$ = document.createElement("input");
    $dataInput$$.type = "hidden";
    $dataInput$$.name = "data";
    $dataInput$$.value = $JSCompiler_StaticMethods___updateImage$self$$.$_data$;
    $form$$1$$.appendChild($dataInput$$);
    document.body.appendChild($form$$1$$);
    var $frame$$ = $tuna$dom$selectOne$$("#support_frame");
    $frame$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addOneEventListener$$($frame$$, "load", function() {
      var $image$$2$$ = $tuna$dom$selectOne$$("img", $frame$$.contentWindow.document.body);
      if($image$$2$$ !== $JSCompiler_alias_NULL$$) {
        var $parent$$inline_311$$ = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.parentNode;
        $parent$$inline_311$$ !== $JSCompiler_alias_NULL$$ ? ($parent$$inline_311$$.replaceChild($image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$_target$), $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id !== $JSCompiler_alias_NULL$$ && ($image$$2$$.id = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id), $JSCompiler_StaticMethods___updateImage$self$$.$_target$ = $image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("loaded", $JSCompiler_StaticMethods___updateImage$self$$.$_target$)) : 
        $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("error")
      }else {
        $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("error")
      }
      document.body.removeChild($form$$1$$)
    });
    $form$$1$$.submit()
  }else {
    $JSCompiler_StaticMethods___updateImage$self$$.$_target$.src = "data:" + $JSCompiler_StaticMethods___updateImage$self$$.type + ";base64," + $JSCompiler_StaticMethods___updateImage$self$$.$_data$, $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("loaded", $JSCompiler_StaticMethods___updateImage$self$$.$_target$)
  }
}
var $ui$__idTable$$ = {};
function $ui$createDataImage$$($target$$83$$) {
  return $target$$83$$.id !== $JSCompiler_alias_NULL$$ ? ($ui$__idTable$$[$target$$83$$.id] === $JSCompiler_alias_VOID$$ && ($ui$__idTable$$[$target$$83$$.id] = new $DataImage$$($target$$83$$)), $ui$__idTable$$[$target$$83$$.id]) : new $DataImage$$($target$$83$$)
}
;function $DatepickerModule$$() {
  this.$_selector$ = "input.j-datepicker"
}
$tuna$utils$extend$$($DatepickerModule$$, $Module$$);
$DatepickerModule$$.prototype.$initInstance$ = function $$DatepickerModule$$$$$initInstance$$($target$$84$$) {
  $($target$$84$$).keydown(function($event$$29$$) {
    $event$$29$$.preventDefault()
  }).datepicker({minDate:new Date((new Date).getTime() + 2592E5)});
  return $JSCompiler_alias_NULL$$
};
var $module$$inline_316$$ = new $DatepickerModule$$;
$tuna$ui$modules$__typeTable$$.datepicker = $module$$inline_316$$;
function $DataImageModule$$() {
  this.$_selector$ = "img.j-data-image"
}
$tuna$utils$extend$$($DataImageModule$$, $Module$$);
$DataImageModule$$.prototype.$initInstance$ = function $$DataImageModule$$$$$initInstance$$($target$$85$$) {
  return $ui$createDataImage$$($target$$85$$)
};
var $module$$inline_321$$ = new $DataImageModule$$;
$tuna$ui$modules$__typeTable$$["data-image"] = $module$$inline_321$$;
function $DataImageCopy$$() {
  this.$_selector$ = "img.j-data-image-copy"
}
$tuna$utils$extend$$($DataImageCopy$$, $Module$$);
$DataImageCopy$$.prototype.$initInstance$ = function $$DataImageCopy$$$$$initInstance$$($replaceImage_target$$86_targetImage$$) {
  var $imageSelector$$ = $replaceImage_target$$86_targetImage$$.getAttribute("data-image-selector");
  if($imageSelector$$ !== $JSCompiler_alias_NULL$$) {
    var $currentImage$$ = $replaceImage_target$$86_targetImage$$, $replaceImage_target$$86_targetImage$$ = $tuna$dom$selectOne$$($imageSelector$$);
    if($replaceImage_target$$86_targetImage$$ !== $JSCompiler_alias_NULL$$) {
      var $targetDataImage$$ = $ui$createDataImage$$($replaceImage_target$$86_targetImage$$), $replaceImage_target$$86_targetImage$$ = function $$replaceImage_target$$86_targetImage$$$() {
        var $image$$4_newImage$$ = $targetDataImage$$.$_target$, $parent$$9$$ = $currentImage$$.parentNode;
        $parent$$9$$ !== $JSCompiler_alias_NULL$$ && ($image$$4_newImage$$ = $image$$4_newImage$$.cloneNode($JSCompiler_alias_FALSE$$), $image$$4_newImage$$.id = $currentImage$$.id, $image$$4_newImage$$.className = $currentImage$$.className, $parent$$9$$.replaceChild($image$$4_newImage$$, $currentImage$$), $currentImage$$ = $image$$4_newImage$$)
      };
      $targetDataImage$$.addEventListener("loaded", $replaceImage_target$$86_targetImage$$);
      $replaceImage_target$$86_targetImage$$();
      return $targetDataImage$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
var $module$$inline_326$$ = new $DataImageCopy$$;
$tuna$ui$modules$__typeTable$$["data-image-copy"] = $module$$inline_326$$;
function $YandexShareModule$$() {
  this.$_selector$ = ".j-yandex-share"
}
$tuna$utils$extend$$($YandexShareModule$$, $Module$$);
$YandexShareModule$$.prototype.$initInstance$ = function $$YandexShareModule$$$$$initInstance$$($script_target$$87$$) {
  $script_target$$87$$.innerHTML = '<div id="ya_share"></div>';
  $script_target$$87$$ = document.createElement("script");
  $script_target$$87$$.type = "text/javascript";
  $script_target$$87$$.src = "http://yandex.st/share/share.js";
  $script_target$$87$$.onload = function $$script_target$$87$$$onload$() {
    (new window.Ya.share({element:"ya_share", elementStyle:{type:"none", quickServices:["facebook", "lj", "odnoklassniki", "vkontakte", "yaru"]}})).updateShareLink("http://api.yandex.ru", "API")
  };
  document.body.appendChild($script_target$$87$$);
  return $JSCompiler_alias_NULL$$
};
var $module$$inline_331$$ = new $YandexShareModule$$;
$tuna$ui$modules$__typeTable$$["yandex-share"] = $module$$inline_331$$;
function $VKShareModule$$() {
  this.$_selector$ = ".j-vk-share"
}
$tuna$utils$extend$$($VKShareModule$$, $Module$$);
$VKShareModule$$.prototype.$initInstance$ = function $$VKShareModule$$$$$initInstance$$($target$$88$$) {
  $target$$88$$.id = "vk_groups";
  var $script$$1$$ = document.createElement("script");
  $script$$1$$.type = "text/javascript";
  $script$$1$$.src = "http://userapi.com/js/api/openapi.js";
  $script$$1$$.onload = function $$script$$1$$$onload$() {
    window.VK.Widgets.Group($target$$88$$.id, {mode:0, width:"200", height:"290"}, 32850256)
  };
  document.body.appendChild($script$$1$$);
  return $JSCompiler_alias_NULL$$
};
var $module$$inline_336$$ = new $VKShareModule$$;
$tuna$ui$modules$__typeTable$$["vk-share"] = $module$$inline_336$$;
function $CommonMethod$$($name$$79$$) {
  $Method$$.call(this, $name$$79$$);
  this.$__request$ = new $Request$$;
  this.$__request$.method = "POST";
  this.$__request$.$__url$ = "/api/?method=" + $name$$79$$;
  var $self$$14$$ = this;
  this.$__request$.addEventListener("complete", function($event$$30$$, $data$$48$$) {
    $self$$14$$.$_handleResponse$($data$$48$$)
  })
}
$tuna$utils$extend$$($CommonMethod$$, $Method$$);
$CommonMethod$$.prototype.call = function $$CommonMethod$$$$call$($args$$7$$) {
  this.$__request$.setData($args$$7$$);
  this.$__request$.send()
};
$CommonMethod$$.prototype.$_handleResponse$ = function $$CommonMethod$$$$$_handleResponse$$($data$$49_response$$2$$) {
  var $result$$21$$ = $JSCompiler_alias_NULL$$;
  try {
    $result$$21$$ = JSON.parse($data$$49_response$$2$$)
  }catch($error$$4$$) {
    this.$dispatch$("error", $data$$49_response$$2$$)
  }
  $result$$21$$ !== $JSCompiler_alias_NULL$$ && ($data$$49_response$$2$$ = $result$$21$$.response, $data$$49_response$$2$$ !== $JSCompiler_alias_VOID$$ ? this.$dispatch$("result", $data$$49_response$$2$$) : this.$dispatch$("error", $result$$21$$.errors))
};
function $CommonFactory$$() {
}
$tuna$utils$implement$$($CommonFactory$$, $IMethodFactory$$);
$CommonFactory$$.prototype.$createMethod$ = function $$CommonFactory$$$$$createMethod$$($name$$80$$) {
  return new $CommonMethod$$($name$$80$$)
};
$tuna$rest$methodFactory$$.$__commonFactory$ = new $CommonFactory$$;
function $Dimension$$($data$$50$$) {
  this.id = "";
  this.$weight$ = 0;
  this.shape = "";
  this.$personsCount$ = this.$ratio$ = 0;
  $Record$$.call(this, $data$$50$$)
}
$tuna$utils$extend$$($Dimension$$, $Record$$);
$Dimension$$.prototype.$populate$ = function $$Dimension$$$$$populate$$($data$$51$$) {
  this.id = $data$$51$$.id;
  this.$weight$ = $data$$51$$.weight;
  this.shape = $data$$51$$.shape;
  this.$ratio$ = $data$$51$$.ratio;
  this.$personsCount$ = $data$$51$$.persons_count
};
$Dimension$$.prototype.$serialize$ = function $$Dimension$$$$$serialize$$() {
  return{weight:this.$weight$, shape:this.shape, ratio:this.$ratio$, personsCount:this.$personsCount$}
};
var $record$$inline_344$$ = new $Dimension$$;
$tuna$model$recordFactory$$.$__records$.dimension = $record$$inline_344$$;
function $City$$($data$$52$$) {
  this.name = this.id = "";
  $Record$$.call(this, $data$$52$$)
}
$tuna$utils$extend$$($City$$, $Record$$);
$City$$.prototype.$populate$ = function $$City$$$$$populate$$($data$$53$$) {
  this.id = $data$$53$$.id || $JSCompiler_alias_NULL$$;
  this.name = $data$$53$$.name || $JSCompiler_alias_NULL$$
};
$City$$.prototype.$serialize$ = function $$City$$$$$serialize$$() {
  return{id:this.id, name:this.name}
};
var $record$$inline_348$$ = new $City$$;
$tuna$model$recordFactory$$.$__records$.city = $record$$inline_348$$;
function $Bakery$$($data$$54$$) {
  this.name = "";
  this.city = $JSCompiler_alias_NULL$$;
  this.$deliveryPrice$ = 0;
  this.$decorationPrices$ = $JSCompiler_alias_NULL$$;
  this.$isNative$ = $JSCompiler_alias_FALSE$$;
  $Record$$.call(this, $data$$54$$)
}
$tuna$utils$extend$$($Bakery$$, $Record$$);
$Bakery$$.prototype.$populate$ = function $$Bakery$$$$$populate$$($data$$55_prices$$) {
  this.id = $data$$55_prices$$.id;
  this.name = $data$$55_prices$$.name;
  this.city = new $City$$($data$$55_prices$$.city);
  this.$deliveryPrice$ = $data$$55_prices$$.delivery_price;
  this.$decorationPrices$ = {};
  var $data$$55_prices$$ = $data$$55_prices$$.decoration_prices, $decorationId$$;
  for($decorationId$$ in $data$$55_prices$$) {
    this.$decorationPrices$[$decorationId$$] = $data$$55_prices$$[$decorationId$$].price
  }
};
$Bakery$$.prototype.$serialize$ = function $$Bakery$$$$$serialize$$() {
  return{id:this.id, city:this.city.$serialize$(), isNative:this.$isNative$, deliveryPrice:this.$deliveryPrice$}
};
var $record$$inline_352$$ = new $Bakery$$;
$tuna$model$recordFactory$$.$__records$.bakery = $record$$inline_352$$;
function $Cake$$() {
  this.$imageUrl$ = this.id = "";
  this.$dimension$ = this.$__markupJson$ = this.$markup$ = this.$photoUrl$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Cake$$, $Record$$);
$Cake$$.prototype.$populate$ = function $$Cake$$$$$populate$$($data$$56$$) {
  this.id = $data$$56$$.id;
  this.$imageUrl$ = $data$$56$$.image_url;
  this.$photoUrl$ = $data$$56$$.photo_url || $JSCompiler_alias_NULL$$;
  this.$markup$ = $data$$56$$.markup;
  this.$__markupJson$ = JSON.parse($data$$56$$.markup);
  this.$dimension$ = new $Dimension$$($data$$56$$.dimension)
};
$Cake$$.prototype.$serialize$ = function $$Cake$$$$$serialize$$() {
  return{id:this.id, imageUrl:this.$imageUrl$, photoUrl:this.$photoUrl$, dimension:this.$dimension$.$serialize$()}
};
var $record$$inline_356$$ = new $Cake$$;
$tuna$model$recordFactory$$.$__records$.cake = $record$$inline_356$$;
function $Order$$() {
  this.$recipe$ = this.$bakery$ = this.$cake$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($Order$$, $Record$$);
$Order$$.prototype.$serialize$ = function $$Order$$$$$serialize$$() {
  var $decorationPrice_price$$inline_360$$;
  $decorationPrice_price$$inline_360$$ = 0;
  if(this.$cake$ !== $JSCompiler_alias_NULL$$) {
    var $deco$$inline_361_recipePrice$$ = this.$cake$.$__markupJson$.content.deco !== $JSCompiler_alias_VOID$$ ? this.$cake$.$__markupJson$.content.deco : $JSCompiler_alias_NULL$$;
    if($deco$$inline_361_recipePrice$$ !== $JSCompiler_alias_NULL$$) {
      for(var $deliveryPrice_i$$inline_362$$ = 0, $l$$inline_363$$ = $deco$$inline_361_recipePrice$$.length;$deliveryPrice_i$$inline_362$$ < $l$$inline_363$$;) {
        $decorationPrice_price$$inline_360$$ += this.$bakery$.$decorationPrices$[$deco$$inline_361_recipePrice$$[$deliveryPrice_i$$inline_362$$].name], $deliveryPrice_i$$inline_362$$++
      }
    }
  }
  $deco$$inline_361_recipePrice$$ = this.$recipe$ !== $JSCompiler_alias_NULL$$ && this.$cake$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getWeightPrice$$(this.$recipe$, this.$cake$.$dimension$.$weight$) : 0;
  $deliveryPrice_i$$inline_362$$ = this.$bakery$ !== $JSCompiler_alias_NULL$$ ? this.$bakery$.$deliveryPrice$ : 0;
  return{cake:$tuna$model$serialize$$(this.$cake$), recipe:$tuna$model$serialize$$(this.$recipe$), bakery:$tuna$model$serialize$$(this.$bakery$), decorationPrice:$decorationPrice_price$$inline_360$$, recipePrice:$deco$$inline_361_recipePrice$$, deliveryPrice:$deliveryPrice_i$$inline_362$$, totalPrice:$decorationPrice_price$$inline_360$$ + $deco$$inline_361_recipePrice$$ + $deliveryPrice_i$$inline_362$$}
};
function $Payment$$() {
  this.$deliveryPrice$ = this.$recipePrice$ = this.$decoPrice$ = 0
}
$tuna$utils$extend$$($Payment$$, $Record$$);
$Payment$$.prototype.$serialize$ = function $$Payment$$$$$serialize$$() {
  return{decoPrice:this.$decoPrice$, recipePrice:this.$recipePrice$, deliveryPrice:this.$deliveryPrice$, totalPrice:this.$decoPrice$ + this.$recipePrice$ + this.$deliveryPrice$}
};
function $Recipe$$() {
  this.$imageUrl$ = this.$desc$ = this.name = this.id = "";
  this.$dimensionPrices$ = {}
}
$tuna$utils$extend$$($Recipe$$, $Record$$);
$Recipe$$.prototype.$populate$ = function $$Recipe$$$$$populate$$($data$$57$$) {
  this.id = $data$$57$$.id;
  this.$imageUrl$ = $data$$57$$.image_url;
  this.$desc$ = $data$$57$$.desc;
  this.name = $data$$57$$.name;
  this.$dimensionPrices$ = $data$$57$$.dimension_prices || $JSCompiler_alias_NULL$$
};
$Recipe$$.prototype.$serialize$ = function $$Recipe$$$$$serialize$$($cake$$) {
  var $result$$22$$ = {id:this.id, imageUrl:this.$imageUrl$, desc:this.$desc$, name:this.name};
  $cake$$ !== $JSCompiler_alias_VOID$$ && ($result$$22$$.price = $JSCompiler_StaticMethods_getWeightPrice$$(this, $cake$$.$dimension$.$weight$));
  return $result$$22$$
};
function $JSCompiler_StaticMethods_getWeightPrice$$($JSCompiler_StaticMethods_getWeightPrice$self$$, $weight$$) {
  var $weightKey$$ = $weight$$.toString().replace(".", "_");
  return $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$[$weightKey$$] !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$[$weightKey$$].price : 0
}
var $record$$inline_367$$ = new $Recipe$$;
$tuna$model$recordFactory$$.$__records$.recipe = $record$$inline_367$$;
function $User$$() {
  this.$network$ = this.$userpicUrl$ = this.city = this.name = this.id = ""
}
$tuna$utils$extend$$($User$$, $Record$$);
$User$$.prototype.$serialize$ = function $$User$$$$$serialize$$() {
  return{id:this.id, name:this.name, network:this.$network$, userpicUrl:this.$userpicUrl$}
};
function $Decoration$$($data$$58$$) {
  this.$imageUrl$ = this.name = "";
  this.group = 0;
  this.$isAutorotate$ = $JSCompiler_alias_FALSE$$;
  $Record$$.call(this, $data$$58$$)
}
$tuna$utils$extend$$($Decoration$$, $Record$$);
$Decoration$$.prototype.$populate$ = function $$Decoration$$$$$populate$$($data$$59$$) {
  this.id = $data$$59$$.id;
  this.name = $data$$59$$.name;
  this.group = $data$$59$$.group;
  this.$imageUrl$ = $data$$59$$.image_url;
  this.$isAutorotate$ = $data$$59$$.is_autorotate
};
$Decoration$$.prototype.$serialize$ = function $$Decoration$$$$$serialize$$() {
  return{name:this.id, description:this.name, url:this.$imageUrl$, autorotate:this.$isAutorotate$}
};
var $record$$inline_371$$ = new $Decoration$$;
$tuna$model$recordFactory$$.$__records$.decoration = $record$$inline_371$$;
var $model$bakeries$$ = new $ListResource$$("users.getBakeries", "bakery"), $model$cities$$ = new $ListResource$$, $model$cakes$$ = new $ListResource$$("cakes.getPromoted", "cake"), $model$dimensions$$ = new $ListResource$$("dimensions.get", "dimension"), $model$decorations$$ = new $ListResource$$("decorations.get", "decoration"), $model$recipes$$ = new $ListResource$$("recipes.get", "recipe"), $model$currentBakery$$ = new $ItemResource$$, $model$currentCake$$ = new $ItemResource$$, $model$currentRecipe$$ = 
new $ItemResource$$, $model$currentOrder$$ = new $ItemResource$$;
function $TitleController$$() {
  $tuna$view$PageViewController$$.call(this);
  this.$_modules$ = "template-transformer,carousel,vk-share,popup-button,button-group,selection-group".split(",")
}
$tuna$utils$extend$$($TitleController$$, $tuna$view$PageViewController$$);
$TitleController$$.prototype.$_initActions$ = function $$TitleController$$$$$_initActions$$() {
  var $cakeListTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "cake-list");
  $model$cakes$$.addEventListener("update", function($event$$31$$, $cakes$$) {
    $cakeListTransformer$$.$applyTransform$($tuna$model$serialize$$($cakes$$))
  });
  $model$cakes$$.load()
};
$TitleController$$.prototype.$canClose$ = function $$TitleController$$$$$canClose$$() {
  var $decorations$$ = $model$decorations$$.get();
  return $model$currentBakery$$.get() !== $JSCompiler_alias_NULL$$ && 0 < $decorations$$.length
};
var $controller$$inline_374$$ = new $TitleController$$;
$tuna$view$__controllerTable$$.title_step = $controller$$inline_374$$;
function $DesignerController$$() {
  $tuna$view$PageViewController$$.call(this);
  this.$__handleBakeryUpdate$ = $tuna$utils$bind$$(this.$__handleBakeryUpdate$, this);
  this.$__cakePreset$ = this.$__movie$ = this.$__cakeImage$ = this.$__designerSWF$ = $JSCompiler_alias_NULL$$;
  this.$_modules$ = ["data-image", "swf"]
}
$tuna$utils$extend$$($DesignerController$$, $tuna$view$PageViewController$$);
$JSCompiler_prototypeAlias$$ = $DesignerController$$.prototype;
$JSCompiler_prototypeAlias$$.$_initActions$ = function $$JSCompiler_prototypeAlias$$$$_initActions$$() {
  var $self$$15$$ = this;
  this.$__designerSWF$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "swf", "cake-designer");
  $model$dimensions$$.addEventListener("update", function() {
    $self$$15$$.$__designerSWF$.reset()
  })
};
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($cake$$1_data$$60$$) {
  $model$currentBakery$$.addEventListener("update", this.$__handleBakeryUpdate$);
  this.$__handleBakeryUpdate$();
  $cake$$1_data$$60$$ = $JSCompiler_StaticMethods_getItemById$$($model$cakes$$, $cake$$1_data$$60$$["cake-id"]);
  $cake$$1_data$$60$$ !== $JSCompiler_alias_NULL$$ ? (this.$__cakePreset$ = $cake$$1_data$$60$$.$markup$, this.$__movie$ !== $JSCompiler_alias_NULL$$ && this.$__movie$.loadCakePreset($cake$$1_data$$60$$.$markup$)) : this.$__cakePreset$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  $model$currentBakery$$.removeEventListener("update", this.$__handleBakeryUpdate$)
};
$JSCompiler_prototypeAlias$$.$__handleBakeryUpdate$ = function $$JSCompiler_prototypeAlias$$$$__handleBakeryUpdate$$() {
  var $bakery$$2$$ = $model$currentBakery$$.get();
  $bakery$$2$$ !== $JSCompiler_alias_NULL$$ && $model$dimensions$$.load({bakery_id:$bakery$$2$$.id})
};
function $JSCompiler_StaticMethods___initDesigner$$($JSCompiler_StaticMethods___initDesigner$self$$) {
  var $bakery$$3$$ = $model$currentBakery$$.get(), $weightsList$$ = [], $ratiosList$$ = [], $personsList$$ = [];
  $JSCompiler_StaticMethods_each$$($model$dimensions$$, function($dimension$$) {
    -1 === $tuna$utils$indexOf$$($dimension$$.$weight$, $weightsList$$) && ($weightsList$$.push($dimension$$.$weight$), $ratiosList$$.push($dimension$$.$ratio$), $personsList$$.push($dimension$$.$personsCount$))
  });
  var $decoSelectors$$ = [];
  $JSCompiler_StaticMethods_each$$($model$decorations$$, function($decoration$$) {
    $bakery$$3$$.$decorationPrices$[$decoration$$.id] !== $JSCompiler_alias_VOID$$ && ($decoSelectors$$[$decoration$$.group] === $JSCompiler_alias_VOID$$ && ($decoSelectors$$[$decoration$$.group] = []), $decoSelectors$$[$decoration$$.group].push($decoration$$.$serialize$()))
  });
  0 < $weightsList$$.length && $JSCompiler_StaticMethods___initDesigner$self$$.$__movie$.initialize(JSON.stringify({weightsList:$weightsList$$, ratiosList:$ratiosList$$, personsList:$personsList$$, decoSelectors:$decoSelectors$$}), "round", $ratiosList$$[0])
}
$JSCompiler_prototypeAlias$$.$confirmShapeChange$ = function $$JSCompiler_prototypeAlias$$$$confirmShapeChange$$($shape$$) {
  var $self$$16$$ = this, $weight$$1$$ = this.$__movie$.getCakeWeight();
  0 < $model$dimensions$$.find(function($dimension$$1$$) {
    return $dimension$$1$$.$weight$ === $weight$$1$$ && $dimension$$1$$.shape === $shape$$
  }).length ? $tuna$ui$popups$confirm$$(function($result$$23$$) {
    $result$$23$$ && $self$$16$$.$__movie$.changeShape($shape$$)
  }) : $tuna$ui$popups$alert$$("\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0435\u0441\u0430!")
};
$JSCompiler_prototypeAlias$$.$onDecoElementsLoaded$ = function $$JSCompiler_prototypeAlias$$$$onDecoElementsLoaded$$() {
  this.$__cakePreset$ !== $JSCompiler_alias_NULL$$ && this.$__movie$.loadCakePreset(this.$__cakePreset$)
};
$JSCompiler_prototypeAlias$$.$onFlashReady$ = function $$JSCompiler_prototypeAlias$$$$onFlashReady$$() {
  var $JSCompiler_StaticMethods_getMovie$self$$inline_377$$ = this.$__designerSWF$;
  $JSCompiler_StaticMethods_getMovie$self$$inline_377$$.$__movieId$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getMovie$self$$inline_377$$.$__movie$ === $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getMovie$self$$inline_377$$.$__movie$ = swfobject.getObjectById($JSCompiler_StaticMethods_getMovie$self$$inline_377$$.$__movieId$));
  this.$__movie$ = $JSCompiler_StaticMethods_getMovie$self$$inline_377$$.$__movie$;
  $JSCompiler_StaticMethods___initDesigner$$(this)
};
$JSCompiler_prototypeAlias$$.$canClose$ = function $$JSCompiler_prototypeAlias$$$$canClose$$($dimension$$2_nextStep$$) {
  if(this.$__movie$ !== $JSCompiler_alias_NULL$$) {
    var $data$$61$$ = this.$__movie$.getCakeData();
    "order" === $dimension$$2_nextStep$$ && ($dimension$$2_nextStep$$ = $JSCompiler_StaticMethods_findOne$$(function($dimension$$3$$) {
      return $dimension$$3$$.$weight$ === $data$$61$$.weight && $dimension$$3$$.shape === $data$$61$$.shape
    }), $dimension$$2_nextStep$$ !== $JSCompiler_alias_NULL$$ && ($data$$61$$.dimension_id = $dimension$$2_nextStep$$.id, $tuna$rest$call$$("cakes.add", $data$$61$$, function($cake$$2$$) {
      $model$currentCake$$.set($cake$$2$$)
    }, "cake")));
    this.$__cakeImage$ === $JSCompiler_alias_NULL$$ && (this.$__cakeImage$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "data-image", "cake-image"));
    this.$__cakeImage$.setData($data$$61$$.image);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
var $controller$$ = new $DesignerController$$;
window.onFlashReady = $tuna$utils$bind$$($controller$$.$onFlashReady$, $controller$$);
window.confirmShapeChange = $tuna$utils$bind$$($controller$$.$confirmShapeChange$, $controller$$);
window.openMessageBox = $tuna$ui$popups$alert$$;
window.onDecoElementsLoaded = $tuna$utils$bind$$($controller$$.$onDecoElementsLoaded$, $controller$$);
$tuna$view$__controllerTable$$.designer_step = $controller$$;
function $OrderController$$() {
  $tuna$view$PageViewController$$.call(this);
  this.$__orderTransformer$ = $JSCompiler_alias_NULL$$;
  this.$__handleBakeryUpdate$ = $tuna$utils$bind$$(this.$__handleBakeryUpdate$, this);
  this.$__updateOrder$ = $tuna$utils$bind$$(this.$__updateOrder$, this);
  this.$_modules$ = "template-transformer,data-image-copy,datepicker,form,popup,popup-button,button-group".split(",")
}
$tuna$utils$extend$$($OrderController$$, $tuna$view$PageViewController$$);
$JSCompiler_prototypeAlias$$ = $OrderController$$.prototype;
$JSCompiler_prototypeAlias$$.$_initActions$ = function $$JSCompiler_prototypeAlias$$$$_initActions$$() {
  function $updateRecipesList$$() {
    var $recipes$$ = $model$recipes$$.get(), $cake$$3$$ = $model$currentCake$$.get();
    $recipes$$ !== $JSCompiler_alias_NULL$$ && $cake$$3$$ !== $JSCompiler_alias_NULL$$ && $recipesTransformer$$.$applyTransform$($tuna$model$serialize$$($recipes$$, $cake$$3$$))
  }
  this.$__orderTransformer$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "order-form");
  var $self$$17$$ = this, $recipePopup$$ = $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup-button", "recipe-popup"));
  $recipePopup$$.open();
  var $recipesTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "recipes-list"), $recipesForm$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "form", "recipes-list");
  $recipePopup$$.addEventListener("popup-apply", function() {
    var $recipe_recipeIds$$ = $recipesForm$$.$getValue$("recipe_id"), $recipe_recipeIds$$ = $JSCompiler_StaticMethods_getItemById$$($model$recipes$$, $recipe_recipeIds$$.shift());
    $model$currentRecipe$$.set($recipe_recipeIds$$)
  });
  var $orderForm$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "form", "order-form");
  $orderForm$$.addEventListener("result", function() {
    $self$$17$$.$_navigation$.navigate("result")
  });
  $JSCompiler_StaticMethods_setValue$$($orderForm$$, "client_network", 1);
  var $popupRecipe$$ = $JSCompiler_alias_NULL$$, $recipeInfoPopup$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup", "recipe-info-popup"), $recipeInfoTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "recipe-info-popup");
  $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button-group", "recipes-list").addEventListener("show", function($event$$32$$, $button$$5$$) {
    $popupRecipe$$ = $JSCompiler_StaticMethods_getItemById$$($model$recipes$$, $JSCompiler_StaticMethods_getStringOption$$($button$$5$$, "recipe-id"));
    $popupRecipe$$ !== $JSCompiler_alias_NULL$$ && ($recipeInfoTransformer$$.$applyTransform$($popupRecipe$$.$serialize$()), $recipeInfoPopup$$.open(), $recipePopup$$.close())
  });
  $recipeInfoPopup$$.addEventListener("popup-apply", function() {
    $JSCompiler_StaticMethods_setValue$$($recipesForm$$, "recipe_id", $popupRecipe$$.id);
    $recipePopup$$.open()
  });
  $recipeInfoPopup$$.addEventListener("popup-close", function() {
    $recipePopup$$.open()
  });
  $model$recipes$$.addEventListener("update", $updateRecipesList$$);
  $model$currentCake$$.addEventListener("update", $updateRecipesList$$)
};
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$() {
  $model$currentRecipe$$.clear();
  $model$currentBakery$$.addEventListener("update", this.$__handleBakeryUpdate$);
  $model$currentCake$$.addEventListener("update", this.$__updateOrder$);
  $model$currentRecipe$$.addEventListener("update", this.$__updateOrder$);
  this.$__updateOrder$();
  var $bakery$$4$$ = $model$currentBakery$$.get();
  $bakery$$4$$ !== $JSCompiler_alias_NULL$$ && $model$recipes$$.load({bakery_id:$bakery$$4$$.id})
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  $model$currentBakery$$.removeEventListener("update", this.$__handleBakeryUpdate$);
  $model$currentCake$$.addEventListener("update", this.$__updateOrder$);
  $model$currentRecipe$$.addEventListener("update", this.$__updateOrder$)
};
$JSCompiler_prototypeAlias$$.$__handleBakeryUpdate$ = function $$JSCompiler_prototypeAlias$$$$__handleBakeryUpdate$$() {
  var $bakery$$5$$ = $model$currentBakery$$.get();
  $bakery$$5$$ !== $JSCompiler_alias_NULL$$ && $model$recipes$$.load({bakery_id:$bakery$$5$$.id});
  this.$_navigation$.navigate("title")
};
$JSCompiler_prototypeAlias$$.$__updateOrder$ = function $$JSCompiler_prototypeAlias$$$$__updateOrder$$() {
  var $order$$ = $model$currentOrder$$.get();
  $order$$ === $JSCompiler_alias_NULL$$ && ($order$$ = new $Order$$, $model$currentOrder$$.set($order$$));
  $order$$.$cake$ = $model$currentCake$$.get();
  $order$$.$bakery$ = $model$currentBakery$$.get();
  $order$$.$recipe$ = $model$currentRecipe$$.get();
  this.$__orderTransformer$.$applyTransform$($tuna$model$serialize$$($order$$))
};
var $controller$$inline_383$$ = new $OrderController$$;
$tuna$view$__controllerTable$$.order_step = $controller$$inline_383$$;
function $ResultController$$() {
  $tuna$view$PageViewController$$.call(this);
  this.$_modules$ = ["data-image-copy"]
}
$tuna$utils$extend$$($ResultController$$, $tuna$view$PageViewController$$);
var $controller$$inline_386$$ = new $ResultController$$;
$tuna$view$__controllerTable$$.result_step = $controller$$inline_386$$;
function $VKShareController$$() {
  $tuna$view$PageViewController$$.call(this);
  this.$__cakeImage$ = this.$__downloadDataInput$ = $JSCompiler_alias_NULL$$;
  this.$_modules$ = ["input-filter", "data-image-copy", "popup-button", "button-group"]
}
$tuna$utils$extend$$($VKShareController$$, $tuna$view$PageViewController$$);
$VKShareController$$.prototype.$_initActions$ = function $$VKShareController$$$$$_initActions$$() {
  this.$__downloadDataInput$ = $tuna$dom$selectOne$$("#download_data_input");
  this.$__cakeImage$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "data-image-copy", "cake-image");
  var $inputFilter$$ = $JSCompiler_StaticMethods_getOneModuleInstance$$(this.$_container$, "input-filter");
  $tuna$rest$call$$("social.friends.get", $JSCompiler_alias_NULL$$, function($result$$24$$) {
    $inputFilter$$.setData($tuna$model$serialize$$($result$$24$$))
  });
  var $self$$18$$ = this;
  $JSCompiler_StaticMethods_getOneModuleInstance$$(this.$_container$, "button-group").addEventListener("send", function($event$$33$$, $button$$6$$) {
    $tuna$rest$call$$("social.wall.post", {image:$self$$18$$.$__cakeImage$.getData(), user_id:$JSCompiler_StaticMethods_getStringOption$$($button$$6$$, "user-id")}, function() {
      $tuna$ui$popups$alert$$("\u0422\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d!")
    })
  })
};
$VKShareController$$.prototype.open = function $$VKShareController$$$$open$() {
  this.$__cakeImage$ !== $JSCompiler_alias_NULL$$ && this.$__downloadDataInput$ !== $JSCompiler_alias_NULL$$ && (this.$__downloadDataInput$.value = this.$__cakeImage$.getData())
};
var $controller$$inline_389$$ = new $VKShareController$$;
$tuna$view$__controllerTable$$.share_step = $controller$$inline_389$$;
function $MainController$$() {
  $ViewController$$.call(this);
  this.$_modules$ = ["navigation", "popup-button", "template-transformer", "autocomplete", "yandex-share"]
}
$tuna$utils$extend$$($MainController$$, $ViewController$$);
$MainController$$.prototype.$_initActions$ = function $$MainController$$$$$_initActions$$() {
  var $cityAutocomplete$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "autocomplete", "city-popup");
  $JSCompiler_StaticMethods_setItemSerializeCallback$$($cityAutocomplete$$, function($city$$) {
    return $city$$.name
  });
  $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup-button", "city-popup")).addEventListener("popup-apply", function() {
    var $city$$1$$ = $cityAutocomplete$$.$__selectedData$;
    $city$$1$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$1$$)
  });
  var $bakeryTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "current-bakery");
  $model$currentBakery$$.addEventListener("update", function($event$$34$$, $bakery$$6$$) {
    $bakeryTransformer$$.$applyTransform$($tuna$model$serialize$$($bakery$$6$$))
  });
  $model$cities$$.addEventListener("update", function($event$$35$$, $cities$$) {
    $cityAutocomplete$$.setData($cities$$)
  });
  $tuna$rest$call$$("cities.getCurrent", $JSCompiler_alias_NULL$$, function($city$$2$$) {
    function $listener$$35$$() {
      $model$bakeries$$.removeEventListener("update", $listener$$35$$);
      var $ids$$ = [];
      $model$cities$$.set($model$bakeries$$.map(function($bakery$$7$$) {
        $bakery$$7$$.$isNative$ = $bakery$$7$$.city.name === $city$$2$$.name;
        var $id$$5$$ = $bakery$$7$$.city.id;
        return-1 === $tuna$utils$indexOf$$($id$$5$$, $ids$$) ? ($ids$$.push($id$$5$$), $bakery$$7$$.city) : $JSCompiler_alias_NULL$$
      }));
      $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$2$$)
    }
    $model$bakeries$$.addEventListener("update", $listener$$35$$);
    $model$bakeries$$.load()
  }, "city");
  $model$decorations$$.load()
};
function $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$3$$) {
  var $bakeries$$ = $model$bakeries$$.find(function($bakery$$8$$) {
    return $bakery$$8$$.city.name === $city$$3$$.name
  });
  0 === $bakeries$$.length && ($bakeries$$ = $model$bakeries$$.get());
  $model$currentBakery$$.set($bakeries$$[Math.floor($bakeries$$.length * Math.random())])
}
$tuna$view$__mainController$$ = new $MainController$$;
function $VKMethod$$($name$$81$$) {
  $Method$$.call(this, $name$$81$$);
  this.$_handleResponse$ = $tuna$utils$bind$$(this.$_handleResponse$, this)
}
$tuna$utils$extend$$($VKMethod$$, $Method$$);
$VKMethod$$.prototype.call = function $$VKMethod$$$$call$($args$$8$$) {
  VK.api(this.$_name$, this.$_completeArguments$($args$$8$$), this.$_handleResponse$)
};
$VKMethod$$.prototype.$_completeArguments$ = function $$VKMethod$$$$$_completeArguments$$($args$$9$$) {
  return $args$$9$$
};
$VKMethod$$.prototype.$_handleResponse$ = function $$VKMethod$$$$$_handleResponse$$($data$$62$$) {
  $data$$62$$.response !== $JSCompiler_alias_VOID$$ ? this.$dispatch$("result", this.$_mapResponse$($data$$62$$.response)) : this.$dispatch$("error", $data$$62$$)
};
$VKMethod$$.prototype.$_mapResponse$ = function $$VKMethod$$$$$_mapResponse$$() {
  return $JSCompiler_alias_NULL$$
};
function $GetList$$() {
  $VKMethod$$.call(this, "friends.get")
}
$tuna$utils$extend$$($GetList$$, $VKMethod$$);
$GetList$$.prototype.$_completeArguments$ = function $$GetList$$$$$_completeArguments$$() {
  return{fields:"uid,first_name,last_name,photo"}
};
$GetList$$.prototype.$_mapResponse$ = function $$GetList$$$$$_mapResponse$$($response$$4$$) {
  for(var $result$$25$$ = [], $i$$52$$ = 0, $l$$36$$ = $response$$4$$.length, $value$$61$$ = $JSCompiler_alias_NULL$$, $user$$ = $JSCompiler_alias_NULL$$;$i$$52$$ < $l$$36$$;) {
    $value$$61$$ = $response$$4$$[$i$$52$$], $user$$ = new $User$$, $user$$.id = $value$$61$$.uid, $user$$.name = $value$$61$$.first_name + " " + $value$$61$$.last_name, $user$$.$userpicUrl$ = $value$$61$$.photo, $result$$25$$.push($user$$), $i$$52$$++
  }
  return $result$$25$$
};
var $method$$inline_395$$ = new $GetList$$;
$tuna$rest$methodFactory$$.$__methods$["social.friends.get"] = $method$$inline_395$$;
function $Post$$() {
  $CommonMethod$$.call(this, "social.vk.uploadImage");
  this.$__imageData$ = this.$__userID$ = $JSCompiler_alias_NULL$$;
  this.$__handleSavePhoto$ = $tuna$utils$bind$$(this.$__handleSavePhoto$, this);
  this.$__handleWallPost$ = $tuna$utils$bind$$(this.$__handleWallPost$, this);
  this.$__handleUploadURL$ = $tuna$utils$bind$$(this.$__handleUploadURL$, this)
}
$tuna$utils$extend$$($Post$$, $CommonMethod$$);
$JSCompiler_prototypeAlias$$ = $Post$$.prototype;
$JSCompiler_prototypeAlias$$.call = function $$JSCompiler_prototypeAlias$$$call$($args$$11_params$$) {
  $args$$11_params$$ !== $JSCompiler_alias_VOID$$ && (this.$__userID$ = $args$$11_params$$.user_id || $JSCompiler_alias_NULL$$, this.$__imageData$ = $args$$11_params$$.image || $JSCompiler_alias_NULL$$);
  $args$$11_params$$ = {};
  this.$__userID$ !== $JSCompiler_alias_NULL$$ && ($args$$11_params$$.uid = this.$__userID$);
  VK.api("photos.getWallUploadServer", $args$$11_params$$, this.$__handleUploadURL$)
};
$JSCompiler_prototypeAlias$$.$__handleUploadURL$ = function $$JSCompiler_prototypeAlias$$$$__handleUploadURL$$($result$$26$$) {
  $result$$26$$.response !== $JSCompiler_alias_VOID$$ ? ($result$$26$$.response.image = this.$__imageData$, $CommonMethod$$.prototype.call.call(this, $result$$26$$.response)) : this.$dispatch$("error", $result$$26$$)
};
$JSCompiler_prototypeAlias$$.$_handleResponse$ = function $$JSCompiler_prototypeAlias$$$$_handleResponse$$($data$$63$$) {
  var $result$$27$$ = $JSCompiler_alias_NULL$$;
  try {
    $result$$27$$ = JSON.parse($data$$63$$)
  }catch($error$$5$$) {
  }
  $result$$27$$ !== $JSCompiler_alias_NULL$$ && $result$$27$$.response !== $JSCompiler_alias_VOID$$ ? VK.api("photos.saveWallPhoto", $result$$27$$.response, this.$__handleSavePhoto$) : this.$dispatch$("error", $data$$63$$)
};
$JSCompiler_prototypeAlias$$.$__handleSavePhoto$ = function $$JSCompiler_prototypeAlias$$$$__handleSavePhoto$$($photo_result$$28$$) {
  if($photo_result$$28$$.response !== $JSCompiler_alias_VOID$$ && 0 < $photo_result$$28$$.response.length) {
    var $photo_result$$28$$ = $photo_result$$28$$.response[0], $userID$$ = this.$__userID$;
    $userID$$ === $JSCompiler_alias_NULL$$ && ($userID$$ = $photo_result$$28$$.owner_id);
    VK.api("wall.post", {owner_id:$userID$$, message:"\u0421\u043c\u043e\u0442\u0440\u0438, \u043a\u0430\u043a\u043e\u0439 \u0443 \u043c\u0435\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0441\u044f \u0442\u043e\u0440\u0442!", attachments:$photo_result$$28$$.id}, this.$__handleWallPost$)
  }else {
    this.$dispatch$("error", $photo_result$$28$$)
  }
};
$JSCompiler_prototypeAlias$$.$__handleWallPost$ = function $$JSCompiler_prototypeAlias$$$$__handleWallPost$$($result$$29$$) {
  $result$$29$$.response !== $JSCompiler_alias_VOID$$ ? this.$dispatch$("result", $JSCompiler_alias_TRUE$$) : this.$dispatch$("error", $result$$29$$)
};
var $method$$inline_399$$ = new $Post$$;
$tuna$rest$methodFactory$$.$__methods$["social.wall.post"] = $method$$inline_399$$;
})();
