(function(){var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
var $JSCompiler_prototypeAlias$$, $tuna$IS_IE$$ = !!eval("'\v' == 'v'");
function $tuna$utils$extend$$($Class$$, $Parent$$) {
  function $Link$$() {
  }
  $Link$$.prototype = $Parent$$.prototype;
  $Class$$.prototype = new $Link$$;
  $Class$$.prototype.constructor = $Class$$
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
function $tuna$utils$__splitUrlData$$($object$$2$$, $path$$2$$) {
  var $result$$1$$ = [];
  $path$$2$$ === $JSCompiler_alias_VOID$$ && ($path$$2$$ = []);
  if($object$$2$$ !== $JSCompiler_alias_NULL$$ && !($object$$2$$ instanceof Function)) {
    if($object$$2$$ instanceof Object) {
      for(var $key$$14$$ in $object$$2$$) {
        $result$$1$$ = $result$$1$$.concat($tuna$utils$__splitUrlData$$($object$$2$$[$key$$14$$], 0 === $path$$2$$.length ? [$key$$14$$] : ($path$$2$$.join(",") + "," + $key$$14$$).split(",")))
      }
    }else {
      $result$$1$$ = [$path$$2$$.shift() + (0 < $path$$2$$.length ? "[" + $path$$2$$.join("][") + "]=" : "=") + encodeURIComponent("" + $object$$2$$)]
    }
  }
  return $result$$1$$
}
function $tuna$utils$urlDecode$$() {
  for(var $result$$2$$ = {}, $parsedSearch_vars$$ = location.search.substr(1).split("][").join("|"), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("[").join("|"), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("]").join(""), $parsedSearch_vars$$ = $parsedSearch_vars$$.split("&"), $i$$2$$ = 0, $l$$1$$ = $parsedSearch_vars$$.length, $pair$$ = $JSCompiler_alias_NULL$$, $path$$3$$ = $JSCompiler_alias_NULL$$, $pathToken$$ = $JSCompiler_alias_NULL$$, $context$$1$$ = $JSCompiler_alias_NULL$$;$i$$2$$ < 
  $l$$1$$;) {
    $pair$$ = $parsedSearch_vars$$[$i$$2$$].split("=");
    $path$$3$$ = $pair$$.shift().split("|");
    for($context$$1$$ = $result$$2$$;0 < $path$$3$$.length;) {
      $pathToken$$ = $path$$3$$.shift(), 0 === $path$$3$$.length ? $context$$1$$[$pathToken$$] = decodeURIComponent($pair$$.shift()) : $context$$1$$[$pathToken$$] === $JSCompiler_alias_VOID$$ && ($context$$1$$[$pathToken$$] = {}), $context$$1$$ = $context$$1$$[$pathToken$$]
    }
    $i$$2$$++
  }
  return $result$$2$$
}
function $Config$$() {
  this.$__data$ = $JSCompiler_alias_NULL$$
}
$Config$$.prototype.init = function $$Config$$$$init$($data$$19$$) {
  this.$__data$ = $data$$19$$
};
$Config$$.prototype.get = function $$Config$$$$get$($key$$15$$, $subKey$$) {
  return this.$__data$[$key$$15$$] !== $JSCompiler_alias_VOID$$ ? $subKey$$ !== $JSCompiler_alias_VOID$$ ? this.$__data$[$key$$15$$][$subKey$$] || $JSCompiler_alias_NULL$$ : this.$__data$[$key$$15$$] : $JSCompiler_alias_NULL$$
};
var $tuna$utils$config$$ = new $Config$$;
function $tuna$dom$select$$($selector$$, $opt_context$$5$$) {
  return $tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$($selector$$, $opt_context$$5$$) : []
}
function $tuna$dom$selectOne$$($selector$$1$$, $opt_context$$6$$) {
  if($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$) {
    var $result$$3$$ = $tuna$dom$__selectorEngine$$($selector$$1$$, $opt_context$$6$$);
    if(0 < $result$$3$$.length) {
      return $result$$3$$[0]
    }
  }
  return $JSCompiler_alias_NULL$$
}
var $tuna$dom$__selectorEngine$$ = $JSCompiler_alias_NULL$$;
function $tuna$dom$addEventListener$$($element$$9$$, $listenerId_type$$48$$, $handler$$3$$) {
  if($element$$9$$.addEventListener !== $JSCompiler_alias_VOID$$) {
    $element$$9$$.addEventListener($listenerId_type$$48$$, $handler$$3$$, $JSCompiler_alias_FALSE$$)
  }else {
    if($element$$9$$.attachEvent !== $JSCompiler_alias_VOID$$) {
      var $eventName$$1$$ = "on" + $listenerId_type$$48$$;
      $element$$9$$[$eventName$$1$$] === $JSCompiler_alias_VOID$$ ? $tuna$dom$__addCustomIEListener$$($element$$9$$, $listenerId_type$$48$$, $handler$$3$$) : ($element$$9$$.$__ieTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$9$$.$__ieTargetId$ = "element_" + $tuna$dom$__lastElementId$$++), $listenerId_type$$48$$ = $element$$9$$.$__ieTargetId$ + "_" + $listenerId_type$$48$$, $handler$$3$$[$listenerId_type$$48$$] = function $$handler$$3$$$$listenerId_type$$48$$$($event$$4$$) {
        $handler$$3$$.call($element$$9$$, $event$$4$$)
      }, $element$$9$$.attachEvent($eventName$$1$$, $handler$$3$$[$listenerId_type$$48$$]))
    }
  }
}
function $tuna$dom$addOneEventListener$$($element$$11$$, $type$$50$$, $handler$$5$$) {
  $element$$11$$.$__onceTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$11$$.$__onceTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$2$$ = $element$$11$$.$__onceTargetId$ + "_" + $type$$50$$;
  $handler$$5$$[$listenerId$$2$$] = function $$handler$$5$$$$listenerId$$2$$$($event$$5_listenerId$$inline_22$$) {
    $handler$$5$$.call($element$$11$$, $event$$5_listenerId$$inline_22$$);
    $event$$5_listenerId$$inline_22$$ = $element$$11$$.$__onceTargetId$ + "_" + $type$$50$$;
    if($handler$$5$$[$event$$5_listenerId$$inline_22$$] !== $JSCompiler_alias_VOID$$) {
      var $handler$$inline_437$$ = $handler$$5$$[$event$$5_listenerId$$inline_22$$];
      if($element$$11$$.removeEventListener !== $JSCompiler_alias_VOID$$) {
        $element$$11$$.removeEventListener($type$$50$$, $handler$$inline_437$$, $JSCompiler_alias_FALSE$$)
      }else {
        if($element$$11$$.detachEvent !== $JSCompiler_alias_VOID$$) {
          if($element$$11$$["on" + $type$$50$$] === $JSCompiler_alias_VOID$$) {
            var $handlers$$inline_438_listenerId$$inline_440$$ = $element$$11$$["__" + $type$$50$$];
            if($handlers$$inline_438_listenerId$$inline_440$$ !== $JSCompiler_alias_VOID$$) {
              for(var $i$$inline_439$$ = $handlers$$inline_438_listenerId$$inline_440$$.length - 1;0 <= $i$$inline_439$$;) {
                $handlers$$inline_438_listenerId$$inline_440$$[$i$$inline_439$$] === $handler$$inline_437$$ && $handlers$$inline_438_listenerId$$inline_440$$.splice($i$$inline_439$$, 1), $i$$inline_439$$--
              }
            }
          }else {
            $handlers$$inline_438_listenerId$$inline_440$$ = $element$$11$$.$__ieTargetId$ + "_" + $type$$50$$, $handler$$inline_437$$[$handlers$$inline_438_listenerId$$inline_440$$] !== $JSCompiler_alias_VOID$$ && ($element$$11$$.detachEvent("on" + $type$$50$$, $handler$$inline_437$$[$handlers$$inline_438_listenerId$$inline_440$$]), delete $handler$$inline_437$$[$handlers$$inline_438_listenerId$$inline_440$$])
          }
        }
      }
      delete $handler$$5$$[$event$$5_listenerId$$inline_22$$]
    }
  };
  $tuna$dom$addEventListener$$($element$$11$$, $type$$50$$, $handler$$5$$[$listenerId$$2$$])
}
function $tuna$dom$addChildEventListener$$($element$$13$$, $selector$$3$$, $type$$52$$, $handler$$7$$) {
  $element$$13$$.$__childTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$13$$.$__childTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$4$$ = $element$$13$$.$__childTargetId$ + "_" + $type$$52$$ + "_" + $selector$$3$$;
  $handler$$7$$[$listenerId$$4$$] = function $$handler$$7$$$$listenerId$$4$$$($event$$6$$) {
    var $target$$36$$ = $event$$6$$.target || $event$$6$$.srcElement, $child$$1$$ = $JSCompiler_alias_NULL$$, $child$$1$$ = 0 === ($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches($selector$$3$$, [$target$$36$$]) : []).length ? $tuna$dom$getParentMatches$$($target$$36$$, $selector$$3$$, $element$$13$$) : $target$$36$$;
    $child$$1$$ !== $JSCompiler_alias_NULL$$ && $handler$$7$$.call($child$$1$$, $event$$6$$)
  };
  $tuna$dom$addEventListener$$($element$$13$$, $type$$52$$, $handler$$7$$[$listenerId$$4$$])
}
function $tuna$dom$__addCustomIEListener$$($element$$15$$, $type$$54$$, $handler$$9$$) {
  $element$$15$$.$__customListener$ === $JSCompiler_alias_VOID$$ && ($element$$15$$.$__customListener$ = function $$element$$15$$$$__customListener$$($event$$7$$) {
    if($event$$7$$.$__type$ !== $JSCompiler_alias_VOID$$) {
      var $handlers_type$$55$$ = $event$$7$$.$__type$;
      delete $event$$7$$.$__type$;
      var $handlers_type$$55$$ = $element$$15$$["__" + $handlers_type$$55$$], $i$$3$$;
      for($i$$3$$ in $handlers_type$$55$$) {
        $handlers_type$$55$$[$i$$3$$].call($element$$15$$, $event$$7$$)
      }
    }
  }, $element$$15$$.attachEvent("onhelp", $element$$15$$.$__customListener$));
  $element$$15$$["__" + $type$$54$$] === $JSCompiler_alias_VOID$$ && ($element$$15$$["__" + $type$$54$$] = []);
  $element$$15$$["__" + $type$$54$$].push($handler$$9$$)
}
var $tuna$dom$__lastElementId$$ = 0;
function $tuna$dom$preventDefault$$($event$$9$$) {
  $event$$9$$.preventDefault !== $JSCompiler_alias_VOID$$ ? $event$$9$$.preventDefault() : $event$$9$$.returnValue = $JSCompiler_alias_FALSE$$
}
function $tuna$dom$stopPropagation$$($event$$10$$) {
  $event$$10$$.stopPropagation !== $JSCompiler_alias_VOID$$ ? $event$$10$$.stopPropagation() : $event$$10$$.cancelBubble = $JSCompiler_alias_TRUE$$
}
function $tuna$dom$getParentMatches$$($element$$18_parent$$2$$, $selector$$5$$, $opt_context$$7$$) {
  for($element$$18_parent$$2$$ = $element$$18_parent$$2$$.parentNode;$element$$18_parent$$2$$ !== $JSCompiler_alias_NULL$$ && $element$$18_parent$$2$$ !== $opt_context$$7$$ && 0 === ($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches($selector$$5$$, [$element$$18_parent$$2$$]) : []).length;) {
    $element$$18_parent$$2$$ = $element$$18_parent$$2$$.parentNode
  }
  return $element$$18_parent$$2$$ === $opt_context$$7$$ ? $JSCompiler_alias_NULL$$ : $element$$18_parent$$2$$
}
function $tuna$dom$getParentWithClass$$($element$$19_parent$$3$$, $className$$1$$, $opt_context$$8$$) {
  for($element$$19_parent$$3$$ = $element$$19_parent$$3$$.parentNode;$element$$19_parent$$3$$ !== $JSCompiler_alias_NULL$$ && $element$$19_parent$$3$$ !== $opt_context$$8$$ && !$tuna$dom$hasClass$$($element$$19_parent$$3$$, $className$$1$$);) {
    $element$$19_parent$$3$$ = $element$$19_parent$$3$$.parentNode
  }
  return $element$$19_parent$$3$$ === $opt_context$$8$$ ? $JSCompiler_alias_NULL$$ : $element$$19_parent$$3$$
}
function $tuna$dom$hasClass$$($element$$20$$, $className$$2$$) {
  return $element$$20$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$20$$.classList.contains($className$$2$$) : $element$$20$$.className !== $JSCompiler_alias_VOID$$ ? $element$$20$$.className.match(RegExp("(\\s|^)" + $className$$2$$ + "(\\s|$)")) !== $JSCompiler_alias_NULL$$ : $JSCompiler_alias_FALSE$$
}
function $tuna$dom$addClass$$($element$$21$$, $className$$3$$) {
  $element$$21$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$21$$.classList.add($className$$3$$) : $tuna$dom$hasClass$$($element$$21$$, $className$$3$$) || ($element$$21$$.className += " " + $className$$3$$)
}
function $tuna$dom$removeClass$$($element$$22$$, $className$$4$$) {
  $element$$22$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$22$$.classList.remove($className$$4$$) : $tuna$dom$hasClass$$($element$$22$$, $className$$4$$) && ($element$$22$$.className = $element$$22$$.className.replace(RegExp("(\\s|^)" + $className$$4$$ + "(\\s|$)"), " "))
}
function $tuna$dom$setClassExist$$($element$$23$$, $className$$5$$, $isExist$$) {
  !$isExist$$ && $tuna$dom$hasClass$$($element$$23$$, $className$$5$$) ? $tuna$dom$removeClass$$($element$$23$$, $className$$5$$) : $isExist$$ && !$tuna$dom$hasClass$$($element$$23$$, $className$$5$$) && $tuna$dom$addClass$$($element$$23$$, $className$$5$$)
}
;function $tuna$events$BasicEvent$$($target$$37$$, $type$$58$$, $opt_isBubbling$$) {
  this.$_target$ = $target$$37$$;
  this.$_type$ = $type$$58$$;
  this.$_isBubbling$ = !!$opt_isBubbling$$;
  this.$_isImmediateStopped$ = this.$_isStopped$ = this.$_isCanceled$ = $JSCompiler_alias_FALSE$$
}
$tuna$events$BasicEvent$$.prototype.$getTarget$ = $JSCompiler_get$$("$_target$");
$tuna$events$BasicEvent$$.prototype.preventDefault = function $$tuna$events$BasicEvent$$$$preventDefault$() {
  this.$_isCanceled$ = $JSCompiler_alias_TRUE$$
};
$tuna$events$BasicEvent$$.prototype.stopPropagation = function $$tuna$events$BasicEvent$$$$stopPropagation$() {
  this.$_isStopped$ = $JSCompiler_alias_TRUE$$
};
function $tuna$events$IEventDispatcher$$() {
}
$tuna$events$IEventDispatcher$$.prototype.$dispatch$ = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.addEventListener = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.removeEventListener = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.$hasEventListener$ = $JSCompiler_emptyFn$$();
function $tuna$events$EventDispatcher$$($opt_propagationParent$$) {
  this.$_propagationParent$ = $opt_propagationParent$$ || $JSCompiler_alias_NULL$$;
  this.$_listeners$ = {}
}
$tuna$events$EventDispatcher$$.prototype.$dispatch$ = function $$tuna$events$EventDispatcher$$$$$dispatch$$($event$$12$$, $opt_data$$3$$) {
  $event$$12$$ instanceof $tuna$events$BasicEvent$$ || ($event$$12$$ = new $tuna$events$BasicEvent$$(this, $event$$12$$));
  var $data$$20$$ = $opt_data$$3$$ !== $JSCompiler_alias_VOID$$ ? $opt_data$$3$$ : $JSCompiler_alias_NULL$$, $type$$62$$ = $event$$12$$.$_type$;
  if(this.$_listeners$[$type$$62$$] !== $JSCompiler_alias_VOID$$) {
    for(var $i$$7$$ = 0, $l$$4$$ = this.$_listeners$[$type$$62$$].length;$i$$7$$ < $l$$4$$;) {
      this.$_listeners$[$type$$62$$][$i$$7$$].call(this, $event$$12$$, $data$$20$$);
      if($event$$12$$.$_isImmediateStopped$) {
        break
      }
      $i$$7$$++
    }
    this.$_propagationParent$ !== $JSCompiler_alias_NULL$$ && $event$$12$$.$_isBubbling$ && !$event$$12$$.$_isImmediateStopped$ && !$event$$12$$.$_isStopped$ && this.$_propagationParent$.$dispatch$($event$$12$$)
  }
  return!$event$$12$$.$_isCanceled$
};
$tuna$events$EventDispatcher$$.prototype.addEventListener = function $$tuna$events$EventDispatcher$$$$addEventListener$($type$$63$$, $listener$$29$$) {
  this.$_listeners$[$type$$63$$] === $JSCompiler_alias_VOID$$ ? this.$_listeners$[$type$$63$$] = [$listener$$29$$] : this.$hasEventListener$($type$$63$$, $listener$$29$$) || this.$_listeners$[$type$$63$$].push($listener$$29$$)
};
$tuna$events$EventDispatcher$$.prototype.removeEventListener = function $$tuna$events$EventDispatcher$$$$removeEventListener$($type$$64$$, $listener$$30$$) {
  if(this.$_listeners$[$type$$64$$] !== $JSCompiler_alias_VOID$$) {
    var $listenerIndex$$ = $tuna$utils$indexOf$$($listener$$30$$, this.$_listeners$[$type$$64$$]);
    -1 !== $listenerIndex$$ && this.$_listeners$[$type$$64$$].splice($listenerIndex$$, 1)
  }
};
$tuna$events$EventDispatcher$$.prototype.$hasEventListener$ = function $$tuna$events$EventDispatcher$$$$$hasEventListener$$($type$$65$$, $listener$$31$$) {
  return this.$_listeners$[$type$$65$$] !== $JSCompiler_alias_VOID$$ ? -1 !== $tuna$utils$indexOf$$($listener$$31$$, this.$_listeners$[$type$$65$$]) : $JSCompiler_alias_FALSE$$
};
function $tuna$net$IRequest$$() {
}
$tuna$utils$extend$$($tuna$net$IRequest$$, $tuna$events$IEventDispatcher$$);
$tuna$net$IRequest$$.prototype.send = $JSCompiler_emptyFn$$();
$tuna$net$IRequest$$.prototype.abort = $JSCompiler_emptyFn$$();
function $tuna$net$Request$$($opt_url$$3$$, $opt_isSync$$) {
  $tuna$events$EventDispatcher$$.call(this);
  this.$__url$ = $opt_url$$3$$ || "/";
  this.$__isSync$ = !!$opt_isSync$$;
  this.$__method$ = "GET";
  this.$__headers$ = {};
  this.$__data$ = $JSCompiler_alias_NULL$$;
  this.$__requests$ = []
}
$tuna$utils$extend$$($tuna$net$Request$$, $tuna$events$EventDispatcher$$);
$tuna$net$Request$$.prototype.setData = function $$tuna$net$Request$$$$setData$($data$$21$$) {
  this.$__data$ = $data$$21$$
};
$tuna$net$Request$$.prototype.send = function $$tuna$net$Request$$$$send$($dataString_opt_data$$5$$) {
  $dataString_opt_data$$5$$ !== $JSCompiler_alias_VOID$$ && (this.$__data$ = $dataString_opt_data$$5$$);
  var $request$$ = !$tuna$IS_IE$$ ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
  if(!this.$__isSync$) {
    var $self$$1$$ = this;
    $request$$.onreadystatechange = function $$request$$$onreadystatechange$() {
      if(4 === $request$$.readyState) {
        $self$$1$$.$dispatch$("complete", $request$$.responseText);
        for(var $i$$inline_26$$ = 0, $l$$inline_27$$ = $self$$1$$.$__requests$.length;$i$$inline_26$$ < $l$$inline_27$$;) {
          $self$$1$$.$__requests$[$i$$inline_26$$] === $request$$ && $self$$1$$.$__requests$.splice($i$$inline_26$$, 1), $i$$inline_26$$++
        }
        $request$$.abort()
      }
    }
  }
  for(var $name$$55_requestURL_sendData$$ in this.$__headers$) {
    $request$$.setRequestHeader($name$$55_requestURL_sendData$$, this.$__headers$[$name$$55_requestURL_sendData$$])
  }
  $name$$55_requestURL_sendData$$ = this.$__url$;
  $dataString_opt_data$$5$$ = $tuna$utils$__splitUrlData$$(this.$__data$).join("&");
  "GET" === this.$__method$ && 0 !== $dataString_opt_data$$5$$.length && ($name$$55_requestURL_sendData$$ += (-1 === $name$$55_requestURL_sendData$$.indexOf("?") ? "?" : "&") + $dataString_opt_data$$5$$);
  $request$$.open(this.$__method$, encodeURI($name$$55_requestURL_sendData$$), !this.$__isSync$);
  $name$$55_requestURL_sendData$$ = $JSCompiler_alias_NULL$$;
  "GET" !== this.$__method$ && ($request$$.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), $name$$55_requestURL_sendData$$ = $dataString_opt_data$$5$$);
  $request$$.send($name$$55_requestURL_sendData$$);
  this.$__isSync$ ? this.$dispatch$("complete", $request$$.responseText) : this.$__requests$.push($request$$)
};
$tuna$net$Request$$.prototype.abort = function $$tuna$net$Request$$$$abort$() {
  for(;0 < this.$__requests$.length;) {
    this.$__requests$.shift().abort()
  }
};
function $tuna$model$ListResource$$($opt_methodName$$, $opt_recordName$$) {
  $tuna$events$EventDispatcher$$.call(this);
  this.$__lastArgs$ = $JSCompiler_alias_NULL$$;
  this.$_methodName$ = $opt_methodName$$ || $JSCompiler_alias_NULL$$;
  this.$_recordName$ = $opt_recordName$$ || $JSCompiler_alias_NULL$$;
  this.$_list$ = []
}
$tuna$utils$extend$$($tuna$model$ListResource$$, $tuna$events$EventDispatcher$$);
$JSCompiler_prototypeAlias$$ = $tuna$model$ListResource$$.prototype;
$JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($opt_args$$1$$, $opt_isForce$$) {
  if(this.$_methodName$ !== $JSCompiler_alias_NULL$$ && this.$_recordName$ !== $JSCompiler_alias_NULL$$) {
    if($opt_isForce$$ || $opt_args$$1$$ === $JSCompiler_alias_VOID$$ || !$tuna$utils$isObjectsEquals$$(this.$__lastArgs$, $opt_args$$1$$)) {
      var $self$$2$$ = this;
      $tuna$rest$call$$(this.$_methodName$, $opt_args$$1$$ || $JSCompiler_alias_NULL$$, function($records$$) {
        $self$$2$$.set($records$$)
      }, this.$_recordName$)
    }
    this.$__lastArgs$ = $opt_args$$1$$ || $JSCompiler_alias_NULL$$
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
  for(var $i$$9$$ = 0, $l$$6$$ = this.$_list$.length;$i$$9$$ < $l$$6$$ && !(this.$_list$[$i$$9$$].id === $record$$.id);) {
    $i$$9$$++
  }
  this.$_list$[$i$$9$$] = $record$$;
  this.$dispatch$("update", this.$_list$)
};
function $JSCompiler_StaticMethods_getItemById$$($JSCompiler_StaticMethods_getItemById$self$$, $id$$3$$) {
  for(var $i$$11$$ = 0, $l$$8$$ = $JSCompiler_StaticMethods_getItemById$self$$.$_list$.length;$i$$11$$ < $l$$8$$;) {
    if($JSCompiler_StaticMethods_getItemById$self$$.$_list$[$i$$11$$].id === $id$$3$$) {
      return $JSCompiler_StaticMethods_getItemById$self$$.$_list$[$i$$11$$]
    }
    $i$$11$$++
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.find = function $$JSCompiler_prototypeAlias$$$find$($callback$$26$$) {
  for(var $result$$6$$ = [], $i$$12$$ = 0, $l$$9$$ = this.$_list$.length;$i$$12$$ < $l$$9$$;) {
    $callback$$26$$(this.$_list$[$i$$12$$]) && $result$$6$$.push(this.$_list$[$i$$12$$]), $i$$12$$++
  }
  return $result$$6$$
};
function $JSCompiler_StaticMethods_findOne$$($callback$$27$$) {
  for(var $JSCompiler_StaticMethods_findOne$self$$ = $model$dimensions$$, $i$$13$$ = 0, $l$$10$$ = $JSCompiler_StaticMethods_findOne$self$$.$_list$.length;$i$$13$$ < $l$$10$$;) {
    if($callback$$27$$($JSCompiler_StaticMethods_findOne$self$$.$_list$[$i$$13$$])) {
      return $JSCompiler_StaticMethods_findOne$self$$.$_list$[$i$$13$$]
    }
    $i$$13$$++
  }
  return $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_each$$($JSCompiler_StaticMethods_each$self$$, $callback$$28$$) {
  for(var $i$$14$$ = 0, $l$$11$$ = $JSCompiler_StaticMethods_each$self$$.$_list$.length;$i$$14$$ < $l$$11$$;) {
    $callback$$28$$($JSCompiler_StaticMethods_each$self$$.$_list$[$i$$14$$]), $i$$14$$++
  }
}
$JSCompiler_prototypeAlias$$.map = function $$JSCompiler_prototypeAlias$$$map$($callback$$29$$) {
  for(var $result$$7$$ = [], $i$$15$$ = 0, $l$$12$$ = this.$_list$.length, $item$$ = $JSCompiler_alias_NULL$$;$i$$15$$ < $l$$12$$;) {
    $item$$ = $callback$$29$$(this.$_list$[$i$$15$$]), $item$$ !== $JSCompiler_alias_NULL$$ && $result$$7$$.push($item$$), $i$$15$$++
  }
  return $result$$7$$
};
function $tuna$model$ItemResource$$() {
  $tuna$events$EventDispatcher$$.call(this);
  this.$_item$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$model$ItemResource$$, $tuna$events$EventDispatcher$$);
$tuna$model$ItemResource$$.prototype.set = function $$tuna$model$ItemResource$$$$set$($item$$1$$) {
  this.$_item$ !== $item$$1$$ && (this.$_item$ = $item$$1$$, this.$dispatch$("update", this.$_item$))
};
$tuna$model$ItemResource$$.prototype.get = $JSCompiler_get$$("$_item$");
$tuna$model$ItemResource$$.prototype.clear = function $$tuna$model$ItemResource$$$$clear$() {
  this.set($JSCompiler_alias_NULL$$)
};
function $tuna$model$Record$$($opt_rawData$$) {
  this.id = $JSCompiler_alias_NULL$$;
  $opt_rawData$$ !== $JSCompiler_alias_VOID$$ && this.$populate$($opt_rawData$$)
}
$tuna$model$Record$$.prototype.$clone$ = function $$tuna$model$Record$$$$$clone$$() {
  var $clone$$ = new this.constructor, $param$$;
  for($param$$ in this) {
    $clone$$[$param$$] = this[$param$$]
  }
  return $clone$$
};
$tuna$model$Record$$.prototype.$populate$ = $JSCompiler_emptyFn$$();
$tuna$model$Record$$.prototype.$serialize$ = $JSCompiler_emptyFn$$();
function $tuna$model$serialize$$($records$$1$$, $opt_options$$6$$) {
  if($records$$1$$ instanceof Array) {
    for(var $result$$8$$ = [], $i$$16$$ = 0, $l$$13$$ = $records$$1$$.length;$i$$16$$ < $l$$13$$;) {
      $result$$8$$.push($records$$1$$[$i$$16$$].$serialize$($opt_options$$6$$)), $i$$16$$++
    }
    return $result$$8$$
  }
  return $records$$1$$ instanceof $tuna$model$Record$$ ? $records$$1$$.$serialize$($opt_options$$6$$) : $JSCompiler_alias_NULL$$
}
var $tuna$model$recordFactory$$ = new function() {
  this.$__prototypes$ = {}
};
function $tuna$rest$Method$$() {
  $tuna$events$EventDispatcher$$.call(this)
}
$tuna$utils$extend$$($tuna$rest$Method$$, $tuna$events$EventDispatcher$$);
$tuna$rest$Method$$.prototype.call = $JSCompiler_emptyFn$$();
$tuna$rest$Method$$.prototype.$clone$ = function $$tuna$rest$Method$$$$$clone$$() {
  return new this.constructor
};
function $tuna$rest$DefaultMethod$$($opt_name$$3$$) {
  $tuna$events$EventDispatcher$$.call(this);
  $opt_name$$3$$ !== $JSCompiler_alias_VOID$$ && this.$setName$($opt_name$$3$$)
}
$tuna$utils$extend$$($tuna$rest$DefaultMethod$$, $tuna$rest$Method$$);
$tuna$rest$DefaultMethod$$.prototype.$setName$ = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_createMethod$$($name$$61$$) {
  var $JSCompiler_StaticMethods_createMethod$self$$ = $tuna$rest$methodFactory$$, $result$$9$$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_createMethod$self$$.$__methods$[$name$$61$$] !== $JSCompiler_alias_VOID$$ ? $result$$9$$ = $JSCompiler_StaticMethods_createMethod$self$$.$__methods$[$name$$61$$].$clone$() : $JSCompiler_StaticMethods_createMethod$self$$.$__defaultMethod$ !== $JSCompiler_alias_NULL$$ && ($result$$9$$ = $JSCompiler_StaticMethods_createMethod$self$$.$__defaultMethod$.$clone$(), $result$$9$$.$setName$($name$$61$$));
  return $result$$9$$
}
;function $tuna$rest$call$$($name$$63$$, $args$$3$$, $opt_callback$$4$$, $opt_recordName$$1$$) {
  var $method$$5$$ = $JSCompiler_StaticMethods_createMethod$$($name$$63$$), $listener$$32$$ = $JSCompiler_alias_NULL$$;
  $opt_callback$$4$$ !== $JSCompiler_alias_VOID$$ && ($listener$$32$$ = $opt_recordName$$1$$ === $JSCompiler_alias_VOID$$ ? function($event$$13$$, $data$$23$$) {
    $opt_callback$$4$$($data$$23$$);
    $method$$5$$.removeEventListener("result", $listener$$32$$)
  } : function($event$$14$$, $data$$24$$) {
    $opt_recordName$$1$$ !== $JSCompiler_alias_VOID$$ && $opt_callback$$4$$($tuna$rest$populateRecords$$($data$$24$$, $opt_recordName$$1$$));
    $method$$5$$.removeEventListener("result", $listener$$32$$)
  });
  $listener$$32$$ !== $JSCompiler_alias_NULL$$ && $method$$5$$.addEventListener("result", $listener$$32$$);
  $method$$5$$.call($args$$3$$)
}
function $tuna$rest$populateRecords$$($data$$25$$, $name$$64$$) {
  var $recordPrototype$$ = $tuna$model$recordFactory$$.$__prototypes$[$name$$64$$] || $JSCompiler_alias_NULL$$;
  if($recordPrototype$$ !== $JSCompiler_alias_NULL$$ && $data$$25$$ !== $JSCompiler_alias_NULL$$) {
    var $record$$3$$ = $JSCompiler_alias_NULL$$;
    if($data$$25$$ instanceof Array) {
      for(var $result$$10$$ = [], $i$$17$$ = 0, $l$$14$$ = $data$$25$$.length;$i$$17$$ < $l$$14$$;) {
        $record$$3$$ = $recordPrototype$$.$clone$(), $data$$25$$[$i$$17$$] !== $JSCompiler_alias_NULL$$ && $record$$3$$.$populate$($data$$25$$[$i$$17$$]), $result$$10$$.push($record$$3$$), $i$$17$$++
      }
      return $result$$10$$
    }
    $record$$3$$ = $recordPrototype$$.$clone$();
    $record$$3$$.$populate$($data$$25$$);
    return $record$$3$$
  }
  return $JSCompiler_alias_NULL$$
}
var $tuna$rest$methodFactory$$ = new function() {
  this.$__methods$ = {};
  this.$__defaultMethod$ = $JSCompiler_alias_NULL$$
};
function $DataNode$$($value$$42$$, $opt_parent$$, $opt_key$$1$$) {
  this.$__value$ = $value$$42$$;
  this.$__parent$ = $opt_parent$$ || $JSCompiler_alias_NULL$$;
  this.$__key$ = $opt_key$$1$$ || $JSCompiler_alias_NULL$$;
  this.$__keyNode$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {}
}
$JSCompiler_prototypeAlias$$ = $DataNode$$.prototype;
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$__parent$");
$JSCompiler_prototypeAlias$$.getKey = function $$JSCompiler_prototypeAlias$$$getKey$() {
  this.$__keyNode$ === $JSCompiler_alias_NULL$$ && (this.$__keyNode$ = new $tuna$tmpl$data$DataNode$$(this.$__key$));
  return this.$__keyNode$
};
$JSCompiler_prototypeAlias$$.$getRoot$ = function $$JSCompiler_prototypeAlias$$$$getRoot$$() {
  return this.$__parent$ !== $JSCompiler_alias_NULL$$ ? this.$__parent$.$getRoot$() : this
};
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$__value$");
$JSCompiler_prototypeAlias$$.getStringValue = function $$JSCompiler_prototypeAlias$$$getStringValue$() {
  return this.$__value$ !== $JSCompiler_alias_NULL$$ ? this.$__value$.toString() : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_growChild$$($JSCompiler_StaticMethods_growChild$self$$, $key$$16$$) {
  var $result$$11$$ = $JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] !== $JSCompiler_alias_VOID$$) {
    $result$$11$$ = $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$]
  }else {
    if($JSCompiler_StaticMethods_growChild$self$$.$__value$ !== $JSCompiler_alias_NULL$$) {
      var $keyValue$$ = $JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$16$$];
      $keyValue$$ !== $JSCompiler_alias_VOID$$ ? ($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] = new $tuna$tmpl$data$DataNode$$($keyValue$$, $JSCompiler_StaticMethods_growChild$self$$, $key$$16$$), $result$$11$$ = $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$]) : $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] = $tuna$tmpl$data$NULL_NODE$$
    }
  }
  return $result$$11$$
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
function $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $dataNode$$1$$, $index$$51$$) {
  var $token$$4$$ = $path$$5$$[$index$$51$$];
  return $dataNode$$1$$ !== $JSCompiler_alias_NULL$$ && $token$$4$$ !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $JSCompiler_StaticMethods___applyToken$$($token$$4$$, $dataNode$$1$$), ++$index$$51$$) : $dataNode$$1$$
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
  this.pattern = this.$dataPath$ = this.$targetClass$ = $JSCompiler_alias_NULL$$
}
;function $tuna$tmpl$settings$AttributeSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$attributeName$ = $JSCompiler_alias_NULL$$;
  this.$hasEvent$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$AttributeSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $tuna$tmpl$settings$ConditionSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$operatorData$ = this.$operatorType$ = this.$actionData$ = this.$actionType$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$ConditionSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $tuna$tmpl$settings$CheckboxSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this)
}
$tuna$utils$extend$$($tuna$tmpl$settings$CheckboxSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $tuna$tmpl$settings$ListSettings$$() {
  $tuna$tmpl$settings$SpotSettings$$.call(this);
  this.$itemSettings$ = this.$itemRendererID$ = this.keyPath = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$ListSettings$$, $tuna$tmpl$settings$SpotSettings$$);
function $tuna$tmpl$settings$TemplateSettings$$() {
  this.$spots$ = [];
  this.$lists$ = [];
  this.attributes = [];
  this.$conditions$ = [];
  this.$checkboxex$ = []
}
;function $SpotExtractor$$() {
  this.$_tagName$ = "spot";
  this.$_ns$ = "tuna:"
}
$SpotExtractor$$.prototype.$_createItem$ = function $$SpotExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$SpotSettings$$
};
$SpotExtractor$$.prototype.$_parseElement$ = function $$SpotExtractor$$$$$_parseElement$$($element$$27$$, $item$$3$$) {
  $item$$3$$.$targetClass$ = $element$$27$$.getAttribute(this.$_ns$ + "target");
  $item$$3$$.$dataPath$ = $element$$27$$.getAttribute(this.$_ns$ + "path");
  $item$$3$$.filter = $element$$27$$.getAttribute(this.$_ns$ + "filter")
};
$SpotExtractor$$.prototype.$_saveItem$ = function $$SpotExtractor$$$$$_saveItem$$($item$$4$$, $settings$$2$$) {
  $settings$$2$$.$spots$.push($item$$4$$)
};
function $ListExtractor$$($templateBuilder$$) {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "list";
  this.$__templateBuilder$ = $templateBuilder$$
}
$tuna$utils$extend$$($ListExtractor$$, $SpotExtractor$$);
$ListExtractor$$.prototype.$_createItem$ = function $$ListExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$ListSettings$$
};
$ListExtractor$$.prototype.$_parseElement$ = function $$ListExtractor$$$$$_parseElement$$($element$$28$$, $item$$5$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$28$$, $item$$5$$);
  $item$$5$$.$itemRendererID$ = $element$$28$$.getAttribute(this.$_ns$ + "item-renderer-id");
  $item$$5$$.keyPath = $element$$28$$.getAttribute(this.$_ns$ + "key-path");
  var $templateID$$ = $element$$28$$.getAttribute(this.$_ns$ + "item-template-id");
  $item$$5$$.$itemSettings$ = $JSCompiler_StaticMethods_buildSettings$$(this.$__templateBuilder$, $templateID$$)
};
$ListExtractor$$.prototype.$_saveItem$ = function $$ListExtractor$$$$$_saveItem$$($item$$6$$, $settings$$3$$) {
  $settings$$3$$.$lists$.push($item$$6$$)
};
function $AttributeExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "attr"
}
$tuna$utils$extend$$($AttributeExtractor$$, $SpotExtractor$$);
$AttributeExtractor$$.prototype.$_createItem$ = function $$AttributeExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$AttributeSettings$$
};
$AttributeExtractor$$.prototype.$_parseElement$ = function $$AttributeExtractor$$$$$_parseElement$$($element$$29$$, $item$$7$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$29$$, $item$$7$$);
  $item$$7$$.$attributeName$ = $element$$29$$.getAttribute(this.$_ns$ + "name");
  $item$$7$$.$hasEvent$ = !!$element$$29$$.getAttribute(this.$_ns$ + "event")
};
$AttributeExtractor$$.prototype.$_saveItem$ = function $$AttributeExtractor$$$$$_saveItem$$($item$$8$$, $settings$$4$$) {
  $settings$$4$$.attributes.push($item$$8$$)
};
function $ConditionExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "if";
  this.$__operatorAttrs$ = ["isset", "notset", "eq", "ne"];
  this.$__actionAttrs$ = ["class"]
}
$tuna$utils$extend$$($ConditionExtractor$$, $SpotExtractor$$);
$ConditionExtractor$$.prototype.$_createItem$ = function $$ConditionExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$ConditionSettings$$
};
$ConditionExtractor$$.prototype.$_parseElement$ = function $$ConditionExtractor$$$$$_parseElement$$($element$$30$$, $item$$9$$) {
  $SpotExtractor$$.prototype.$_parseElement$.call(this, $element$$30$$, $item$$9$$);
  for(var $i$$inline_33_i$$inline_41$$ = 0, $l$$inline_34_l$$inline_42$$ = this.$__operatorAttrs$.length, $attr$$inline_35_attr$$inline_43$$ = $JSCompiler_alias_NULL$$, $value$$inline_36_value$$inline_44$$ = $JSCompiler_alias_NULL$$;$i$$inline_33_i$$inline_41$$ < $l$$inline_34_l$$inline_42$$;) {
    $attr$$inline_35_attr$$inline_43$$ = this.$__operatorAttrs$[$i$$inline_33_i$$inline_41$$];
    $value$$inline_36_value$$inline_44$$ = $element$$30$$.getAttribute("tuna:" + $attr$$inline_35_attr$$inline_43$$);
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
    $value$$inline_36_value$$inline_44$$ = $element$$30$$.getAttribute("tuna:" + $attr$$inline_35_attr$$inline_43$$);
    if($value$$inline_36_value$$inline_44$$ !== $JSCompiler_alias_NULL$$) {
      $item$$9$$.$actionType$ = $attr$$inline_35_attr$$inline_43$$;
      $item$$9$$.$actionData$ = $value$$inline_36_value$$inline_44$$;
      break
    }
    $i$$inline_33_i$$inline_41$$++
  }
};
$ConditionExtractor$$.prototype.$_saveItem$ = function $$ConditionExtractor$$$$$_saveItem$$($item$$12$$, $settings$$5$$) {
  $settings$$5$$.$conditions$.push($item$$12$$)
};
function $CheckboxExtractor$$() {
  $SpotExtractor$$.call(this);
  this.$_tagName$ = "checkbox"
}
$tuna$utils$extend$$($CheckboxExtractor$$, $SpotExtractor$$);
$CheckboxExtractor$$.prototype.$_createItem$ = function $$CheckboxExtractor$$$$$_createItem$$() {
  return new $tuna$tmpl$settings$CheckboxSettings$$
};
$CheckboxExtractor$$.prototype.$_saveItem$ = function $$CheckboxExtractor$$$$$_saveItem$$($item$$13$$, $settings$$6$$) {
  $settings$$6$$.$checkboxex$.push($item$$13$$)
};
function $JSCompiler_StaticMethods_buildSettings$$($JSCompiler_StaticMethods_buildSettings$self$$, $templateID$$1$$) {
  var $template$$ = $JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] !== $JSCompiler_alias_VOID$$) {
    $template$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$]
  }else {
    var $templateElement$$ = document.getElementById($templateID$$1$$);
    if($templateElement$$ !== $JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] = $template$$ = new $tuna$tmpl$settings$TemplateSettings$$;
      for(var $i$$21$$ = 0, $l$$18$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$.length;$i$$21$$ < $l$$18$$;) {
        for(var $JSCompiler_StaticMethods_extract$self$$inline_46$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$[$i$$21$$], $settings$$inline_48$$ = $template$$, $elements$$inline_49$$ = $templateElement$$.getElementsByTagName($tuna$IS_IE$$ ? $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_tagName$ : $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_ns$ + $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_tagName$), $i$$inline_50$$ = 0, $l$$inline_51$$ = $elements$$inline_49$$.length, 
        $item$$inline_52$$ = $JSCompiler_alias_NULL$$;$i$$inline_50$$ < $l$$inline_51$$;) {
          $item$$inline_52$$ = $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_createItem$(), $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_parseElement$($elements$$inline_49$$.item($i$$inline_50$$), $item$$inline_52$$), $JSCompiler_StaticMethods_extract$self$$inline_46$$.$_saveItem$($item$$inline_52$$, $settings$$inline_48$$), $i$$inline_50$$++
        }
        $i$$21$$++
      }
    }
  }
  return $template$$
}
;function $tuna$tmpl$units$list$ListContainerRouter$$($container$$, $rootTemplate$$) {
  this.$_container$ = $container$$;
  this.$_rootTemplate$ = $rootTemplate$$
}
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.append = function $$tuna$tmpl$units$list$ListContainerRouter$$$$append$($node$$3$$) {
  this.$_container$.appendChild($node$$3$$);
  var $JSCompiler_StaticMethods_registerChildCreation$self$$inline_54$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildCreation$self$$inline_54$$.$__createdChildren$ = $JSCompiler_StaticMethods_registerChildCreation$self$$inline_54$$.$__createdChildren$.concat($node$$3$$)
};
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.remove = function $$tuna$tmpl$units$list$ListContainerRouter$$$$remove$($node$$4$$) {
  this.$_container$.removeChild($node$$4$$);
  var $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_57$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_57$$.$__removedChildren$ = $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_57$$.$__removedChildren$.concat($node$$4$$)
};
function $tuna$tmpl$units$condition$ClassAction$$($data$$26$$) {
  this.$_data$ = $data$$26$$ || "";
  this.$__lastName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$ClassAction$$, $tuna$tmpl$units$condition$ConditionAction$$);
$tuna$tmpl$units$condition$ClassAction$$.prototype.apply = function $$tuna$tmpl$units$condition$ClassAction$$$$apply$($element$$35$$, $testResult$$, $value$$45$$) {
  var $className$$6$$ = this.$_data$;
  "" !== $className$$6$$ ? $tuna$dom$setClassExist$$($element$$35$$, $className$$6$$, $testResult$$) : this.$__lastName$ !== $value$$45$$ && $testResult$$ && (this.$__lastName$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($element$$35$$, this.$__lastName$ + ""), $tuna$dom$addClass$$($element$$35$$, $value$$45$$ + ""), this.$__lastName$ = $value$$45$$)
};
function $tuna$tmpl$units$condition$ConditionAction$$($data$$27$$) {
  this.$_data$ = $data$$27$$ || ""
}
$tuna$tmpl$units$condition$ConditionAction$$.prototype.apply = $JSCompiler_emptyFn$$();
function $tuna$tmpl$units$condition$ConditionOperator$$($data$$28$$) {
  this.$_data$ = $data$$28$$ || ""
}
$tuna$tmpl$units$condition$ConditionOperator$$.prototype.test = $JSCompiler_emptyFn$$();
function $tuna$tmpl$units$condition$NotEqualsOperator$$($data$$29$$) {
  this.$_data$ = $data$$29$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotEqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotEqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotEqualsOperator$$$$test$($value$$48$$) {
  return!($value$$48$$ == this.$_data$ || $value$$48$$ + "" == this.$_data$)
};
function $tuna$tmpl$units$condition$IsSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$IsSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$IsSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$IsSetOperator$$$$test$($value$$49$$) {
  return $value$$49$$ != $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$condition$EqualsOperator$$($data$$30$$) {
  this.$_data$ = $data$$30$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$EqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$EqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$EqualsOperator$$$$test$($value$$50$$) {
  return $value$$50$$ === this.$_data$ || $value$$50$$ + "" === this.$_data$
};
function $tuna$tmpl$units$condition$NotSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotSetOperator$$$$test$($value$$51$$) {
  return $value$$51$$ == $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$Unit$$($root$$) {
  this.$_rootTemplate$ = $root$$
}
$tuna$tmpl$units$Unit$$.prototype.$applyData$ = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$Unit$$.prototype.$destroy$ = $JSCompiler_emptyFn$$();
function $tuna$tmpl$units$Spot$$($root$$1$$) {
  this.$_rootTemplate$ = $root$$1$$;
  this.$__pathEvaluator$ = new $PathEvaluator$$;
  this.$_nodes$ = [];
  this.$_pattern$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Spot$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$Spot$$.prototype.$setPath$ = function $$tuna$tmpl$units$Spot$$$$$setPath$$($path$$6$$) {
  this.$__pathEvaluator$.$setPath$($path$$6$$)
};
$tuna$tmpl$units$Spot$$.prototype.$applyData$ = function $$tuna$tmpl$units$Spot$$$$$applyData$$($dataNode$$5_value$$52_valueNode$$) {
  $dataNode$$5_value$$52_valueNode$$ = this.$__pathEvaluator$.evaluate($dataNode$$5_value$$52_valueNode$$);
  $dataNode$$5_value$$52_valueNode$$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$5_value$$52_valueNode$$ = $dataNode$$5_value$$52_valueNode$$.$getValue$(), this.$_pattern$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$5_value$$52_valueNode$$ = this.$_pattern$.join($dataNode$$5_value$$52_valueNode$$)), this.$_applyValue$($dataNode$$5_value$$52_valueNode$$))
};
$tuna$tmpl$units$Spot$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Spot$$$$$_applyValue$$($i$$22_value$$53$$) {
  var $html$$1$$ = "";
  $i$$22_value$$53$$ !== $JSCompiler_alias_NULL$$ && ($html$$1$$ = $i$$22_value$$53$$.toString());
  for($i$$22_value$$53$$ = this.$_nodes$.length - 1;0 <= $i$$22_value$$53$$;) {
    this.$_nodes$[$i$$22_value$$53$$].innerHTML !== $html$$1$$ && (this.$_nodes$[$i$$22_value$$53$$].innerHTML = $html$$1$$), $i$$22_value$$53$$--
  }
};
$tuna$tmpl$units$Spot$$.prototype.$destroy$ = function $$tuna$tmpl$units$Spot$$$$$destroy$$() {
  this.$_nodes$.length = 0
};
function $tuna$tmpl$units$Attribute$$($root$$2$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$2$$);
  this.$__attributeName$ = "";
  this.$__hasEvent$ = $JSCompiler_alias_FALSE$$;
  this.$__dispatchAttribute$ = $tuna$utils$bind$$(this.$__dispatchAttribute$, this)
}
$tuna$utils$extend$$($tuna$tmpl$units$Attribute$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Attribute$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Attribute$$$$$_applyValue$$($i$$inline_77_value$$54$$) {
  if($i$$inline_77_value$$54$$ !== $JSCompiler_alias_NULL$$) {
    for(var $i$$inline_74$$ = this.$_nodes$.length - 1;0 <= $i$$inline_74$$;) {
      this.$_nodes$[$i$$inline_74$$][this.$__attributeName$] !== $JSCompiler_alias_VOID$$ ? this.$_nodes$[$i$$inline_74$$][this.$__attributeName$] = $i$$inline_77_value$$54$$ : this.$_nodes$[$i$$inline_74$$].setAttribute(this.$__attributeName$, $i$$inline_77_value$$54$$ + ""), $i$$inline_74$$--
    }
  }else {
    for($i$$inline_77_value$$54$$ = this.$_nodes$.length - 1;0 <= $i$$inline_77_value$$54$$;) {
      this.$_nodes$[$i$$inline_77_value$$54$$].removeAttribute(this.$__attributeName$), $i$$inline_77_value$$54$$--
    }
  }
  this.$__hasEvent$ && setTimeout(this.$__dispatchAttribute$, 0)
};
$tuna$tmpl$units$Attribute$$.prototype.$__dispatchAttribute$ = function $$tuna$tmpl$units$Attribute$$$$$__dispatchAttribute$$() {
  for(var $i$$25$$ = this.$_nodes$.length - 1;0 <= $i$$25$$;) {
    var $element$$inline_442_element$$inline_81$$ = this.$_nodes$[$i$$25$$], $type$$inline_82$$ = this.$__attributeName$, $event$$inline_443_event$$inline_83$$ = $JSCompiler_alias_NULL$$;
    if(document.createEventObject !== $JSCompiler_alias_VOID$$) {
      var $event$$inline_443_event$$inline_83$$ = document.createEventObject(), $eventName$$inline_84$$ = "on" + $type$$inline_82$$;
      $element$$inline_442_element$$inline_81$$[$eventName$$inline_84$$] === $JSCompiler_alias_VOID$$ ? ($event$$inline_443_event$$inline_83$$.$__type$ = $type$$inline_82$$, $element$$inline_442_element$$inline_81$$.fireEvent("onhelp", $event$$inline_443_event$$inline_83$$)) : $element$$inline_442_element$$inline_81$$.fireEvent($eventName$$inline_84$$, $event$$inline_443_event$$inline_83$$)
    }else {
      $event$$inline_443_event$$inline_83$$ = document.createEvent("UIEvents"), $event$$inline_443_event$$inline_83$$.initUIEvent($type$$inline_82$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, window, 1), $element$$inline_442_element$$inline_81$$.dispatchEvent($event$$inline_443_event$$inline_83$$)
    }
    $i$$25$$--
  }
};
function $tuna$tmpl$units$Condition$$($root$$3$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$3$$);
  this.$__operator$ = this.$__action$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Condition$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Condition$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Condition$$$$$_applyValue$$($value$$56$$) {
  for(var $testResult$$2$$ = this.$__operator$.test($value$$56$$), $i$$26$$ = this.$_nodes$.length - 1;0 <= $i$$26$$;) {
    this.$__action$.apply(this.$_nodes$[$i$$26$$], $testResult$$2$$, $value$$56$$), $i$$26$$--
  }
};
function $tuna$tmpl$units$Checkbox$$($root$$4$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$4$$)
}
$tuna$utils$extend$$($tuna$tmpl$units$Checkbox$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Checkbox$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Checkbox$$$$$_applyValue$$($value$$57$$) {
  if($value$$57$$ !== $JSCompiler_alias_NULL$$) {
    var $i$$27$$ = this.$_nodes$.length - 1;
    if($value$$57$$ === $JSCompiler_alias_TRUE$$ || $value$$57$$ === $JSCompiler_alias_FALSE$$) {
      for(;0 <= $i$$27$$;) {
        this.$_nodes$[$i$$27$$].checked = $value$$57$$, $i$$27$$--
      }
    }else {
      if($value$$57$$ instanceof Array) {
        for(;0 <= $i$$27$$;) {
          this.$_nodes$[$i$$27$$].checked = -1 !== $tuna$utils$indexOf$$(this.$_nodes$[$i$$27$$].value, $value$$57$$), $i$$27$$--
        }
      }else {
        for($value$$57$$ += "";0 <= $i$$27$$;) {
          this.$_nodes$[$i$$27$$].checked = this.$_nodes$[$i$$27$$].value === $value$$57$$, $i$$27$$--
        }
      }
    }
  }
};
function $tuna$tmpl$units$List$$($root$$5$$) {
  this.$_rootTemplate$ = $root$$5$$;
  this.$__itemSettings$ = this.$__itemRenderer$ = this.$__templateCompiler$ = $JSCompiler_alias_NULL$$;
  this.$__itemsTable$ = {};
  this.$__pathEvaluator$ = new $PathEvaluator$$;
  this.$__keyPathEvaluator$ = new $PathEvaluator$$;
  this.$__listNodeRouter$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$List$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$List$$.prototype.$setPath$ = function $$tuna$tmpl$units$List$$$$$setPath$$($path$$7$$) {
  this.$__pathEvaluator$.$setPath$($path$$7$$)
};
$tuna$tmpl$units$List$$.prototype.$applyData$ = function $$tuna$tmpl$units$List$$$$$applyData$$($dataNode$$6_sampleNode_templateTarget$$inline_99$$) {
  var $oldItemsTable$$ = this.$__itemsTable$;
  this.$__itemsTable$ = {};
  $dataNode$$6_sampleNode_templateTarget$$inline_99$$ = this.$__pathEvaluator$.evaluate($dataNode$$6_sampleNode_templateTarget$$inline_99$$);
  if($dataNode$$6_sampleNode_templateTarget$$inline_99$$ !== $JSCompiler_alias_NULL$$) {
    var $sample$$ = $dataNode$$6_sampleNode_templateTarget$$inline_99$$.$getValue$(), $itemTemplate_templateTarget$$inline_93$$ = $JSCompiler_alias_NULL$$, $itemNode$$ = $JSCompiler_alias_NULL$$, $key$$17_keyNode$$inline_90$$ = $JSCompiler_alias_NULL$$, $index$$52_template$$inline_98$$;
    for($index$$52_template$$inline_98$$ in $sample$$) {
      if($itemNode$$ = $JSCompiler_StaticMethods_growChild$$($dataNode$$6_sampleNode_templateTarget$$inline_99$$, $index$$52_template$$inline_98$$), $key$$17_keyNode$$inline_90$$ = this.$__keyPathEvaluator$.evaluate($itemNode$$), $key$$17_keyNode$$inline_90$$ = $key$$17_keyNode$$inline_90$$ !== $JSCompiler_alias_NULL$$ ? $key$$17_keyNode$$inline_90$$.getStringValue() : $JSCompiler_alias_NULL$$, $key$$17_keyNode$$inline_90$$ !== $JSCompiler_alias_NULL$$) {
        if($oldItemsTable$$[$key$$17_keyNode$$inline_90$$] === $JSCompiler_alias_VOID$$) {
          if($itemTemplate_templateTarget$$inline_93$$ = this.$__itemRenderer$.cloneNode($JSCompiler_alias_TRUE$$), $itemTemplate_templateTarget$$inline_93$$ !== $JSCompiler_alias_NULL$$ && this.$__itemSettings$ !== $JSCompiler_alias_NULL$$) {
            var $template$$inline_94$$ = $JSCompiler_StaticMethods_compileTemplate$$(this.$__templateCompiler$, this.$__itemSettings$, $itemTemplate_templateTarget$$inline_93$$, this.$_rootTemplate$);
            this.$__listNodeRouter$.append($itemTemplate_templateTarget$$inline_93$$);
            $itemTemplate_templateTarget$$inline_93$$ = $template$$inline_94$$
          }else {
            $itemTemplate_templateTarget$$inline_93$$ = $JSCompiler_alias_NULL$$
          }
        }else {
          $itemTemplate_templateTarget$$inline_93$$ = $oldItemsTable$$[$key$$17_keyNode$$inline_90$$], delete $oldItemsTable$$[$key$$17_keyNode$$inline_90$$]
        }
        $itemTemplate_templateTarget$$inline_93$$ !== $JSCompiler_alias_NULL$$ && ($itemTemplate_templateTarget$$inline_93$$.$applyData$($itemNode$$), this.$__itemsTable$[$key$$17_keyNode$$inline_90$$] = $itemTemplate_templateTarget$$inline_93$$)
      }
    }
  }
  var $dataNode$$6_sampleNode_templateTarget$$inline_99$$ = $index$$52_template$$inline_98$$ = $JSCompiler_alias_NULL$$, $key$$inline_100$$;
  for($key$$inline_100$$ in $oldItemsTable$$) {
    $index$$52_template$$inline_98$$ = $oldItemsTable$$[$key$$inline_100$$], $dataNode$$6_sampleNode_templateTarget$$inline_99$$ = $index$$52_template$$inline_98$$.$getTarget$(), $dataNode$$6_sampleNode_templateTarget$$inline_99$$ !== $JSCompiler_alias_NULL$$ && this.$__listNodeRouter$.remove($dataNode$$6_sampleNode_templateTarget$$inline_99$$), $index$$52_template$$inline_98$$.$destroy$()
  }
};
$tuna$tmpl$units$List$$.prototype.$destroy$ = function $$tuna$tmpl$units$List$$$$$destroy$$() {
  for(var $key$$18$$ in this.$__itemsTable$) {
    this.$__itemsTable$[$key$$18$$].$destroy$()
  }
  this.$__itemsTable$ = {}
};
function $tuna$tmpl$units$Template$$($opt_root$$) {
  this.$_rootTemplate$ = $opt_root$$ || this;
  this.$__items$ = [];
  this.$__createdChildren$ = [];
  this.$__removedChildren$ = [];
  this.$__target$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Template$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$Template$$.prototype.$getTarget$ = $JSCompiler_get$$("$__target$");
$tuna$tmpl$units$Template$$.prototype.$applyData$ = function $$tuna$tmpl$units$Template$$$$$applyData$$($dataNode$$7$$) {
  for(var $i$$28$$ = this.$__items$.length - 1;0 <= $i$$28$$;) {
    this.$__items$[$i$$28$$].$applyData$($dataNode$$7$$), $i$$28$$--
  }
};
$tuna$tmpl$units$Template$$.prototype.$destroy$ = function $$tuna$tmpl$units$Template$$$$$destroy$$() {
  for(;0 < this.$__items$.length;) {
    this.$__items$.shift().$destroy$()
  }
  this.$__target$ = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_compileTemplate$$($JSCompiler_StaticMethods_compileTemplate$self$$, $settings$$9$$, $element$$40$$, $opt_root$$1_template$$4$$) {
  $opt_root$$1_template$$4$$ = new $tuna$tmpl$units$Template$$($opt_root$$1_template$$4$$);
  $opt_root$$1_template$$4$$.$__target$ = $element$$40$$;
  for(var $i$$29$$ = 0, $l$$19$$ = $JSCompiler_StaticMethods_compileTemplate$self$$.$__itemCompilers$.length;$i$$29$$ < $l$$19$$;) {
    $JSCompiler_StaticMethods_compileTemplate$self$$.$__itemCompilers$[$i$$29$$].compile($element$$40$$, $settings$$9$$, $opt_root$$1_template$$4$$), $i$$29$$++
  }
  return $opt_root$$1_template$$4$$
}
;function $tuna$tmpl$compilers$SpotCompiler$$() {
}
$tuna$tmpl$compilers$SpotCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$SpotCompiler$$$$compile$($element$$41$$, $itemsSettings_settings$$10$$, $template$$5$$) {
  for(var $item$$14$$ = $JSCompiler_alias_NULL$$, $root$$6$$ = $template$$5$$.$_rootTemplate$, $itemsSettings_settings$$10$$ = this.$_getItemsSettings$($itemsSettings_settings$$10$$), $i$$30$$ = $itemsSettings_settings$$10$$.length - 1;0 <= $i$$30$$;) {
    $item$$14$$ = this.$_createItem$($root$$6$$), this.$_compileItem$($element$$41$$, $itemsSettings_settings$$10$$[$i$$30$$], $item$$14$$), $template$$5$$.$__items$ = $template$$5$$.$__items$.concat($item$$14$$), $i$$30$$--
  }
};
$tuna$tmpl$compilers$SpotCompiler$$.prototype.$_getItemsSettings$ = function $$tuna$tmpl$compilers$SpotCompiler$$$$$_getItemsSettings$$($settings$$11$$) {
  return $settings$$11$$.$spots$
};
$tuna$tmpl$compilers$SpotCompiler$$.prototype.$_createItem$ = function $$tuna$tmpl$compilers$SpotCompiler$$$$$_createItem$$($rootTemplate$$1$$) {
  return new $tuna$tmpl$units$Spot$$($rootTemplate$$1$$)
};
$tuna$tmpl$compilers$SpotCompiler$$.prototype.$_compileItem$ = function $$tuna$tmpl$compilers$SpotCompiler$$$$$_compileItem$$($element$$42_elements$$inline_114$$, $className$$7_settings$$12$$, $item$$15$$) {
  $item$$15$$.$setPath$($className$$7_settings$$12$$.$dataPath$);
  $className$$7_settings$$12$$.filter !== $JSCompiler_alias_NULL$$ && ($item$$15$$.$_pattern$ = $className$$7_settings$$12$$.filter.split("$$"));
  $className$$7_settings$$12$$ = $className$$7_settings$$12$$.$targetClass$;
  $tuna$dom$hasClass$$($element$$42_elements$$inline_114$$, $className$$7_settings$$12$$) || ($element$$42_elements$$inline_114$$ = $tuna$dom$select$$("." + $className$$7_settings$$12$$, $element$$42_elements$$inline_114$$));
  $item$$15$$.$_nodes$ = $item$$15$$.$_nodes$.concat($element$$42_elements$$inline_114$$)
};
function $tuna$tmpl$compilers$AttributeCompiler$$() {
}
$tuna$utils$extend$$($tuna$tmpl$compilers$AttributeCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$AttributeCompiler$$.prototype.$_getItemsSettings$ = function $$tuna$tmpl$compilers$AttributeCompiler$$$$$_getItemsSettings$$($settings$$13$$) {
  return $settings$$13$$.attributes
};
$tuna$tmpl$compilers$AttributeCompiler$$.prototype.$_createItem$ = function $$tuna$tmpl$compilers$AttributeCompiler$$$$$_createItem$$($rootTemplate$$2$$) {
  return new $tuna$tmpl$units$Attribute$$($rootTemplate$$2$$)
};
$tuna$tmpl$compilers$AttributeCompiler$$.prototype.$_compileItem$ = function $$tuna$tmpl$compilers$AttributeCompiler$$$$$_compileItem$$($element$$43$$, $settings$$14$$, $item$$16$$) {
  $tuna$tmpl$compilers$SpotCompiler$$.prototype.$_compileItem$.call(this, $element$$43$$, $settings$$14$$, $item$$16$$);
  $item$$16$$.$__attributeName$ = $settings$$14$$.$attributeName$;
  $item$$16$$.$__hasEvent$ = $settings$$14$$.$hasEvent$
};
function $ConditionCompiler$$() {
}
$tuna$utils$extend$$($ConditionCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$ConditionCompiler$$.prototype.$_getItemsSettings$ = function $$ConditionCompiler$$$$$_getItemsSettings$$($settings$$15$$) {
  return $settings$$15$$.$conditions$
};
$ConditionCompiler$$.prototype.$_createItem$ = function $$ConditionCompiler$$$$$_createItem$$($rootTemplate$$3$$) {
  return new $tuna$tmpl$units$Condition$$($rootTemplate$$3$$)
};
$ConditionCompiler$$.prototype.$_compileItem$ = function $$ConditionCompiler$$$$$_compileItem$$($JSCompiler_inline_result$$122_element$$44$$, $settings$$16$$, $item$$17$$) {
  $tuna$tmpl$compilers$SpotCompiler$$.prototype.$_compileItem$.call(this, $JSCompiler_inline_result$$122_element$$44$$, $settings$$16$$, $item$$17$$);
  a: {
    switch($settings$$16$$.$actionType$) {
      case "class":
        $JSCompiler_inline_result$$122_element$$44$$ = new $tuna$tmpl$units$condition$ClassAction$$($settings$$16$$.$actionData$);
        break a
    }
    $JSCompiler_inline_result$$122_element$$44$$ = $JSCompiler_alias_NULL$$
  }
  $item$$17$$.$__action$ = $JSCompiler_inline_result$$122_element$$44$$;
  $item$$17$$.$__operator$ = $JSCompiler_StaticMethods___createOperator$$($settings$$16$$.$operatorType$, $settings$$16$$.$operatorData$)
};
function $JSCompiler_StaticMethods___createOperator$$($type$$67$$, $data$$32$$) {
  switch($type$$67$$) {
    case "isset":
      return new $tuna$tmpl$units$condition$IsSetOperator$$;
    case "notset":
      return new $tuna$tmpl$units$condition$NotSetOperator$$;
    case "eq":
      return new $tuna$tmpl$units$condition$EqualsOperator$$($data$$32$$);
    case "ne":
      return new $tuna$tmpl$units$condition$NotEqualsOperator$$($data$$32$$)
  }
  return $JSCompiler_alias_NULL$$
}
;function $CheckboxCompiler$$() {
}
$tuna$utils$extend$$($CheckboxCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$CheckboxCompiler$$.prototype.$_getItemsSettings$ = function $$CheckboxCompiler$$$$$_getItemsSettings$$($settings$$17$$) {
  return $settings$$17$$.$checkboxex$
};
$CheckboxCompiler$$.prototype.$_createItem$ = function $$CheckboxCompiler$$$$$_createItem$$($rootTemplate$$4$$) {
  return new $tuna$tmpl$units$Checkbox$$($rootTemplate$$4$$)
};
function $ListCompiler$$($compiler$$1$$) {
  this.$__templateCompiler$ = $compiler$$1$$
}
$ListCompiler$$.prototype.compile = function $$ListCompiler$$$$compile$($element$$45$$, $itemsSettings$$1_settings$$18$$, $template$$6$$) {
  for(var $itemsSettings$$1_settings$$18$$ = $itemsSettings$$1_settings$$18$$.$lists$, $i$$31$$ = $itemsSettings$$1_settings$$18$$.length - 1;0 <= $i$$31$$;) {
    var $element$$inline_133$$ = $element$$45$$, $settings$$inline_134$$ = $itemsSettings$$1_settings$$18$$[$i$$31$$], $template$$inline_135$$ = $template$$6$$, $root$$inline_136$$ = $template$$inline_135$$.$_rootTemplate$, $lists$$inline_137$$ = [], $className$$inline_138$$ = $settings$$inline_134$$.$targetClass$;
    if($tuna$dom$hasClass$$($element$$inline_133$$, $className$$inline_138$$)) {
      $lists$$inline_137$$.push($JSCompiler_StaticMethods___createList$$(this, $element$$inline_133$$, $settings$$inline_134$$, $root$$inline_136$$))
    }else {
      for(var $elements$$inline_139$$ = $tuna$dom$select$$("." + $className$$inline_138$$, $element$$inline_133$$), $i$$inline_140$$ = $elements$$inline_139$$.length - 1;0 <= $i$$inline_140$$;) {
        $tuna$dom$getParentWithClass$$($elements$$inline_139$$[$i$$inline_140$$], $className$$inline_138$$, $element$$inline_133$$) === $JSCompiler_alias_NULL$$ && $lists$$inline_137$$.push($JSCompiler_StaticMethods___createList$$(this, $elements$$inline_139$$[$i$$inline_140$$], $settings$$inline_134$$, $root$$inline_136$$)), $i$$inline_140$$--
      }
    }
    $template$$inline_135$$.$__items$ = $template$$inline_135$$.$__items$.concat($lists$$inline_137$$);
    $i$$31$$--
  }
};
function $JSCompiler_StaticMethods___createList$$($JSCompiler_StaticMethods___createList$self_rendererId$$, $element$$47$$, $settings$$20$$, $root$$8$$) {
  var $list$$2$$ = new $tuna$tmpl$units$List$$($root$$8$$);
  $JSCompiler_StaticMethods___createList$self_rendererId$$.$__templateCompiler$ !== $JSCompiler_alias_NULL$$ && ($list$$2$$.$__templateCompiler$ = $JSCompiler_StaticMethods___createList$self_rendererId$$.$__templateCompiler$);
  var $JSCompiler_StaticMethods___createList$self_rendererId$$ = $settings$$20$$.$itemRendererID$, $renderer$$ = document.getElementById($JSCompiler_StaticMethods___createList$self_rendererId$$);
  $renderer$$ !== $JSCompiler_alias_NULL$$ ? ($renderer$$ = $renderer$$.cloneNode($JSCompiler_alias_TRUE$$), $renderer$$.removeAttribute("id"), $list$$2$$.$__itemRenderer$ = $renderer$$) : alert("Cannot find item renderer with id: " + $JSCompiler_StaticMethods___createList$self_rendererId$$);
  $list$$2$$.$__itemSettings$ = $settings$$20$$.$itemSettings$;
  $list$$2$$.$__keyPathEvaluator$.$setPath$($settings$$20$$.keyPath);
  $list$$2$$.$setPath$($settings$$20$$.$dataPath$);
  $list$$2$$.$__listNodeRouter$ = new $tuna$tmpl$units$list$ListContainerRouter$$($element$$47$$, $root$$8$$);
  return $list$$2$$
}
;var $tuna$tmpl$__markupBuilder$$ = new function() {
  this.$__templatesTable$ = {};
  this.$__extractors$ = [];
  this.$__extractors$.push(new $SpotExtractor$$);
  this.$__extractors$.push(new $CheckboxExtractor$$);
  this.$__extractors$.push(new $AttributeExtractor$$);
  this.$__extractors$.push(new $ConditionExtractor$$);
  this.$__extractors$.push(new $ListExtractor$$(this))
}, $tuna$tmpl$__settingsTable$$ = {}, $tuna$tmpl$__compiler$$ = new function() {
  this.$__itemCompilers$ = [];
  this.$__itemCompilers$.push(new $tuna$tmpl$compilers$SpotCompiler$$);
  this.$__itemCompilers$.push(new $CheckboxCompiler$$);
  this.$__itemCompilers$.push(new $tuna$tmpl$compilers$AttributeCompiler$$);
  this.$__itemCompilers$.push(new $ConditionCompiler$$);
  this.$__itemCompilers$.push(new $ListCompiler$$(this))
};
function $tuna$ui$Module$$($selector$$6$$) {
  this.$_selector$ = $selector$$6$$
}
$tuna$ui$Module$$.prototype.init = function $$tuna$ui$Module$$$$init$($context$$2$$, $container$$1$$) {
  var $instances$$ = [], $targets_targets$$inline_163$$;
  $targets_targets$$inline_163$$ = $tuna$dom$select$$(this.$_selector$, $context$$2$$);
  $targets_targets$$inline_163$$ = $targets_targets$$inline_163$$.concat($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches(this.$_selector$, [$context$$2$$]) : []);
  for(var $i$$33$$ = 0, $l$$20$$ = $targets_targets$$inline_163$$.length, $instance_target$$inline_166$$ = $JSCompiler_alias_NULL$$;$i$$33$$ < $l$$20$$;) {
    for(var $instance_target$$inline_166$$ = $targets_targets$$inline_163$$[$i$$33$$], $context$$inline_167$$ = $context$$2$$, $result$$inline_168$$ = $JSCompiler_alias_TRUE$$, $isolators$$inline_169$$ = $tuna$ui$__isolators$$, $i$$inline_170$$ = 0, $l$$inline_171$$ = $isolators$$inline_169$$.length;$i$$inline_170$$ < $l$$inline_171$$ && !($instance_target$$inline_166$$ !== $context$$inline_167$$ && ($result$$inline_168$$ = $result$$inline_168$$ && !$tuna$dom$hasClass$$($instance_target$$inline_166$$, 
    $isolators$$inline_169$$[$i$$inline_170$$]) && $tuna$dom$getParentWithClass$$($instance_target$$inline_166$$, $isolators$$inline_169$$[$i$$inline_170$$], $context$$inline_167$$) === $JSCompiler_alias_NULL$$, !$result$$inline_168$$));) {
      $i$$inline_170$$++
    }
    $result$$inline_168$$ && ($instance_target$$inline_166$$ = this.$initInstance$($targets_targets$$inline_163$$[$i$$33$$], $container$$1$$), $instance_target$$inline_166$$ !== $JSCompiler_alias_NULL$$ && ($instances$$.push($instance_target$$inline_166$$), $JSCompiler_StaticMethods_getBooleanOption$$($instance_target$$inline_166$$, "not-init") || $instance_target$$inline_166$$.init()));
    $i$$33$$++
  }
  return $instances$$
};
$tuna$ui$Module$$.prototype.$destroy$ = function $$tuna$ui$Module$$$$$destroy$$($instances$$1_l$$22$$) {
  for(var $i$$35$$ = 0, $instances$$1_l$$22$$ = $instances$$1_l$$22$$.length;$i$$35$$ < $instances$$1_l$$22$$;) {
    $i$$35$$++
  }
};
$tuna$ui$Module$$.prototype.$initInstance$ = $JSCompiler_emptyFn$$();
function $tuna$ui$ModuleInstance$$($target$$40$$) {
  $tuna$events$EventDispatcher$$.call(this);
  this.$_target$ = $target$$40$$;
  this.$__defaultOptions$ = {}
}
$tuna$utils$extend$$($tuna$ui$ModuleInstance$$, $tuna$events$EventDispatcher$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$ModuleInstance$$.prototype;
$JSCompiler_prototypeAlias$$.$getTarget$ = $JSCompiler_get$$("$_target$");
$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$_target$.getAttribute("data-name")
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!$tuna$dom$hasClass$$(this.$_target$, "disabled")
};
function $JSCompiler_StaticMethods__setDefaultOption$$($JSCompiler_StaticMethods__setDefaultOption$self$$, $name$$65$$, $option$$) {
  $option$$ === $JSCompiler_alias_NULL$$ ? delete $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$65$$] : $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$65$$] = $option$$
}
function $JSCompiler_StaticMethods_setOption$$($JSCompiler_StaticMethods_setOption$self$$, $name$$66$$, $option$$1$$) {
  $option$$1$$ ? $JSCompiler_StaticMethods_setOption$self$$.$_target$.setAttribute("data-" + $name$$66$$, $option$$1$$) : $JSCompiler_StaticMethods_setOption$self$$.$_target$.removeAttribute("data-" + $name$$66$$)
}
function $JSCompiler_StaticMethods_getOption$$($JSCompiler_StaticMethods_getOption$self$$) {
  var $option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$_target$.getAttribute("data-popup-id");
  $option$$2$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"] !== $JSCompiler_alias_VOID$$ && ($option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"]);
  return $option$$2$$
}
function $JSCompiler_StaticMethods_getStringOption$$($JSCompiler_StaticMethods_getStringOption$self$$, $name$$68$$) {
  var $option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$_target$.getAttribute("data-" + $name$$68$$);
  $option$$3$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$68$$] !== $JSCompiler_alias_VOID$$ && ($option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$68$$]);
  return $option$$3$$
}
function $JSCompiler_StaticMethods_getNumberOption$$($JSCompiler_StaticMethods_getNumberOption$self$$, $name$$69$$) {
  var $option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$_target$.getAttribute("data-" + $name$$69$$);
  $option$$4$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$69$$] !== $JSCompiler_alias_VOID$$ && ($option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$69$$]);
  return Number($option$$4$$)
}
function $JSCompiler_StaticMethods_getBooleanOption$$($JSCompiler_StaticMethods_getBooleanOption$self$$, $name$$70$$) {
  var $option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$_target$.getAttribute("data-" + $name$$70$$);
  $option$$5$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$70$$] !== $JSCompiler_alias_VOID$$ && ($option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$70$$]);
  return!!$option$$5$$
}
$JSCompiler_prototypeAlias$$.init = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$destroy$ = $JSCompiler_emptyFn$$();
function $tuna$ui$ModuleContainer$$($target$$41$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$41$$);
  this.$__modules$ = [];
  this.$__instances$ = {}
}
$tuna$utils$extend$$($tuna$ui$ModuleContainer$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$ModuleContainer$$.prototype.$isActive$ = function $$tuna$ui$ModuleContainer$$$$$isActive$$() {
  return document.getElementById(this.$_target$.id) === this.$_target$
};
function $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_initModules$self$$, $target$$42$$) {
  $target$$42$$ = $target$$42$$ || $JSCompiler_StaticMethods_initModules$self$$.$_target$;
  $target$$42$$.id === $JSCompiler_alias_NULL$$ && ($target$$42$$.id = "container_" + $tuna$ui$__lastId$$++);
  var $instances$$2_targetId$$ = $target$$42$$.id;
  $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$] === $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$] = {});
  for(var $instances$$2_targetId$$ = $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$], $i$$36$$ = 0, $l$$23$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$.length, $type$$68$$ = $JSCompiler_alias_NULL$$, $module$$ = $JSCompiler_alias_NULL$$;$i$$36$$ < $l$$23$$;) {
    $type$$68$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$[$i$$36$$], $module$$ = $tuna$ui$__typeTable$$[$type$$68$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$type$$68$$] : $JSCompiler_alias_NULL$$, $module$$ !== $JSCompiler_alias_NULL$$ ? ($instances$$2_targetId$$[$type$$68$$] === $JSCompiler_alias_VOID$$ && ($instances$$2_targetId$$[$type$$68$$] = []), $instances$$2_targetId$$[$type$$68$$] = $instances$$2_targetId$$[$type$$68$$].concat($module$$.init($target$$42$$, 
    $JSCompiler_StaticMethods_initModules$self$$))) : alert('Unknown module "' + $type$$68$$ + '"'), $i$$36$$++
  }
}
function $JSCompiler_StaticMethods_getModuleInstanceByName$$($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$, $i$$37_type$$70$$, $name$$71$$) {
  var $l$$24_targetId$$2$$;
  $l$$24_targetId$$2$$ = $l$$24_targetId$$2$$ || $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$_target$.id;
  if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$24_targetId$$2$$] !== $JSCompiler_alias_VOID$$ && $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$24_targetId$$2$$][$i$$37_type$$70$$] !== $JSCompiler_alias_VOID$$) {
    $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$24_targetId$$2$$][$i$$37_type$$70$$];
    $i$$37_type$$70$$ = 0;
    for($l$$24_targetId$$2$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.length;$i$$37_type$$70$$ < $l$$24_targetId$$2$$;) {
      if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$[$i$$37_type$$70$$].getName() === $name$$71$$) {
        return $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$[$i$$37_type$$70$$]
      }
      $i$$37_type$$70$$++
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_destroyModules$$($JSCompiler_StaticMethods_destroyModules$self$$, $target$$43$$) {
  if($target$$43$$ === $JSCompiler_alias_VOID$$) {
    for(var $targetId$$3$$ in $JSCompiler_StaticMethods_destroyModules$self$$.$__instances$) {
      $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods_destroyModules$self$$, $targetId$$3$$)
    }
  }else {
    $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods_destroyModules$self$$, $target$$43$$.id)
  }
}
function $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods___destroyModulesById$self$$, $targetId$$4$$) {
  var $module$$1$$ = $JSCompiler_alias_NULL$$, $name$$72$$;
  for($name$$72$$ in $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$]) {
    $module$$1$$ = $tuna$ui$__typeTable$$[$name$$72$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$name$$72$$] : $JSCompiler_alias_NULL$$, $module$$1$$ !== $JSCompiler_alias_NULL$$ && $module$$1$$.$destroy$($JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$72$$]), $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$72$$].length = 0
  }
  delete $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$]
}
;var $tuna$ui$__lastId$$ = 0, $tuna$ui$__typeTable$$ = {}, $tuna$ui$__isolators$$ = [];
function $tuna$ui$popups$Popup$$($target$$44$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$44$$);
  this.$__isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$ui$popups$Popup$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$popups$Popup$$.prototype.init = function $$tuna$ui$popups$Popup$$$$init$() {
  if(!this.$__isInit$) {
    var $self$$3$$ = this;
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-close", "click", function($event$$15$$) {
      $tuna$dom$preventDefault$$($event$$15$$);
      $self$$3$$.close()
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-apply", "click", function($event$$16$$) {
      $tuna$dom$preventDefault$$($event$$16$$);
      $self$$3$$.apply()
    })
  }
};
$tuna$ui$popups$Popup$$.prototype.open = function $$tuna$ui$popups$Popup$$$$open$() {
  this.$dispatch$("open") && $tuna$dom$addClass$$(this.$_target$, "show")
};
$tuna$ui$popups$Popup$$.prototype.close = function $$tuna$ui$popups$Popup$$$$close$() {
  this.$dispatch$("close") && $tuna$dom$removeClass$$(this.$_target$, "show")
};
$tuna$ui$popups$Popup$$.prototype.apply = function $$tuna$ui$popups$Popup$$$$apply$() {
  this.$dispatch$("apply", $JSCompiler_StaticMethods___collectData$$(this)) && $tuna$dom$removeClass$$(this.$_target$, "show")
};
function $JSCompiler_StaticMethods___collectData$$($JSCompiler_StaticMethods___collectData$self_form$$) {
  $JSCompiler_StaticMethods___collectData$self_form$$ = $tuna$dom$selectOne$$("form.j-popup-form", $JSCompiler_StaticMethods___collectData$self_form$$.$_target$);
  return $JSCompiler_StaticMethods___collectData$self_form$$ !== $JSCompiler_alias_NULL$$ ? $tuna$ui$forms$serialize$$($JSCompiler_StaticMethods___collectData$self_form$$) : $JSCompiler_alias_NULL$$
}
;var $tuna$ui$popups$__idTable$$ = {}, $tuna$ui$popups$__lastId$$ = 0;
function $tuna$ui$popups$create$$($target$$45$$) {
  "" === $target$$45$$.id && ($target$$45$$.id = "popup_" + $tuna$ui$popups$__lastId$$++);
  if($tuna$ui$popups$__idTable$$[$target$$45$$.id] === $JSCompiler_alias_VOID$$) {
    var $popup$$ = new $tuna$ui$popups$Popup$$($target$$45$$);
    $popup$$.init();
    $tuna$ui$popups$__idTable$$[$target$$45$$.id] = $popup$$
  }
  return $tuna$ui$popups$__idTable$$[$target$$45$$.id]
}
var $tuna$ui$popups$__alert$$ = $JSCompiler_alias_NULL$$, $tuna$ui$popups$__alertMessage$$ = $JSCompiler_alias_NULL$$;
function $tuna$ui$popups$registerAlert$$() {
  var $target$$46$$ = $tuna$dom$selectOne$$("#alert_popup");
  $target$$46$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$ui$popups$__alert$$ = $tuna$ui$popups$create$$($target$$46$$), $tuna$ui$popups$__alert$$.init(), $tuna$ui$popups$__alertMessage$$ = $tuna$dom$selectOne$$(".j-message", $target$$46$$)) : $tuna$ui$popups$__alert$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__alert$$.$destroy$(), $tuna$ui$popups$__alertMessage$$ = $tuna$ui$popups$__alert$$ = $JSCompiler_alias_NULL$$)
}
function $tuna$ui$popups$alert$$($message$$10$$) {
  $tuna$ui$popups$__alert$$ !== $JSCompiler_alias_NULL$$ && $tuna$ui$popups$__alertMessage$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__alertMessage$$.innerHTML = $message$$10$$, $tuna$ui$popups$__alert$$.open())
}
var $tuna$ui$popups$__confirm$$ = $JSCompiler_alias_NULL$$, $tuna$ui$popups$__confirmMessage$$ = $JSCompiler_alias_NULL$$;
function $tuna$ui$popups$registerConfirm$$() {
  var $target$$47$$ = $tuna$dom$selectOne$$("#confirm_popup");
  $target$$47$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$ui$popups$__confirm$$ = $tuna$ui$popups$create$$($target$$47$$), $tuna$ui$popups$__confirm$$.init(), $tuna$ui$popups$__confirmMessage$$ = $tuna$dom$selectOne$$(".j-message", $target$$47$$)) : $tuna$ui$popups$__confirm$$ !== $JSCompiler_alias_NULL$$ && ($tuna$ui$popups$__confirm$$.$destroy$(), $tuna$ui$popups$__confirmMessage$$ = $tuna$ui$popups$__confirm$$ = $JSCompiler_alias_NULL$$)
}
function $tuna$ui$popups$confirm$$($callback$$30$$) {
  function $handler$$11$$($event$$17$$) {
    $callback$$30$$("apply" === $event$$17$$.$_type$);
    $tuna$ui$popups$__confirm$$.removeEventListener("apply", $handler$$11$$);
    $tuna$ui$popups$__confirm$$.removeEventListener("close", $handler$$11$$)
  }
  $tuna$ui$popups$__confirmMessage$$.innerHTML = "\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0444\u043e\u0440\u043c\u044b \u0442\u043e\u0440\u0442\u0430, \u0432\u0441\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u043e!";
  $tuna$ui$popups$__confirm$$.addEventListener("apply", $handler$$11$$);
  $tuna$ui$popups$__confirm$$.addEventListener("close", $handler$$11$$);
  $tuna$ui$popups$__confirm$$.open()
}
;function $tuna$ui$buttons$Button$$($target$$48$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$48$$);
  this.$_isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$ui$buttons$Button$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$buttons$Button$$.prototype.init = function $$tuna$ui$buttons$Button$$$$init$() {
  if(!this.$_isInit$) {
    this.$_isInit$ = $JSCompiler_alias_TRUE$$;
    var $self$$4$$ = this;
    $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$18$$) {
      $self$$4$$.isEnabled() ? $self$$4$$.$dispatch$("click") : $tuna$dom$stopPropagation$$($event$$18$$)
    })
  }
};
$tuna$ui$buttons$Button$$.prototype.setActive = function $$tuna$ui$buttons$Button$$$$setActive$($isActive$$) {
  $tuna$dom$setClassExist$$(this.$_target$, "active", $isActive$$)
};
function $tuna$ui$buttons$PopupButton$$($target$$49$$) {
  $tuna$ui$buttons$Button$$.call(this, $target$$49$$);
  this.$_popup$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$buttons$PopupButton$$, $tuna$ui$buttons$Button$$);
$tuna$ui$buttons$PopupButton$$.prototype.init = function $$tuna$ui$buttons$PopupButton$$$$init$() {
  var $popupId_popupTarget$$ = $JSCompiler_StaticMethods_getOption$$(this);
  $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && ($popupId_popupTarget$$ = $tuna$dom$selectOne$$("#" + $popupId_popupTarget$$), $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && (this.$_popup$ = $tuna$ui$popups$create$$($popupId_popupTarget$$)));
  var $self$$5$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$19$$) {
    $self$$5$$.isEnabled() ? $self$$5$$.$dispatch$("click") && $self$$5$$.$_popup$ !== $JSCompiler_alias_NULL$$ && $self$$5$$.$_popup$.open() : $tuna$dom$stopPropagation$$($event$$19$$)
  })
};
function $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getPopup$self$$) {
  return $JSCompiler_StaticMethods_getPopup$self$$.$_popup$
}
;function $tuna$ui$buttons$ButtonGroup$$($target$$50$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$50$$);
  this.$__defaultAction$ = $JSCompiler_alias_NULL$$;
  this.$__isPreventDefault$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "button-selector", ".j-button")
}
$tuna$utils$extend$$($tuna$ui$buttons$ButtonGroup$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$buttons$ButtonGroup$$.prototype.init = function $$tuna$ui$buttons$ButtonGroup$$$$init$() {
  var $self$$6$$ = this, $buttonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  $buttonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $buttonSelector$$, "click", function($event$$20$$) {
    $self$$6$$.$__isPreventDefault$ && $tuna$dom$preventDefault$$($event$$20$$);
    var $button$$ = $tuna$ui$buttons$create$$(this), $action$$3$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$, "action");
    $action$$3$$ === $JSCompiler_alias_NULL$$ && ($action$$3$$ = $self$$6$$.$__defaultAction$);
    $action$$3$$ !== $JSCompiler_alias_NULL$$ && ($self$$6$$.$dispatch$($action$$3$$, $button$$) || $tuna$dom$stopPropagation$$($event$$20$$))
  })
};
var $tuna$ui$buttons$__idTable$$ = {}, $tuna$ui$buttons$__lastId$$ = 0;
function $tuna$ui$buttons$create$$($target$$51$$) {
  "" === $target$$51$$.id && ($target$$51$$.id = "button_" + $tuna$ui$buttons$__lastId$$++);
  if($tuna$ui$buttons$__idTable$$[$target$$51$$.id] === $JSCompiler_alias_VOID$$) {
    var $button$$1$$ = new $tuna$ui$buttons$Button$$($target$$51$$);
    $button$$1$$.init();
    $tuna$ui$buttons$__idTable$$[$target$$51$$.id] = $button$$1$$
  }
  return $tuna$ui$buttons$__idTable$$[$target$$51$$.id]
}
;function $tuna$ui$flash$SWF$$($target$$52$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$52$$);
  this.$__movie$ = this.$__movieId$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "wmode", "opaque");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "menu", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-fullscreen", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-script-access", "always")
}
$tuna$utils$extend$$($tuna$ui$flash$SWF$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$flash$SWF$$.prototype.init = function $$tuna$ui$flash$SWF$$$$init$() {
  this.$__movieId$ = "swf_" + $tuna$ui$flash$__lastId$$++;
  this.$_target$.innerHTML = '<div id="' + this.$__movieId$ + '"></div>';
  swfobject.embedSWF($JSCompiler_StaticMethods_getStringOption$$(this, "src"), this.$__movieId$, $JSCompiler_StaticMethods_getNumberOption$$(this, "width"), $JSCompiler_StaticMethods_getNumberOption$$(this, "height"), "10.0.0", $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getStringOption$$(this, "flashvars"), {wmode:$JSCompiler_StaticMethods_getStringOption$$(this, "wmode"), allowfullscreen:$JSCompiler_StaticMethods_getStringOption$$(this, "allow-fullscreen"), allowscriptaccess:$JSCompiler_StaticMethods_getStringOption$$(this, 
  "allow-script-access"), menu:$JSCompiler_StaticMethods_getStringOption$$(this, "menu")})
};
$tuna$ui$flash$SWF$$.prototype.$destroy$ = function $$tuna$ui$flash$SWF$$$$$destroy$$() {
  this.$_target$.innerHTML = "";
  this.$__movie$ = this.$__movieId$ = $JSCompiler_alias_NULL$$
};
$tuna$ui$flash$SWF$$.prototype.reset = function $$tuna$ui$flash$SWF$$$$reset$() {
  this.$destroy$();
  this.init()
};
var $tuna$ui$flash$__lastId$$ = 0;
function $tuna$ui$forms$Form$$($target$$53$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$53$$);
  this.$__formMessage$ = $JSCompiler_alias_NULL$$;
  this.$__inputTable$ = {};
  this.$__recordName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$forms$Form$$, $tuna$ui$ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$forms$Form$$.prototype;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$() {
  this.$__recordName$ = $JSCompiler_StaticMethods_getStringOption$$(this, "record-type");
  this.$__formMessage$ = $tuna$dom$selectOne$$(".j-form-message", this.$_target$);
  var $callbackInput$$ = document.createElement("input");
  $callbackInput$$.type = "hidden";
  $callbackInput$$.name = "__callback";
  this.$_target$.appendChild($callbackInput$$);
  var $self$$7$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "submit", function($event$$21$$) {
    $self$$7$$.isEnabled() ? ($callbackInput$$.value = "form_callback" + (Math.random() + "").substr(2), window[$callbackInput$$.value] = function $window$$callbackInput$$$value$($data$$inline_180_errors$$inline_182_response$$) {
      var $data$$inline_180_errors$$inline_182_response$$ = JSON.parse(JSON.stringify($data$$inline_180_errors$$inline_182_response$$)), $i$$inline_454_response$$inline_181$$ = $data$$inline_180_errors$$inline_182_response$$.response, $data$$inline_180_errors$$inline_182_response$$ = $data$$inline_180_errors$$inline_182_response$$.errors;
      if($i$$inline_454_response$$inline_181$$ !== $JSCompiler_alias_VOID$$) {
        $self$$7$$.$__recordName$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_454_response$$inline_181$$ = $tuna$rest$populateRecords$$($i$$inline_454_response$$inline_181$$, $self$$7$$.$__recordName$)), $self$$7$$.$dispatch$("result", $i$$inline_454_response$$inline_181$$)
      }else {
        if($data$$inline_180_errors$$inline_182_response$$ !== $JSCompiler_alias_VOID$$) {
          for(var $i$$inline_454_response$$inline_181$$ = 0, $l$$inline_455$$ = $data$$inline_180_errors$$inline_182_response$$.length, $error$$inline_456_name$$inline_486$$ = $JSCompiler_alias_NULL$$;$i$$inline_454_response$$inline_181$$ < $l$$inline_455$$;) {
            $error$$inline_456_name$$inline_486$$ = $data$$inline_180_errors$$inline_182_response$$[$i$$inline_454_response$$inline_181$$];
            if($error$$inline_456_name$$inline_486$$.param !== $JSCompiler_alias_VOID$$) {
              var $JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$ = $self$$7$$, $message$$inline_458_message$$inline_492$$ = $error$$inline_456_name$$inline_486$$.message, $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$ = $JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$;
              var $error$$inline_456_name$$inline_486$$ = $error$$inline_456_name$$inline_486$$.param, $result$$inline_487$$ = $JSCompiler_alias_NULL$$;
              if($JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$.$__inputTable$[$error$$inline_456_name$$inline_486$$] === $JSCompiler_alias_VOID$$) {
                var $input$$inline_489_inputWrapper$$inline_488$$ = $tuna$dom$selectOne$$(".j-" + $error$$inline_456_name$$inline_486$$ + "-input", $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$.$_target$);
                $input$$inline_489_inputWrapper$$inline_488$$ !== $JSCompiler_alias_NULL$$ && ($input$$inline_489_inputWrapper$$inline_488$$ = new $tuna$ui$forms$FormInput$$($input$$inline_489_inputWrapper$$inline_488$$), $input$$inline_489_inputWrapper$$inline_488$$.init(), $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$.$__inputTable$[$error$$inline_456_name$$inline_486$$] = $input$$inline_489_inputWrapper$$inline_488$$)
              }
              $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$.$__inputTable$[$error$$inline_456_name$$inline_486$$] !== $JSCompiler_alias_VOID$$ && ($result$$inline_487$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$.$__inputTable$[$error$$inline_456_name$$inline_486$$]);
              $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$ = $result$$inline_487$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_485_formInput$$inline_459$$, $tuna$dom$addClass$$($JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$.$_target$, "error"), $JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$.$__message$ !== 
              $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$.$__message$.innerHTML = $message$$inline_458_message$$inline_492$$)) : $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showInputError$self$$inline_457_JSCompiler_StaticMethods_showErrorMessage$self$$inline_491$$, $message$$inline_458_message$$inline_492$$)
            }else {
              $JSCompiler_StaticMethods___showErrorMessage$$($self$$7$$, $error$$inline_456_name$$inline_486$$.message)
            }
            $i$$inline_454_response$$inline_181$$++
          }
          $self$$7$$.$dispatch$("error", $data$$inline_180_errors$$inline_182_response$$)
        }
      }
      window[$callbackInput$$.value] = $JSCompiler_alias_VOID$$
    }, $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$21$$.type, $event$$21$$)) : $tuna$dom$preventDefault$$($event$$21$$)
  });
  $tuna$dom$addEventListener$$(this.$_target$, "reset", function($event$$22$$) {
    $self$$7$$.isEnabled() ? $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$22$$.type, $event$$22$$) : $tuna$dom$preventDefault$$($event$$22$$)
  })
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$49_name$$73$$) {
  var $result$$13$$ = $JSCompiler_alias_NULL$$, $element$$49_name$$73$$ = this.$_target$.elements[$element$$49_name$$73$$];
  if($element$$49_name$$73$$ !== $JSCompiler_alias_VOID$$) {
    var $isCheck$$ = $JSCompiler_alias_FALSE$$;
    if($element$$49_name$$73$$.value === $JSCompiler_alias_VOID$$) {
      for(var $i$$38$$ = 0, $l$$25$$ = $element$$49_name$$73$$.length, $result$$13$$ = [];$i$$38$$ < $l$$25$$;) {
        $isCheck$$ = "checkbox" === $element$$49_name$$73$$[$i$$38$$].type || "radio" === $element$$49_name$$73$$[$i$$38$$].type, (!$isCheck$$ || $isCheck$$ && $element$$49_name$$73$$[$i$$38$$].checked) && $result$$13$$.push($element$$49_name$$73$$[$i$$38$$].value), $i$$38$$++
      }
    }else {
      if($isCheck$$ = "checkbox" === $element$$49_name$$73$$.type || "radio" === $element$$49_name$$73$$.type, !$isCheck$$ || $isCheck$$ && $element$$49_name$$73$$.checked) {
        $result$$13$$ = $element$$49_name$$73$$.value
      }
    }
  }
  return $result$$13$$
};
function $JSCompiler_StaticMethods_setValue$$($JSCompiler_StaticMethods_setValue$self_element$$50$$, $i$$39_name$$74$$, $index$$53_value$$58$$) {
  $JSCompiler_StaticMethods_setValue$self_element$$50$$ = $JSCompiler_StaticMethods_setValue$self_element$$50$$.$_target$.elements[$i$$39_name$$74$$];
  if($JSCompiler_StaticMethods_setValue$self_element$$50$$ !== $JSCompiler_alias_VOID$$) {
    if($JSCompiler_StaticMethods_setValue$self_element$$50$$.value === $JSCompiler_alias_VOID$$) {
      var $i$$39_name$$74$$ = 0, $l$$26$$ = $JSCompiler_StaticMethods_setValue$self_element$$50$$.length, $stringValue$$1$$ = "", $arrayValue$$ = [];
      $index$$53_value$$58$$ instanceof Array ? ($arrayValue$$ = $index$$53_value$$58$$.slice(0), $stringValue$$1$$ = $index$$53_value$$58$$.join(",")) : ($stringValue$$1$$ = $index$$53_value$$58$$ + "", $arrayValue$$ = [$stringValue$$1$$]);
      for($index$$53_value$$58$$ = -1;$i$$39_name$$74$$ < $l$$26$$;) {
        "radio" === $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].type ? $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].checked = $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].value === $stringValue$$1$$ : "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].type ? ($index$$53_value$$58$$ = $tuna$utils$indexOf$$($JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].value, 
        $arrayValue$$), $JSCompiler_StaticMethods_setValue$self_element$$50$$[$i$$39_name$$74$$].checked = -1 !== $index$$53_value$$58$$, -1 !== $index$$53_value$$58$$ && $arrayValue$$.splice($index$$53_value$$58$$, 1)) : $JSCompiler_StaticMethods_setValue$self_element$$50$$.value = $stringValue$$1$$, $i$$39_name$$74$$++
      }
    }else {
      "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$50$$.type || "radio" === $JSCompiler_StaticMethods_setValue$self_element$$50$$.type ? $JSCompiler_StaticMethods_setValue$self_element$$50$$.checked = $JSCompiler_StaticMethods_setValue$self_element$$50$$.value === $index$$53_value$$58$$ : $JSCompiler_StaticMethods_setValue$self_element$$50$$.value = $index$$53_value$$58$$
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
function $JSCompiler_StaticMethods___prepareTo$$($JSCompiler_StaticMethods___prepareTo$self$$, $JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$, $event$$23$$) {
  if($JSCompiler_StaticMethods___prepareTo$self$$.$dispatch$($JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$)) {
    $JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$.innerHTML = "", $tuna$dom$addClass$$($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$, "hide"));
    for(var $name$$inline_187$$ in $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$) {
      $JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$ = $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$[$name$$inline_187$$], $tuna$dom$removeClass$$($JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$.$_target$, "error"), $JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$.$__message$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$.$__message$.innerHTML = $JSCompiler_StaticMethods_cleanup$self$$inline_461_type$$73$$.$__defaultMessage$)
    }
  }else {
    $event$$23$$ !== $JSCompiler_alias_VOID$$ && $tuna$dom$preventDefault$$($event$$23$$)
  }
}
function $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showErrorMessage$self$$, $message$$12$$) {
  $JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$.innerHTML += $message$$12$$ + "<br />", $tuna$dom$removeClass$$($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$, "hide"))
}
;function $tuna$ui$forms$FormInput$$($target$$54$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$54$$);
  this.$__message$ = $JSCompiler_alias_NULL$$;
  this.$__defaultMessage$ = ""
}
$tuna$utils$extend$$($tuna$ui$forms$FormInput$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$forms$FormInput$$.prototype.init = function $$tuna$ui$forms$FormInput$$$$init$() {
  this.$__message$ = $tuna$dom$selectOne$$(".j-message", this.$_target$);
  this.$__message$ !== $JSCompiler_alias_NULL$$ && (this.$__defaultMessage$ = this.$__message$.innerHTML)
};
function $tuna$ui$forms$InputFilter$$($target$$55$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$55$$);
  this.$_input$ = this.$_currentData$ = this.$_data$ = $JSCompiler_alias_NULL$$;
  this.$_itemSerializeCallback$ = function $this$$_itemSerializeCallback$$($item$$18$$) {
    return $item$$18$$.name !== $JSCompiler_alias_VOID$$ ? "" + $item$$18$$.name : ""
  };
  this.$_transformer$ = new $tuna$ui$transformers$TemplateTransformer$$($target$$55$$)
}
$tuna$utils$extend$$($tuna$ui$forms$InputFilter$$, $tuna$ui$ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$forms$InputFilter$$.prototype;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$() {
  this.$_input$ = $tuna$dom$selectOne$$("input.j-filtration", this.$_target$);
  if(this.$_input$ !== $JSCompiler_alias_NULL$$) {
    var $self$$8$$ = this, $lastValue$$ = $JSCompiler_alias_NULL$$;
    $tuna$dom$addEventListener$$(this.$_input$, "keyup", function() {
      this.value !== $lastValue$$ && ($self$$8$$.filter(this.value), $lastValue$$ = this.value)
    })
  }
  this.$_transformer$.init()
};
function $JSCompiler_StaticMethods_setItemSerializeCallback$$($JSCompiler_StaticMethods_setItemSerializeCallback$self$$, $callback$$31$$) {
  $JSCompiler_StaticMethods_setItemSerializeCallback$self$$.$_itemSerializeCallback$ = $callback$$31$$
}
$JSCompiler_prototypeAlias$$.setData = function $$JSCompiler_prototypeAlias$$$setData$($data$$34$$) {
  this.$_currentData$ = this.$_data$ = $data$$34$$;
  this.update()
};
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($term$$) {
  this.$_currentData$ = $JSCompiler_StaticMethods__filterData$$(this, $term$$);
  this.update()
};
$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$() {
  $JSCompiler_StaticMethods_applyTransform$$(this.$_transformer$, this.$_currentData$)
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$_input$.value = "";
  this.filter("")
};
function $JSCompiler_StaticMethods__filterData$$($JSCompiler_StaticMethods__filterData$self$$, $term$$1$$) {
  var $result$$15$$ = [];
  if(!$term$$1$$ || 0 === $term$$1$$.length) {
    $result$$15$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.slice(0)
  }else {
    for(var $needle$$ = $term$$1$$.toUpperCase(), $i$$41$$ = 0, $l$$28$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.length, $core$$ = $JSCompiler_alias_NULL$$;$i$$41$$ < $l$$28$$;) {
      $core$$ = $JSCompiler_StaticMethods__filterData$self$$.$_itemSerializeCallback$($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$41$$]), -1 !== $core$$.toUpperCase().indexOf($needle$$) && $result$$15$$.push($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$41$$]), $i$$41$$++
    }
  }
  return $result$$15$$
}
;function $tuna$ui$forms$Autocomplete$$($target$$56$$) {
  $tuna$ui$forms$InputFilter$$.call(this, $target$$56$$);
  this.$__selectedData$ = this.$__listBody$ = $JSCompiler_alias_NULL$$;
  this.$__selectionGroup$ = new $tuna$ui$selection$SelectionGroup$$($target$$56$$, $JSCompiler_alias_NULL$$)
}
$tuna$utils$extend$$($tuna$ui$forms$Autocomplete$$, $tuna$ui$forms$InputFilter$$);
$tuna$ui$forms$Autocomplete$$.prototype.init = function $$tuna$ui$forms$Autocomplete$$$$init$() {
  $tuna$ui$forms$InputFilter$$.prototype.init.call(this);
  var $self$$9$$ = this;
  this.$__listBody$ = $tuna$dom$selectOne$$(".j-autocomplete-body", this.$_target$);
  if(this.$__listBody$ !== $JSCompiler_alias_NULL$$ && this.$_input$ !== $JSCompiler_alias_NULL$$) {
    var $isOpen$$ = $JSCompiler_alias_FALSE$$;
    $tuna$dom$addEventListener$$(this.$_input$, "focus", function() {
      $isOpen$$ || (document.body !== $JSCompiler_alias_NULL$$ && $tuna$dom$addOneEventListener$$(document.body, "click", function() {
        var $value$$inline_195$$ = $self$$9$$.$_input$.value;
        $self$$9$$.$__selectedData$ = $JSCompiler_alias_NULL$$;
        var $dataItem$$inline_196$$ = $JSCompiler_StaticMethods__filterData$$($self$$9$$, $value$$inline_195$$).shift();
        $dataItem$$inline_196$$ !== $JSCompiler_alias_VOID$$ && $self$$9$$.$_itemSerializeCallback$($dataItem$$inline_196$$) === $value$$inline_195$$ && $JSCompiler_StaticMethods___selectData$$($self$$9$$, $dataItem$$inline_196$$);
        $self$$9$$.$__selectedData$ === $JSCompiler_alias_NULL$$ && $self$$9$$.clear();
        $tuna$dom$addClass$$($self$$9$$.$__listBody$, "hide");
        $isOpen$$ = $JSCompiler_alias_FALSE$$
      }), $self$$9$$.filter(""), $tuna$dom$removeClass$$($self$$9$$.$__listBody$, "hide"), $isOpen$$ = $JSCompiler_alias_TRUE$$)
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-autocomplete-item", "click", function($event$$24$$) {
      var $index$$54$$ = $self$$9$$.$__selectionGroup$.$getItemIndex$(this);
      $index$$54$$ !== $JSCompiler_alias_NULL$$ ? $self$$9$$.$selectIndex$($index$$54$$) : $tuna$dom$stopPropagation$$($event$$24$$)
    });
    $tuna$dom$addEventListener$$(this.$_input$, "click", function($event$$25$$) {
      $tuna$dom$stopPropagation$$($event$$25$$)
    });
    $JSCompiler_StaticMethods_setOption$$(this.$__selectionGroup$, "item-selector", ".j-autocomplete-item");
    this.$__selectionGroup$.init()
  }
};
$tuna$ui$forms$Autocomplete$$.prototype.$selectIndex$ = function $$tuna$ui$forms$Autocomplete$$$$$selectIndex$$($index$$55$$) {
  0 < this.$_currentData$.length && $JSCompiler_StaticMethods___selectData$$(this, this.$_currentData$[$index$$55$$])
};
function $JSCompiler_StaticMethods___selectData$$($JSCompiler_StaticMethods___selectData$self$$, $dataItem$$1$$) {
  $JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ !== $dataItem$$1$$ && ($JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ = $dataItem$$1$$, $JSCompiler_StaticMethods___selectData$self$$.$_input$.value = $JSCompiler_StaticMethods___selectData$self$$.$_itemSerializeCallback$($dataItem$$1$$), $JSCompiler_StaticMethods___selectData$self$$.$dispatch$("change"))
}
$tuna$ui$forms$Autocomplete$$.prototype.$clearSelection$ = function $$tuna$ui$forms$Autocomplete$$$$$clearSelection$$() {
  this.$__selectedData$ !== $JSCompiler_alias_NULL$$ && (this.$__selectedData$ = $JSCompiler_alias_NULL$$, this.$dispatch$("change"))
};
$tuna$ui$forms$Autocomplete$$.prototype.update = function $$tuna$ui$forms$Autocomplete$$$$update$() {
  $tuna$ui$forms$InputFilter$$.prototype.update.call(this);
  this.$__selectionGroup$.$_selectionView$.update();
  this.$clearSelection$()
};
function $tuna$ui$forms$serialize$$($elements$$4_formElement$$) {
  for(var $result$$16$$ = {}, $elements$$4_formElement$$ = $elements$$4_formElement$$.elements, $i$$42$$ = 0, $l$$29$$ = $elements$$4_formElement$$.length, $name$$78$$ = $JSCompiler_alias_NULL$$;$i$$42$$ < $l$$29$$;) {
    $name$$78$$ = $elements$$4_formElement$$[$i$$42$$].name, $result$$16$$[$name$$78$$] !== $JSCompiler_alias_VOID$$ ? ($result$$16$$[$name$$78$$] instanceof Array || ($result$$16$$[$name$$78$$] = [$result$$16$$[$name$$78$$]]), $result$$16$$[$name$$78$$].push($elements$$4_formElement$$[$i$$42$$].value)) : $result$$16$$[$name$$78$$] = $elements$$4_formElement$$[$i$$42$$].value, $i$$42$$++
  }
  return $result$$16$$
}
;function $tuna$ui$transformers$TemplateTransformer$$($target$$57$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$57$$);
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$transformers$TemplateTransformer$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$transformers$TemplateTransformer$$.prototype.init = function $$tuna$ui$transformers$TemplateTransformer$$$$init$() {
  var $templateId$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "template-id"), $settings$$22$$;
  $templateId$$ !== $JSCompiler_alias_NULL$$ ? ($tuna$tmpl$__settingsTable$$[$templateId$$] === $JSCompiler_alias_VOID$$ && ($tuna$tmpl$__settingsTable$$[$templateId$$] = $JSCompiler_StaticMethods_buildSettings$$($tuna$tmpl$__markupBuilder$$, $templateId$$)), $settings$$22$$ = $tuna$tmpl$__settingsTable$$[$templateId$$]) : $settings$$22$$ = $JSCompiler_alias_NULL$$;
  $settings$$22$$ !== $JSCompiler_alias_NULL$$ ? this.$__template$ = $JSCompiler_StaticMethods_compileTemplate$$($tuna$tmpl$__compiler$$, $settings$$22$$, this.$_target$) : alert("Unknown template " + $templateId$$)
};
function $JSCompiler_StaticMethods_applyTransform$$($JSCompiler_StaticMethods_applyTransform$self$$, $data$$36$$) {
  $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$applyData$(new $tuna$tmpl$data$DataNode$$($data$$36$$));
  if($JSCompiler_StaticMethods_applyTransform$self$$.$__transformHandler$ !== $JSCompiler_alias_NULL$$) {
    for(var $JSCompiler_StaticMethods_handleTransformComplete$self$$inline_202$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__transformHandler$, $createdElements$$inline_203$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__createdChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__createdChildren$.length), $removedElements$$inline_204$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__removedChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__removedChildren$.length), 
    $i$$inline_205$$ = 0, $l$$inline_206$$ = $createdElements$$inline_203$$.length;$i$$inline_205$$ < $l$$inline_206$$;) {
      $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_202$$.$_container$, $createdElements$$inline_203$$[$i$$inline_205$$]), $i$$inline_205$$++
    }
    $i$$inline_205$$ = 0;
    for($l$$inline_206$$ = $removedElements$$inline_204$$.length;$i$$inline_205$$ < $l$$inline_206$$;) {
      $JSCompiler_StaticMethods_destroyModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_202$$.$_container$, $removedElements$$inline_204$$[$i$$inline_205$$]), $i$$inline_205$$++
    }
  }
}
$tuna$ui$transformers$TemplateTransformer$$.prototype.$destroy$ = function $$tuna$ui$transformers$TemplateTransformer$$$$$destroy$$() {
  this.$__template$.$destroy$();
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
};
$tuna$ui$transformers$TemplateTransformer$$.prototype.reset = function $$tuna$ui$transformers$TemplateTransformer$$$$reset$() {
  var $transformHandler$$ = this.$__transformHandler$;
  this.$destroy$();
  this.init();
  this.$__transformHandler$ = $transformHandler$$
};
function $tuna$ui$selection$AbstractSelectionGroup$$($target$$58$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$58$$);
  this.$_selectionRule$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$AbstractSelectionGroup$$, $tuna$ui$ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$AbstractSelectionGroup$$.prototype;
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$62$$) {
  return this.$_selectionRule$.$isIndexEnabled$($index$$62$$)
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$20$$) {
  return this.$_itemsCollection$.$getItemIndex$($item$$20$$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$63$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$63$$)
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$_selectionRule$.$getSelectedIndexes$()
};
function $JSCompiler_StaticMethods_getLastSelectedIndex$$($JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$) {
  $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$ = $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.$_selectionRule$.$getSelectedIndexes$();
  return 0 < $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.length ? $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.pop() : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$64$$) {
  return this.$_selectionRule$.$selectIndex$($index$$64$$)
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$_selectionRule$.$clearSelection$()
};
function $tuna$ui$selection$SelectionGroup$$($target$$59$$, $indexAttribute$$) {
  $tuna$ui$selection$AbstractSelectionGroup$$.call(this, $target$$59$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-selection-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "index-attribute", $indexAttribute$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "is-multiple", $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-class", "active");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-event", "click")
}
$tuna$utils$extend$$($tuna$ui$selection$SelectionGroup$$, $tuna$ui$selection$AbstractSelectionGroup$$);
$tuna$ui$selection$SelectionGroup$$.prototype.init = function $$tuna$ui$selection$SelectionGroup$$$$init$() {
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
function $tuna$ui$selection$Navigation$$($target$$60$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$60$$);
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
$tuna$utils$extend$$($tuna$ui$selection$Navigation$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$selection$Navigation$$.prototype.init = function $$tuna$ui$selection$Navigation$$$$init$() {
  this.$__navigationRule$ = new $tuna$ui$selection$rule$NavigationSelectionRule$$;
  var $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ = new $tuna$ui$selection$items$NamedElementsCollection$$("data-name"), $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$), $className$$inline_464_l$$inline_233_selector$$inline_467$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$.$_selectionClass$ = $className$$inline_464_l$$inline_233_selector$$inline_467$$;
  $className$$inline_464_l$$inline_233_selector$$inline_467$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$.$_itemSelector$ = $className$$inline_464_l$$inline_233_selector$$inline_467$$;
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$.$_selectionRule$ = this.$__navigationRule$;
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$.$setItemsCollection$($buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$);
  this.$__navigationRule$.$_eventDispatcher$ = this;
  this.$__navigationRule$.$_selectionView$ = $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$;
  this.$__navigationRule$.$setItemsCollection$($buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$);
  this.$__navigationRule$.$setNavigation$(this);
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$.update();
  $JSCompiler_StaticMethods___initControls$$(this);
  $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "menu-selector");
  $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  if($i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ !== $JSCompiler_alias_NULL$$ && $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ = $tuna$dom$selectOne$$($i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$, this.$_target$), $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ !== 
  $JSCompiler_alias_NULL$$)) {
    for(var $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ = $tuna$dom$select$$($buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$, $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$), $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ = 0, $className$$inline_464_l$$inline_233_selector$$inline_467$$ = $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$.length, 
    $href$$inline_234_index$$inline_235$$ = $JSCompiler_alias_NULL$$, $button$$inline_236$$ = $href$$inline_234_index$$inline_235$$ = $JSCompiler_alias_NULL$$;$i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$ < $className$$inline_464_l$$inline_233_selector$$inline_467$$;) {
      $button$$inline_236$$ = $tuna$ui$buttons$create$$($buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$[$i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$]), $href$$inline_234_index$$inline_235$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$inline_236$$, "href"), $href$$inline_234_index$$inline_235$$ !== $JSCompiler_alias_NULL$$ && ($href$$inline_234_index$$inline_235$$ = $href$$inline_234_index$$inline_235$$.split("/").shift(), 
      this.$__menuLinks$[$href$$inline_234_index$$inline_235$$] === $JSCompiler_alias_VOID$$ && (this.$__menuLinks$[$href$$inline_234_index$$inline_235$$] = []), this.$__menuLinks$[$href$$inline_234_index$$inline_235$$].push($button$$inline_236$$)), $i$$inline_232_menu$$inline_230_menuSelector$$inline_228_selectionView$$inline_225$$++
    }
  }
  $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ = this.$__navigationRule$.$__currentIndex$;
  $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateMenu$$(this, $buttonSelector$$inline_229_buttons$$inline_231_currentIndex$$inline_237_itemsCollection$$inline_224$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods___initControls$$($JSCompiler_StaticMethods___initControls$self$$) {
  var $controls$$ = new $tuna$ui$buttons$ButtonGroup$$($JSCompiler_StaticMethods___initControls$self$$.$_target$);
  $JSCompiler_StaticMethods_setOption$$($controls$$, "button-selector", ".j-navigation-link");
  $controls$$.$__defaultAction$ = "navigate";
  $controls$$.addEventListener("navigate", function($event$$26$$, $button$$2$$) {
    $event$$26$$.preventDefault();
    var $index$$66$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$2$$, "href");
    if($index$$66$$ !== $JSCompiler_alias_NULL$$) {
      for(var $result$$inline_479$$ = {}, $attrs$$inline_480$$ = $button$$2$$.$_target$.attributes, $i$$inline_481$$ = 0, $l$$inline_482$$ = $attrs$$inline_480$$.length;$i$$inline_481$$ < $l$$inline_482$$;) {
        0 === $attrs$$inline_480$$[$i$$inline_481$$].name.indexOf("data-") && ($result$$inline_479$$[$attrs$$inline_480$$[$i$$inline_481$$].name.substr(5)] = $attrs$$inline_480$$[$i$$inline_481$$].value), $i$$inline_481$$++
      }
      delete $result$$inline_479$$.href;
      $JSCompiler_StaticMethods___initControls$self$$.navigate($index$$66$$, $result$$inline_479$$)
    }
  });
  $controls$$.addEventListener("back", function($event$$27$$) {
    $event$$27$$.preventDefault();
    $JSCompiler_StaticMethods___initControls$self$$.back()
  });
  $controls$$.init()
}
function $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$, $i$$44_path$$9$$, $isSelected$$) {
  if($i$$44_path$$9$$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.$__menuLinks$[$i$$44_path$$9$$], $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ !== $JSCompiler_alias_VOID$$)) {
    for(var $i$$44_path$$9$$ = 0, $l$$31$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.length;$i$$44_path$$9$$ < $l$$31$$;) {
      $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$[$i$$44_path$$9$$].setActive($isSelected$$), $i$$44_path$$9$$++
    }
  }
}
function $JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$) {
  var $result$$17$$ = [], $index$$68$$ = $JSCompiler_StaticMethods_getPathDesc$self$$.$__navigationRule$.$__currentIndex$;
  $index$$68$$ !== $JSCompiler_alias_NULL$$ && ($result$$17$$.push($index$$68$$), $JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$68$$] !== $JSCompiler_alias_VOID$$ && ($result$$17$$ = $result$$17$$.concat($JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$68$$]))));
  return $result$$17$$
}
function $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$) {
  var $result$$18$$ = [];
  $JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$ !== $JSCompiler_alias_NULL$$ && ($result$$18$$.push($JSCompiler_StaticMethods_getRelatedPath$self$$.getName()), $result$$18$$ = $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$).concat($result$$18$$));
  return $result$$18$$
}
$tuna$ui$selection$Navigation$$.prototype.$getRoot$ = function $$tuna$ui$selection$Navigation$$$$$getRoot$$() {
  return this.$__parent$ === $JSCompiler_alias_NULL$$ ? this : this.$__parent$.$getRoot$()
};
$tuna$ui$selection$Navigation$$.prototype.back = function $$tuna$ui$selection$Navigation$$$$back$() {
  this.$__parent$ === $JSCompiler_alias_NULL$$ ? 0 < this.$__history$.length && (this.$__currentState$ = this.$__history$.pop(), $JSCompiler_StaticMethods_navigatePath$$(this, this.$__currentState$.$__path$.slice(0), this.$__currentState$.getData())) : this.$getRoot$().back()
};
$tuna$ui$selection$Navigation$$.prototype.navigate = function $$tuna$ui$selection$Navigation$$$$navigate$($path$$10$$, $data$$38$$) {
  if($path$$10$$ instanceof Array) {
    this.$__parent$ === $JSCompiler_alias_NULL$$ ? (this.$__currentState$ === $JSCompiler_alias_NULL$$ && (this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this))), $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$38$$), this.$__history$.push(this.$__currentState$), this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this), $data$$38$$)) : $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$38$$)
  }else {
    var $parsedPath$$ = $path$$10$$.split("/");
    0 !== $path$$10$$.indexOf("/") && ($parsedPath$$ = $JSCompiler_StaticMethods_getRelatedPath$$(this).concat($parsedPath$$));
    this.$getRoot$().navigate($parsedPath$$, $data$$38$$)
  }
};
function $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$, $path$$11$$, $data$$39$$) {
  for(var $index$$69$$ = $path$$11$$.shift();"" === $index$$69$$ && 0 < $path$$11$$.length;) {
    $index$$69$$ = $path$$11$$.shift()
  }
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.navigate($index$$69$$, $data$$39$$ || $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_TRUE$$);
  if($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$69$$] !== $JSCompiler_alias_VOID$$) {
    return $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$69$$], $path$$11$$, $data$$39$$)
  }
}
function $NavigationState$$($path$$12$$, $data$$40$$) {
  this.$__path$ = $path$$12$$;
  this.$__data$ = $data$$40$$ || $JSCompiler_alias_NULL$$
}
$NavigationState$$.prototype.$serialize$ = function $$NavigationState$$$$$serialize$$() {
  var $result$$19$$ = "";
  this.$__data$ !== $JSCompiler_alias_NULL$$ && ($result$$19$$ = $tuna$utils$__splitUrlData$$(this.$__data$).join("&"));
  "" !== $result$$19$$ && ($result$$19$$ = "?" + $result$$19$$);
  return"/" + this.$__path$.join("/") + $result$$19$$
};
$NavigationState$$.prototype.getData = $JSCompiler_get$$("$__data$");
function $tuna$ui$selection$Carousel$$($target$$61$$) {
  $tuna$ui$selection$SelectionGroup$$.call(this, $target$$61$$, $JSCompiler_alias_NULL$$);
  this.$__shiftIndex$ = -1;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-carousel-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "next-button-selector", ".j-carousel-next");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "back-button-selector", ".j-carousel-back")
}
$tuna$utils$extend$$($tuna$ui$selection$Carousel$$, $tuna$ui$selection$SelectionGroup$$);
$tuna$ui$selection$Carousel$$.prototype.init = function $$tuna$ui$selection$Carousel$$$$init$() {
  $tuna$ui$selection$SelectionGroup$$.prototype.init.call(this);
  var $self$$11$$ = this;
  this.$__shiftIndex$ = Number($JSCompiler_StaticMethods_getLastSelectedIndex$$(this));
  var $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "next-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$28$$) {
    $tuna$dom$preventDefault$$($event$$28$$);
    $self$$11$$.next()
  });
  $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "back-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$29$$) {
    $tuna$dom$preventDefault$$($event$$29$$);
    $self$$11$$.back()
  })
};
$tuna$ui$selection$Carousel$$.prototype.next = function $$tuna$ui$selection$Carousel$$$$next$() {
  this.$__shiftIndex$++;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = 0);
  this.$selectIndex$(this.$__shiftIndex$)
};
$tuna$ui$selection$Carousel$$.prototype.back = function $$tuna$ui$selection$Carousel$$$$back$() {
  this.$__shiftIndex$--;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = this.$_itemsCollection$.$getItemsCount$() - 1);
  this.$selectIndex$(this.$__shiftIndex$)
};
function $tuna$ui$selection$items$ElementsCollection$$() {
  this.$__items$ = []
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$items$ElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$23$$) {
  return this.$__items$.push($item$$23$$) - 1
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$24$$) {
  return $tuna$utils$indexOf$$($item$$24$$, this.$__items$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$71$$) {
  return this.$__items$[$index$$71$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$.length = 0
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  return this.$__items$.length
};
function $tuna$ui$selection$items$NamedElementsCollection$$($indexAttribute$$2$$) {
  this.$__indexAttribute$ = $indexAttribute$$2$$;
  this.$__items$ = {}
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$items$NamedElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$25$$) {
  var $index$$72$$ = $item$$25$$.getAttribute(this.$__indexAttribute$);
  $index$$72$$ !== $JSCompiler_alias_NULL$$ && (this.$__items$[$index$$72$$] = $item$$25$$);
  return $index$$72$$
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($index$$73_item$$26$$) {
  $index$$73_item$$26$$ = $index$$73_item$$26$$.getAttribute(this.$__indexAttribute$);
  return $index$$73_item$$26$$ !== $JSCompiler_alias_NULL$$ && this.$__items$[$index$$73_item$$26$$] !== $JSCompiler_alias_VOID$$ ? $index$$73_item$$26$$ : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$74$$) {
  return this.$__items$[$index$$74$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$ = {}
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  var $i$$46$$ = 0, $_$$;
  for($_$$ in this.$__items$) {
    $i$$46$$++
  }
  return $i$$46$$
};
function $tuna$ui$selection$rule$AbstractSelectionRule$$() {
  this.$_eventDispatcher$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$;
  this.$_disabledIndexes$ = []
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$rule$AbstractSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setItemsCollection$ = function $$JSCompiler_prototypeAlias$$$$setItemsCollection$$($collection$$) {
  this.$_itemsCollection$ = $collection$$
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$selectIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$clearSelection$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$83$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$83$$) !== $JSCompiler_alias_NULL$$ && -1 === $tuna$utils$indexOf$$($index$$83$$, this.$_disabledIndexes$)
};
function $tuna$ui$selection$rule$SingleSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$rule$SingleSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$selectIndex$$($index$$84$$) {
  var $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$;
  if($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ = this.$isIndexEnabled$($index$$84$$)) {
    if($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ = this.$__currentIndex$ !== $index$$84$$) {
      $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ = this.$__currentIndex$, $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ = ($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ === $JSCompiler_alias_NULL$$ || this.$_eventDispatcher$.$dispatch$("deselect", $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$)) && this.$_eventDispatcher$.$dispatch$("select", $index$$84$$)
    }
  }
  return $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ ? ($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ = this.$__currentIndex$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_selectionView$.$applySelectionAt$($index$$84$$), this.$__currentIndex$ = $index$$84$$, $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$ !== $JSCompiler_alias_NULL$$ && this.$_eventDispatcher$.$dispatch$("deselected", 
  $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_258$$), this.$_eventDispatcher$.$dispatch$("selected", $index$$84$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$clearSelection$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
function $tuna$ui$selection$rule$MultipleSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__selectedIndexes$ = []
}
$tuna$utils$extend$$($tuna$ui$selection$rule$MultipleSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__selectedIndexes$.slice(0)
};
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$selectIndex$$($index$$86$$) {
  if(this.$isIndexEnabled$($index$$86$$)) {
    var $indexPosition$$1$$ = $tuna$utils$indexOf$$($index$$86$$, this.$__selectedIndexes$);
    if(-1 === $indexPosition$$1$$) {
      if(this.$_eventDispatcher$.$dispatch$("select", $index$$86$$)) {
        return this.$_selectionView$.$applySelectionAt$($index$$86$$), this.$__selectedIndexes$.push($index$$86$$), $JSCompiler_alias_TRUE$$
      }
    }else {
      if(this.$_eventDispatcher$.$dispatch$("deselect", $index$$86$$)) {
        return this.$_selectionView$.$destroySelectionAt$($index$$86$$), this.$__selectedIndexes$.splice($indexPosition$$1$$, 1), $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$clearSelection$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$clearSelection$$() {
  for(;0 < this.$__selectedIndexes$.length;) {
    this.$_selectionView$.$destroySelectionAt$(this.$__selectedIndexes$.shift())
  }
};
function $tuna$ui$selection$rule$NavigationSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__openData$ = this.$__navigation$ = this.$__currentController$ = this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$rule$NavigationSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$rule$NavigationSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setNavigation$ = function $$JSCompiler_prototypeAlias$$$$setNavigation$$($navigation$$2$$) {
  this.$__navigation$ = $navigation$$2$$
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$JSCompiler_prototypeAlias$$.navigate = function $$JSCompiler_prototypeAlias$$$navigate$($index$$88$$, $data$$41$$) {
  this.$__openData$ = $data$$41$$;
  return this.$selectIndex$($index$$88$$)
};
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$89_page$$inline_261$$) {
  return this.$isIndexEnabled$($index$$89_page$$inline_261$$) && this.$__currentIndex$ !== $index$$89_page$$inline_261$$ ? (this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.$canClose$($index$$89_page$$inline_261$$) && this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.close(), this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), 
  this.$_eventDispatcher$.$dispatch$("close", this.$__currentIndex$)), this.$__currentIndex$ = $index$$89_page$$inline_261$$, this.$__currentController$ = $JSCompiler_alias_NULL$$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && ($index$$89_page$$inline_261$$ = this.$_itemsCollection$.$getItemAt$(this.$__currentIndex$), $index$$89_page$$inline_261$$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ = $tuna$control$__controllerTable$$[$index$$89_page$$inline_261$$.id] !== $JSCompiler_alias_VOID$$ ? 
  $tuna$control$__controllerTable$$[$index$$89_page$$inline_261$$.id] : $JSCompiler_alias_NULL$$, this.$__currentController$ !== $JSCompiler_alias_NULL$$ && !this.$__currentController$.$isActive$() && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.$setNavigation$(this.$__navigation$), this.$__currentController$.init($index$$89_page$$inline_261$$)))), this.$_selectionView$.$applySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("open", 
  this.$__currentIndex$), this.$__currentController$ !== $JSCompiler_alias_NULL$$ && this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.open(this.$__openData$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
function $tuna$ui$selection$view$AbstractSelectionView$$() {
  this.$_selectionRule$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$setItemsCollection$ = function $$tuna$ui$selection$view$AbstractSelectionView$$$$$setItemsCollection$$($collection$$1$$) {
  this.$_itemsCollection$ = $collection$$1$$
};
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$applySelectionAt$ = $JSCompiler_emptyFn$$();
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$destroySelectionAt$ = $JSCompiler_emptyFn$$();
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.update = $JSCompiler_emptyFn$$();
function $tuna$ui$selection$view$ClassSelectionView$$($target$$62$$) {
  $tuna$ui$selection$view$AbstractSelectionView$$.call(this);
  this.$_target$ = $target$$62$$;
  this.$_selectionClass$ = this.$_itemSelector$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$view$ClassSelectionView$$, $tuna$ui$selection$view$AbstractSelectionView$$);
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$applySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$applySelectionAt$$($index$$99_item$$27$$) {
  $index$$99_item$$27$$ = this.$_itemsCollection$.$getItemAt$($index$$99_item$$27$$);
  $index$$99_item$$27$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addClass$$($index$$99_item$$27$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$destroySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$destroySelectionAt$$($index$$100_item$$28$$) {
  $index$$100_item$$28$$ = this.$_itemsCollection$.$getItemAt$($index$$100_item$$28$$);
  $index$$100_item$$28$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($index$$100_item$$28$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.update = function $$tuna$ui$selection$view$ClassSelectionView$$$$update$() {
  if(this.$_itemSelector$ !== $JSCompiler_alias_NULL$$) {
    this.$_selectionRule$.$clearSelection$();
    this.$_itemsCollection$.clear();
    for(var $possibleItems$$ = $tuna$dom$select$$(this.$_itemSelector$, this.$_target$), $i$$47$$ = 0, $l$$33$$ = $possibleItems$$.length, $index$$103$$ = $JSCompiler_alias_NULL$$, $item$$31$$ = $JSCompiler_alias_NULL$$;$i$$47$$ < $l$$33$$;) {
      $item$$31$$ = $possibleItems$$[$i$$47$$], $tuna$dom$getParentMatches$$($item$$31$$, this.$_itemSelector$, this.$_target$) === $JSCompiler_alias_NULL$$ && ($index$$103$$ = this.$_itemsCollection$.$addItem$($item$$31$$), $index$$103$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$hasClass$$($item$$31$$, this.$_selectionClass$) && this.$_selectionRule$.$selectIndex$($index$$103$$)), $i$$47$$++
    }
  }
};
var $tuna$control$__controllerTable$$ = {}, $tuna$control$__mainController$$ = $JSCompiler_alias_NULL$$;
function $tuna$control$ViewController$$() {
  this.$_container$ = $JSCompiler_alias_NULL$$;
  this.$_modules$ = []
}
$tuna$control$ViewController$$.prototype.$isActive$ = function $$tuna$control$ViewController$$$$$isActive$$() {
  return this.$_container$ !== $JSCompiler_alias_NULL$$ && this.$_container$.$isActive$()
};
$tuna$control$ViewController$$.prototype.init = function $$tuna$control$ViewController$$$$init$($target$$64$$) {
  this.$destroy$();
  this.$_container$ = new $tuna$ui$ModuleContainer$$($target$$64$$);
  this.$_container$.$__modules$ = this.$_modules$;
  $JSCompiler_StaticMethods_initModules$$(this.$_container$);
  this.$_initActions$()
};
$tuna$control$ViewController$$.prototype.$destroy$ = function $$tuna$control$ViewController$$$$$destroy$$() {
  this.$_container$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_destroyModules$$(this.$_container$), this.$_container$ = $JSCompiler_alias_NULL$$)
};
$tuna$control$ViewController$$.prototype.$_initActions$ = $JSCompiler_emptyFn$$();
function $tuna$control$PageViewController$$() {
  $tuna$control$ViewController$$.call(this);
  this.$_navigation$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$control$PageViewController$$, $tuna$control$ViewController$$);
$tuna$control$PageViewController$$.prototype.$setNavigation$ = function $$tuna$control$PageViewController$$$$$setNavigation$$($navigation$$3$$) {
  this.$_navigation$ = $navigation$$3$$
};
$tuna$control$PageViewController$$.prototype.$canClose$ = function $$tuna$control$PageViewController$$$$$canClose$$() {
  return $JSCompiler_alias_TRUE$$
};
$tuna$control$PageViewController$$.prototype.close = $JSCompiler_emptyFn$$();
$tuna$control$PageViewController$$.prototype.open = $JSCompiler_emptyFn$$();
function $NavigationModule$$() {
  this.$_selector$ = ".j-navigation"
}
$tuna$utils$extend$$($NavigationModule$$, $tuna$ui$Module$$);
$NavigationModule$$.prototype.$initInstance$ = function $$NavigationModule$$$$$initInstance$$($target$$65$$) {
  return new $tuna$ui$selection$Navigation$$($target$$65$$)
};
$tuna$ui$__typeTable$$.navigation = new $NavigationModule$$;
function $PopupModule$$() {
  this.$_selector$ = ".j-popup"
}
$tuna$utils$extend$$($PopupModule$$, $tuna$ui$Module$$);
$PopupModule$$.prototype.$initInstance$ = function $$PopupModule$$$$$initInstance$$($target$$66$$) {
  return $tuna$ui$popups$create$$($target$$66$$)
};
$tuna$ui$__typeTable$$.popup = new $PopupModule$$;
function $ButtonModule$$() {
  this.$_selector$ = ".j-button"
}
$tuna$utils$extend$$($ButtonModule$$, $tuna$ui$Module$$);
$ButtonModule$$.prototype.$initInstance$ = function $$ButtonModule$$$$$initInstance$$($target$$67$$) {
  return $tuna$ui$buttons$create$$($target$$67$$)
};
$tuna$ui$__typeTable$$.button = new $ButtonModule$$;
function $PopupButtonModule$$() {
  this.$_selector$ = ".j-popup-button"
}
$tuna$utils$extend$$($PopupButtonModule$$, $tuna$ui$Module$$);
$PopupButtonModule$$.prototype.$initInstance$ = function $$PopupButtonModule$$$$$initInstance$$($target$$68$$) {
  return new $tuna$ui$buttons$PopupButton$$($target$$68$$)
};
$tuna$ui$__typeTable$$["popup-button"] = new $PopupButtonModule$$;
function $SelectionGroupModule$$() {
  this.$_selector$ = ".j-selection-group"
}
$tuna$utils$extend$$($SelectionGroupModule$$, $tuna$ui$Module$$);
$SelectionGroupModule$$.prototype.$initInstance$ = function $$SelectionGroupModule$$$$$initInstance$$($target$$69$$) {
  var $selectionGroup$$ = new $tuna$ui$selection$SelectionGroup$$($target$$69$$, $JSCompiler_alias_NULL$$), $selectionEvent$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "selection-event"), $itemSelector$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "item-selector");
  $selectionEvent$$ !== $JSCompiler_alias_NULL$$ && $itemSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$($target$$69$$, $itemSelector$$, $selectionEvent$$, function() {
    var $index$$105$$ = $selectionGroup$$.$getItemIndex$(this);
    $index$$105$$ !== $JSCompiler_alias_NULL$$ && $selectionGroup$$.$selectIndex$($index$$105$$)
  });
  return $selectionGroup$$
};
$tuna$ui$__typeTable$$["selection-group"] = new $SelectionGroupModule$$;
function $TemplateTransformerModule$$() {
  this.$_selector$ = ".j-template-transformer"
}
$tuna$utils$extend$$($TemplateTransformerModule$$, $tuna$ui$Module$$);
$TemplateTransformerModule$$.prototype.$initInstance$ = function $$TemplateTransformerModule$$$$$initInstance$$($target$$70$$) {
  return new $tuna$ui$transformers$TemplateTransformer$$($target$$70$$)
};
$tuna$ui$__typeTable$$["template-transformer"] = new $TemplateTransformerModule$$;
function $ButtonGroupModule$$() {
  this.$_selector$ = ".j-button-group"
}
$tuna$utils$extend$$($ButtonGroupModule$$, $tuna$ui$Module$$);
$ButtonGroupModule$$.prototype.$initInstance$ = function $$ButtonGroupModule$$$$$initInstance$$($target$$71$$) {
  return new $tuna$ui$buttons$ButtonGroup$$($target$$71$$)
};
$tuna$ui$__typeTable$$["button-group"] = new $ButtonGroupModule$$;
function $SWFModule$$() {
  this.$_selector$ = ".j-swf"
}
$tuna$utils$extend$$($SWFModule$$, $tuna$ui$Module$$);
$SWFModule$$.prototype.$initInstance$ = function $$SWFModule$$$$$initInstance$$($target$$72$$) {
  return new $tuna$ui$flash$SWF$$($target$$72$$)
};
$tuna$ui$__typeTable$$.swf = new $SWFModule$$;
function $InputFilterModule$$() {
  this.$_selector$ = ".j-input-filter"
}
$tuna$utils$extend$$($InputFilterModule$$, $tuna$ui$Module$$);
$InputFilterModule$$.prototype.$initInstance$ = function $$InputFilterModule$$$$$initInstance$$($target$$73$$) {
  return new $tuna$ui$forms$InputFilter$$($target$$73$$)
};
$tuna$ui$__typeTable$$["input-filter"] = new $InputFilterModule$$;
function $AutocompleteModule$$() {
  this.$_selector$ = ".j-autocomplete"
}
$tuna$utils$extend$$($AutocompleteModule$$, $tuna$ui$Module$$);
$AutocompleteModule$$.prototype.$initInstance$ = function $$AutocompleteModule$$$$$initInstance$$($target$$74$$) {
  return new $tuna$ui$forms$Autocomplete$$($target$$74$$)
};
$tuna$ui$__typeTable$$.autocomplete = new $AutocompleteModule$$;
function $FormModule$$() {
  this.$_selector$ = "form.j-form"
}
$tuna$utils$extend$$($FormModule$$, $tuna$ui$Module$$);
$FormModule$$.prototype.$initInstance$ = function $$FormModule$$$$$initInstance$$($target$$75$$) {
  return new $tuna$ui$forms$Form$$($target$$75$$)
};
$tuna$ui$__typeTable$$.form = new $FormModule$$;
function $CarouselModule$$() {
  this.$_selector$ = ".j-carousel"
}
$tuna$utils$extend$$($CarouselModule$$, $tuna$ui$Module$$);
$CarouselModule$$.prototype.$initInstance$ = function $$CarouselModule$$$$$initInstance$$($target$$76$$) {
  return new $tuna$ui$selection$Carousel$$($target$$76$$)
};
$tuna$ui$__typeTable$$.carousel = new $CarouselModule$$;
window.main = function $window$main$($args$$5_body$$1_url$$22$$) {
  $tuna$utils$config$$.init($tuna$utils$urlDecode$$());
  $tuna$dom$__selectorEngine$$ = $.find;
  -1 === $tuna$utils$indexOf$$("j-module-container", $tuna$ui$__isolators$$) && $tuna$ui$__isolators$$.push("j-module-container");
  $tuna$ui$popups$registerConfirm$$();
  $tuna$ui$popups$registerAlert$$();
  $tuna$control$__mainController$$.init($args$$5_body$$1_url$$22$$);
  FAPI.init($tuna$utils$config$$.get("api_server"), $tuna$utils$config$$.get("apiconnection"), function() {
    FAPI.Client.initialize()
  });
  $args$$5_body$$1_url$$22$$ = $tuna$utils$config$$.get("custom_args");
  $args$$5_body$$1_url$$22$$ !== $JSCompiler_alias_NULL$$ && -1 !== $args$$5_body$$1_url$$22$$.indexOf("ok_cake_url=") && ($args$$5_body$$1_url$$22$$ = $args$$5_body$$1_url$$22$$.split("ok_cake_url=").pop().split("&").shift(), $tuna$ui$popups$alert$$('<img src="http://files.fotonatorte.ru/ok-image/' + $args$$5_body$$1_url$$22$$ + '" alt="\u041c\u043e\u0439 \u0442\u043e\u0440\u0442\u0438\u043a!" />'))
};
function $DataImage$$($target$$77$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$77$$);
  this.$_data$ = $JSCompiler_alias_NULL$$;
  this.type = "image/jpeg"
}
$tuna$utils$extend$$($DataImage$$, $tuna$ui$ModuleInstance$$);
$DataImage$$.prototype.setData = function $$DataImage$$$$setData$($data$$42$$) {
  this.$_data$ = $data$$42$$;
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
        var $parent$$inline_332$$ = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.parentNode;
        $parent$$inline_332$$ !== $JSCompiler_alias_NULL$$ ? ($parent$$inline_332$$.replaceChild($image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$_target$), $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id !== $JSCompiler_alias_NULL$$ && ($image$$2$$.id = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id), $JSCompiler_StaticMethods___updateImage$self$$.$_target$ = $image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("loaded", $JSCompiler_StaticMethods___updateImage$self$$.$_target$)) : 
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
function $ui$createDataImage$$($target$$78$$) {
  return $target$$78$$.id !== $JSCompiler_alias_NULL$$ ? ($ui$__idTable$$[$target$$78$$.id] === $JSCompiler_alias_VOID$$ && ($ui$__idTable$$[$target$$78$$.id] = new $DataImage$$($target$$78$$)), $ui$__idTable$$[$target$$78$$.id]) : new $DataImage$$($target$$78$$)
}
;function $ui$InnerHtml$$($target$$79$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$79$$)
}
$tuna$utils$extend$$($ui$InnerHtml$$, $tuna$ui$ModuleInstance$$);
$ui$InnerHtml$$.prototype.load = function $$ui$InnerHtml$$$$load$() {
  var $request$$2_url$$23$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "html-url");
  if($request$$2_url$$23$$ !== $JSCompiler_alias_NULL$$) {
    var $self$$13$$ = this, $request$$2_url$$23$$ = new $tuna$net$Request$$($request$$2_url$$23$$);
    $request$$2_url$$23$$.addEventListener("complete", function($event$$30$$, $html$$2$$) {
      $self$$13$$.$_target$.innerHTML = $html$$2$$
    });
    $request$$2_url$$23$$.send()
  }
};
function $DatepickerModule$$() {
  this.$_selector$ = "input.j-datepicker"
}
$tuna$utils$extend$$($DatepickerModule$$, $tuna$ui$Module$$);
$DatepickerModule$$.prototype.$initInstance$ = function $$DatepickerModule$$$$$initInstance$$($target$$80$$) {
  $($target$$80$$).keydown(function($event$$31$$) {
    $event$$31$$.preventDefault()
  }).datepicker({minDate:new Date((new Date).getTime() + 2592E5)});
  return $JSCompiler_alias_NULL$$
};
$tuna$ui$__typeTable$$.datepicker = new $DatepickerModule$$;
function $InnerHtmlModule$$() {
  this.$_selector$ = ".j-inner-html"
}
$tuna$utils$extend$$($InnerHtmlModule$$, $tuna$ui$Module$$);
$InnerHtmlModule$$.prototype.$initInstance$ = function $$InnerHtmlModule$$$$$initInstance$$($target$$81$$) {
  return new $ui$InnerHtml$$($target$$81$$)
};
$tuna$ui$__typeTable$$["inner-html"] = new $InnerHtmlModule$$;
function $DataImageModule$$() {
  this.$_selector$ = "img.j-data-image"
}
$tuna$utils$extend$$($DataImageModule$$, $tuna$ui$Module$$);
$DataImageModule$$.prototype.$initInstance$ = function $$DataImageModule$$$$$initInstance$$($target$$82$$) {
  return $ui$createDataImage$$($target$$82$$)
};
$tuna$ui$__typeTable$$["data-image"] = new $DataImageModule$$;
function $DataImageCopy$$() {
  this.$_selector$ = "img.j-data-image-copy"
}
$tuna$utils$extend$$($DataImageCopy$$, $tuna$ui$Module$$);
$DataImageCopy$$.prototype.$initInstance$ = function $$DataImageCopy$$$$$initInstance$$($replaceImage_target$$83_targetImage$$) {
  var $imageSelector$$ = $replaceImage_target$$83_targetImage$$.getAttribute("data-image-selector");
  if($imageSelector$$ !== $JSCompiler_alias_NULL$$) {
    var $currentImage$$ = $replaceImage_target$$83_targetImage$$, $replaceImage_target$$83_targetImage$$ = $tuna$dom$selectOne$$($imageSelector$$);
    if($replaceImage_target$$83_targetImage$$ !== $JSCompiler_alias_NULL$$) {
      var $targetDataImage$$ = $ui$createDataImage$$($replaceImage_target$$83_targetImage$$), $replaceImage_target$$83_targetImage$$ = function $$replaceImage_target$$83_targetImage$$$() {
        var $image$$4_newImage$$ = $targetDataImage$$.$getTarget$(), $parent$$5$$ = $currentImage$$.parentNode;
        $parent$$5$$ !== $JSCompiler_alias_NULL$$ && ($image$$4_newImage$$ = $image$$4_newImage$$.cloneNode($JSCompiler_alias_FALSE$$), $image$$4_newImage$$.id = $currentImage$$.id, $image$$4_newImage$$.className = $currentImage$$.className, $parent$$5$$.replaceChild($image$$4_newImage$$, $currentImage$$), $currentImage$$ = $image$$4_newImage$$)
      };
      $targetDataImage$$.addEventListener("loaded", $replaceImage_target$$83_targetImage$$);
      $replaceImage_target$$83_targetImage$$();
      return $targetDataImage$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$tuna$ui$__typeTable$$["data-image-copy"] = new $DataImageCopy$$;
function $YandexShareModule$$() {
  this.$_selector$ = ".j-yandex-share"
}
$tuna$utils$extend$$($YandexShareModule$$, $tuna$ui$Module$$);
$YandexShareModule$$.prototype.$initInstance$ = function $$YandexShareModule$$$$$initInstance$$($script_target$$84$$) {
  $script_target$$84$$.innerHTML = '<div id="ya_share"></div>';
  $script_target$$84$$ = document.createElement("script");
  $script_target$$84$$.type = "text/javascript";
  $script_target$$84$$.src = "http://yandex.st/share/share.js";
  $script_target$$84$$.onload = function $$script_target$$84$$$onload$() {
    (new window.Ya.share({element:"ya_share", elementStyle:{type:"none", quickServices:["facebook", "lj", "odnoklassniki", "vkontakte", "yaru"]}})).updateShareLink("http://api.yandex.ru", "API")
  };
  document.body.appendChild($script_target$$84$$);
  return $JSCompiler_alias_NULL$$
};
$tuna$ui$__typeTable$$["yandex-share"] = new $YandexShareModule$$;
function $VKShareModule$$() {
  this.$_selector$ = ".j-vk-share"
}
$tuna$utils$extend$$($VKShareModule$$, $tuna$ui$Module$$);
$VKShareModule$$.prototype.$initInstance$ = function $$VKShareModule$$$$$initInstance$$($target$$85$$) {
  $target$$85$$.id = "vk_groups";
  var $script$$1$$ = document.createElement("script");
  $script$$1$$.type = "text/javascript";
  $script$$1$$.src = "http://userapi.com/js/api/openapi.js";
  $script$$1$$.onload = function $$script$$1$$$onload$() {
    window.VK.Widgets.Group($target$$85$$.id, {mode:0, width:"200", height:"290"}, 32850256)
  };
  document.body.appendChild($script$$1$$);
  return $JSCompiler_alias_NULL$$
};
$tuna$ui$__typeTable$$["vk-share"] = new $VKShareModule$$;
function $rest$CommonMethod$$($opt_name$$4$$) {
  var $self$$14$$ = this;
  this.$__request$ = $JSCompiler_alias_NULL$$;
  this.$__completeHandler$ = $tuna$utils$bind$$(function($event$$32$$, $data$$43$$) {
    var $result$$inline_366$$ = $JSCompiler_alias_NULL$$;
    try {
      $result$$inline_366$$ = JSON.parse($data$$43$$)
    }catch($error$$inline_367$$) {
      $self$$14$$.$dispatch$("error", $data$$43$$)
    }
    $result$$inline_366$$ !== $JSCompiler_alias_NULL$$ ? $result$$inline_366$$.response !== $JSCompiler_alias_VOID$$ ? $self$$14$$.$dispatch$("result", $result$$inline_366$$.response) : $self$$14$$.$dispatch$("error", $result$$inline_366$$.errors || $result$$inline_366$$) : $self$$14$$.$dispatch$("error", $data$$43$$)
  }, this);
  $tuna$rest$DefaultMethod$$.call(this, $opt_name$$4$$)
}
$tuna$utils$extend$$($rest$CommonMethod$$, $tuna$rest$Method$$);
$rest$CommonMethod$$.prototype.$setName$ = function $$rest$CommonMethod$$$$$setName$$($name$$80$$) {
  this.$__request$ === $JSCompiler_alias_NULL$$ && (this.$__request$ = new $tuna$net$Request$$, this.$__request$.$__method$ = "POST", this.$__request$.addEventListener("complete", this.$__completeHandler$));
  this.$__request$.$__url$ = "/api/?method=" + $name$$80$$
};
$rest$CommonMethod$$.prototype.call = function $$rest$CommonMethod$$$$call$($args$$6$$) {
  this.$__request$.send($args$$6$$)
};
var $JSCompiler_StaticMethods_setDefaultMethod$self$$inline_374$$ = $tuna$rest$methodFactory$$, $method$$inline_375$$ = new $rest$CommonMethod$$;
$JSCompiler_StaticMethods_setDefaultMethod$self$$inline_374$$.$__defaultMethod$ = $method$$inline_375$$;
function $Dimension$$($data$$45$$) {
  this.id = "";
  this.$weight$ = 0;
  this.shape = "";
  this.$personsCount$ = this.$ratio$ = 0;
  $tuna$model$Record$$.call(this, $data$$45$$)
}
$tuna$utils$extend$$($Dimension$$, $tuna$model$Record$$);
$Dimension$$.prototype.$populate$ = function $$Dimension$$$$$populate$$($data$$46$$) {
  this.id = $data$$46$$.id;
  this.$weight$ = $data$$46$$.weight;
  this.shape = $data$$46$$.shape;
  this.$ratio$ = $data$$46$$.ratio;
  this.$personsCount$ = $data$$46$$.persons_count
};
$Dimension$$.prototype.$serialize$ = function $$Dimension$$$$$serialize$$() {
  return{weight:this.$weight$, shape:this.shape, ratio:this.$ratio$, personsCount:this.$personsCount$}
};
var $record$$inline_379$$ = new $Dimension$$;
$tuna$model$recordFactory$$.$__prototypes$.dimension = $record$$inline_379$$;
function $City$$($data$$47$$) {
  this.name = this.id = "";
  $tuna$model$Record$$.call(this, $data$$47$$)
}
$tuna$utils$extend$$($City$$, $tuna$model$Record$$);
$City$$.prototype.$populate$ = function $$City$$$$$populate$$($data$$48$$) {
  this.id = $data$$48$$.id || $JSCompiler_alias_NULL$$;
  this.name = $data$$48$$.name || $JSCompiler_alias_NULL$$
};
$City$$.prototype.$serialize$ = function $$City$$$$$serialize$$() {
  return{id:this.id, name:this.name}
};
var $record$$inline_383$$ = new $City$$;
$tuna$model$recordFactory$$.$__prototypes$.city = $record$$inline_383$$;
function $Bakery$$($data$$49$$) {
  this.name = "";
  this.city = $JSCompiler_alias_NULL$$;
  this.$deliveryPrice$ = 0;
  this.$decorationPrices$ = $JSCompiler_alias_NULL$$;
  this.$isNative$ = $JSCompiler_alias_FALSE$$;
  $tuna$model$Record$$.call(this, $data$$49$$)
}
$tuna$utils$extend$$($Bakery$$, $tuna$model$Record$$);
$Bakery$$.prototype.$populate$ = function $$Bakery$$$$$populate$$($data$$50_prices$$) {
  this.id = $data$$50_prices$$.id;
  this.name = $data$$50_prices$$.name;
  this.city = new $City$$($data$$50_prices$$.city);
  this.$deliveryPrice$ = $data$$50_prices$$.delivery_price;
  this.$decorationPrices$ = {};
  var $data$$50_prices$$ = $data$$50_prices$$.decoration_prices, $decorationId$$;
  for($decorationId$$ in $data$$50_prices$$) {
    this.$decorationPrices$[$decorationId$$] = $data$$50_prices$$[$decorationId$$].price
  }
};
$Bakery$$.prototype.$serialize$ = function $$Bakery$$$$$serialize$$() {
  return{id:this.id, city:this.city.$serialize$(), isNative:this.$isNative$, deliveryPrice:this.$deliveryPrice$}
};
var $record$$inline_387$$ = new $Bakery$$;
$tuna$model$recordFactory$$.$__prototypes$.bakery = $record$$inline_387$$;
function $Cake$$($opt_rawData$$1$$) {
  this.$imageUrl$ = "";
  this.$dimension$ = this.$__markupJson$ = this.$markup$ = this.$photoUrl$ = $JSCompiler_alias_NULL$$;
  $tuna$model$Record$$.call(this, $opt_rawData$$1$$)
}
$tuna$utils$extend$$($Cake$$, $tuna$model$Record$$);
$Cake$$.prototype.$populate$ = function $$Cake$$$$$populate$$($data$$51$$) {
  this.id = $data$$51$$.id;
  this.$imageUrl$ = $data$$51$$.image_url;
  this.$photoUrl$ = $data$$51$$.photo_url || $JSCompiler_alias_NULL$$;
  this.$markup$ = $data$$51$$.markup;
  this.$__markupJson$ = JSON.parse($data$$51$$.markup);
  this.$dimension$ = new $Dimension$$($data$$51$$.dimension)
};
$Cake$$.prototype.$serialize$ = function $$Cake$$$$$serialize$$() {
  return{id:this.id, imageUrl:this.$imageUrl$, photoUrl:this.$photoUrl$, dimension:this.$dimension$.$serialize$()}
};
var $record$$inline_391$$ = new $Cake$$;
$tuna$model$recordFactory$$.$__prototypes$.cake = $record$$inline_391$$;
function $model$records$Order$$($opt_rawData$$2$$) {
  this.$payment$ = this.$recipe$ = this.$bakery$ = this.$cake$ = $JSCompiler_alias_NULL$$;
  $tuna$model$Record$$.call(this, $opt_rawData$$2$$)
}
$tuna$utils$extend$$($model$records$Order$$, $tuna$model$Record$$);
$model$records$Order$$.prototype.$populate$ = function $$model$records$Order$$$$$populate$$($data$$52$$) {
  this.id = $data$$52$$.id;
  this.$cake$ = new $Cake$$($data$$52$$.cake);
  this.$bakery$ = new $Bakery$$($data$$52$$.bakery);
  this.$recipe$ = new $model$records$Recipe$$($data$$52$$.recipe);
  this.$payment$ = new $model$records$Payment$$($data$$52$$.payment)
};
$model$records$Order$$.prototype.$serialize$ = function $$model$records$Order$$$$$serialize$$() {
  var $decorationPrice_price$$inline_395$$;
  $decorationPrice_price$$inline_395$$ = 0;
  if(this.$cake$ !== $JSCompiler_alias_NULL$$) {
    var $deco$$inline_396_recipePrice$$ = this.$cake$.$__markupJson$.content.deco !== $JSCompiler_alias_VOID$$ ? this.$cake$.$__markupJson$.content.deco : $JSCompiler_alias_NULL$$;
    if($deco$$inline_396_recipePrice$$ !== $JSCompiler_alias_NULL$$) {
      for(var $deliveryPrice_i$$inline_397$$ = 0, $l$$inline_398$$ = $deco$$inline_396_recipePrice$$.length;$deliveryPrice_i$$inline_397$$ < $l$$inline_398$$;) {
        $decorationPrice_price$$inline_395$$ += this.$bakery$.$decorationPrices$[$deco$$inline_396_recipePrice$$[$deliveryPrice_i$$inline_397$$].name], $deliveryPrice_i$$inline_397$$++
      }
    }
  }
  $deco$$inline_396_recipePrice$$ = this.$recipe$ !== $JSCompiler_alias_NULL$$ && this.$cake$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getWeightPrice$$(this.$recipe$, this.$cake$.$dimension$.$weight$) : 0;
  $deliveryPrice_i$$inline_397$$ = this.$bakery$ !== $JSCompiler_alias_NULL$$ ? this.$bakery$.$deliveryPrice$ : 0;
  return{cake:$tuna$model$serialize$$(this.$cake$), recipe:$tuna$model$serialize$$(this.$recipe$), bakery:$tuna$model$serialize$$(this.$bakery$), decorationPrice:$decorationPrice_price$$inline_395$$, recipePrice:$deco$$inline_396_recipePrice$$, deliveryPrice:$deliveryPrice_i$$inline_397$$, totalPrice:$decorationPrice_price$$inline_395$$ + $deco$$inline_396_recipePrice$$ + $deliveryPrice_i$$inline_397$$}
};
var $record$$inline_402$$ = new $model$records$Order$$;
$tuna$model$recordFactory$$.$__prototypes$.order = $record$$inline_402$$;
function $model$records$Payment$$($opt_rawData$$3$$) {
  this.$deliveryPrice$ = this.$recipePrice$ = this.$decoPrice$ = 0;
  $tuna$model$Record$$.call(this, $opt_rawData$$3$$)
}
$tuna$utils$extend$$($model$records$Payment$$, $tuna$model$Record$$);
$model$records$Payment$$.prototype.$populate$ = function $$model$records$Payment$$$$$populate$$($data$$53$$) {
  this.$decoPrice$ = $data$$53$$.decoration_price;
  this.$recipePrice$ = $data$$53$$.recipe_price;
  this.$deliveryPrice$ = $data$$53$$.delivery_price
};
$model$records$Payment$$.prototype.$serialize$ = function $$model$records$Payment$$$$$serialize$$() {
  return{decoPrice:this.$decoPrice$, recipePrice:this.$recipePrice$, deliveryPrice:this.$deliveryPrice$, totalPrice:this.$decoPrice$ + this.$recipePrice$ + this.$deliveryPrice$}
};
function $Recipe$$($opt_rawData$$4$$) {
  this.$imageUrl$ = this.$desc$ = this.name = "";
  this.$dimensionPrices$ = {};
  $tuna$model$Record$$.call(this, $opt_rawData$$4$$)
}
$tuna$utils$extend$$($Recipe$$, $tuna$model$Record$$);
$Recipe$$.prototype.$populate$ = function $$Recipe$$$$$populate$$($data$$54$$) {
  this.id = $data$$54$$.id;
  this.$imageUrl$ = $data$$54$$.image_url;
  this.$desc$ = $data$$54$$.desc;
  this.name = $data$$54$$.name;
  this.$dimensionPrices$ = $data$$54$$.dimension_prices || $JSCompiler_alias_NULL$$
};
$Recipe$$.prototype.$serialize$ = function $$Recipe$$$$$serialize$$($cake$$) {
  var $result$$21$$ = {id:this.id, imageUrl:this.$imageUrl$, desc:this.$desc$, name:this.name};
  $cake$$ !== $JSCompiler_alias_VOID$$ && ($result$$21$$.price = $JSCompiler_StaticMethods_getWeightPrice$$(this, $cake$$.$dimension$.$weight$));
  return $result$$21$$
};
function $JSCompiler_StaticMethods_getWeightPrice$$($JSCompiler_StaticMethods_getWeightPrice$self$$, $weight$$) {
  var $weightKey$$ = $weight$$.toString().replace(".", "_");
  return $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$[$weightKey$$] !== $JSCompiler_alias_VOID$$ ? $JSCompiler_StaticMethods_getWeightPrice$self$$.$dimensionPrices$[$weightKey$$].price : 0
}
var $model$records$Recipe$$ = $Recipe$$, $record$$inline_406$$ = new $model$records$Recipe$$;
$tuna$model$recordFactory$$.$__prototypes$.recipe = $record$$inline_406$$;
function $User$$() {
  this.$network$ = this.$userpicUrl$ = this.city = this.name = this.id = ""
}
$tuna$utils$extend$$($User$$, $tuna$model$Record$$);
$User$$.prototype.$serialize$ = function $$User$$$$$serialize$$() {
  return{id:this.id, name:this.name, network:this.$network$, userpicUrl:this.$userpicUrl$}
};
function $Decoration$$($data$$55$$) {
  this.$imageUrl$ = this.name = "";
  this.group = 0;
  this.$isAutorotate$ = $JSCompiler_alias_FALSE$$;
  $tuna$model$Record$$.call(this, $data$$55$$)
}
$tuna$utils$extend$$($Decoration$$, $tuna$model$Record$$);
$Decoration$$.prototype.$populate$ = function $$Decoration$$$$$populate$$($data$$56$$) {
  this.id = $data$$56$$.id;
  this.name = $data$$56$$.name;
  this.group = $data$$56$$.group;
  this.$imageUrl$ = $data$$56$$.image_url;
  this.$isAutorotate$ = $data$$56$$.is_autorotate
};
$Decoration$$.prototype.$serialize$ = function $$Decoration$$$$$serialize$$() {
  return{name:this.id, description:this.name, url:this.$imageUrl$, autorotate:this.$isAutorotate$}
};
var $record$$inline_410$$ = new $Decoration$$;
$tuna$model$recordFactory$$.$__prototypes$.decoration = $record$$inline_410$$;
var $model$bakeries$$ = new $tuna$model$ListResource$$("users.getBakeries", "bakery"), $model$cities$$ = new $tuna$model$ListResource$$, $model$cakes$$ = new $tuna$model$ListResource$$("cakes.getPromoted", "cake"), $model$dimensions$$ = new $tuna$model$ListResource$$("dimensions.get", "dimension"), $model$decorations$$ = new $tuna$model$ListResource$$("decorations.get", "decoration"), $model$recipes$$ = new $tuna$model$ListResource$$("recipes.get", "recipe"), $model$currentBakery$$ = new $tuna$model$ItemResource$$, 
$model$currentCake$$ = new $tuna$model$ItemResource$$, $model$currentRecipe$$ = new $tuna$model$ItemResource$$, $model$currentOrder$$ = new $tuna$model$ItemResource$$;
function $TitleController$$() {
  $tuna$control$PageViewController$$.call(this);
  this.$_modules$ = "template-transformer,carousel,vk-share,popup-button,button-group,selection-group".split(",")
}
$tuna$utils$extend$$($TitleController$$, $tuna$control$PageViewController$$);
$TitleController$$.prototype.$_initActions$ = function $$TitleController$$$$$_initActions$$() {
  var $cakeListTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "cake-list");
  $model$cakes$$.addEventListener("update", function($event$$33$$, $cakes$$) {
    $JSCompiler_StaticMethods_applyTransform$$($cakeListTransformer$$, $tuna$model$serialize$$($cakes$$))
  });
  $model$cakes$$.load()
};
$TitleController$$.prototype.$canClose$ = function $$TitleController$$$$$canClose$$() {
  var $decorations$$ = $model$decorations$$.get();
  return $model$currentBakery$$.get() !== $JSCompiler_alias_NULL$$ && 0 < $decorations$$.length
};
$tuna$control$__controllerTable$$.title_step = new $TitleController$$;
function $DesignerController$$() {
  $tuna$control$PageViewController$$.call(this);
  this.$__handleBakeryUpdate$ = $tuna$utils$bind$$(this.$__handleBakeryUpdate$, this);
  this.$__cakePreset$ = this.$__movie$ = this.$__cakeImage$ = this.$__designerSWF$ = $JSCompiler_alias_NULL$$;
  this.$_modules$ = ["data-image", "swf", "popup-button", "inner-html"]
}
$tuna$utils$extend$$($DesignerController$$, $tuna$control$PageViewController$$);
$JSCompiler_prototypeAlias$$ = $DesignerController$$.prototype;
$JSCompiler_prototypeAlias$$.$_initActions$ = function $$JSCompiler_prototypeAlias$$$$_initActions$$() {
  function $listener$$33$$() {
    $offerHtml$$.load();
    $offerPopup$$.removeEventListener("open", $listener$$33$$)
  }
  var $self$$15$$ = this;
  this.$__designerSWF$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "swf", "cake-designer");
  $model$dimensions$$.addEventListener("update", function() {
    $self$$15$$.$__designerSWF$.reset()
  });
  var $offerPopup$$ = $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup-button", "offer")), $offerHtml$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "inner-html", "offer");
  $offerPopup$$.addEventListener("open", $listener$$33$$)
};
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($cake$$1_data$$57$$) {
  $model$currentBakery$$.addEventListener("update", this.$__handleBakeryUpdate$);
  this.$__handleBakeryUpdate$();
  $cake$$1_data$$57$$ = $JSCompiler_StaticMethods_getItemById$$($model$cakes$$, $cake$$1_data$$57$$["cake-id"]);
  $cake$$1_data$$57$$ !== $JSCompiler_alias_NULL$$ ? (this.$__cakePreset$ = $cake$$1_data$$57$$.$markup$, this.$__movie$ !== $JSCompiler_alias_NULL$$ && this.$__movie$.loadCakePreset($cake$$1_data$$57$$.$markup$)) : this.$__cakePreset$ = $JSCompiler_alias_NULL$$
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
  $decoSelectors$$.splice(1, 1);
  0 < $weightsList$$.length && $JSCompiler_StaticMethods___initDesigner$self$$.$__movie$.initialize(JSON.stringify({weightsList:$weightsList$$, ratiosList:$ratiosList$$, personsList:$personsList$$, decoSelectors:$decoSelectors$$}), "round", $ratiosList$$[0])
}
$JSCompiler_prototypeAlias$$.$confirmShapeChange$ = function $$JSCompiler_prototypeAlias$$$$confirmShapeChange$$($shape$$) {
  var $self$$16$$ = this, $weight$$1$$ = this.$__movie$.getCakeWeight();
  0 < $model$dimensions$$.find(function($dimension$$1$$) {
    return $dimension$$1$$.$weight$ === $weight$$1$$ && $dimension$$1$$.shape === $shape$$
  }).length ? $tuna$ui$popups$confirm$$(function($result$$22$$) {
    $result$$22$$ && $self$$16$$.$__movie$.changeShape($shape$$)
  }) : $tuna$ui$popups$alert$$("\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0435\u0441\u0430!")
};
$JSCompiler_prototypeAlias$$.$onDecoElementsLoaded$ = function $$JSCompiler_prototypeAlias$$$$onDecoElementsLoaded$$() {
  this.$__cakePreset$ !== $JSCompiler_alias_NULL$$ && this.$__movie$.loadCakePreset(this.$__cakePreset$)
};
$JSCompiler_prototypeAlias$$.$onFlashReady$ = function $$JSCompiler_prototypeAlias$$$$onFlashReady$$() {
  var $JSCompiler_StaticMethods_getMovie$self$$inline_416$$ = this.$__designerSWF$;
  $JSCompiler_StaticMethods_getMovie$self$$inline_416$$.$__movieId$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getMovie$self$$inline_416$$.$__movie$ === $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getMovie$self$$inline_416$$.$__movie$ = swfobject.getObjectById($JSCompiler_StaticMethods_getMovie$self$$inline_416$$.$__movieId$));
  this.$__movie$ = $JSCompiler_StaticMethods_getMovie$self$$inline_416$$.$__movie$;
  $JSCompiler_StaticMethods___initDesigner$$(this)
};
$JSCompiler_prototypeAlias$$.$canClose$ = function $$JSCompiler_prototypeAlias$$$$canClose$$($dimension$$2_nextStep$$) {
  if(this.$__movie$ !== $JSCompiler_alias_NULL$$) {
    var $data$$58$$ = this.$__movie$.getCakeData();
    "order" === $dimension$$2_nextStep$$ && ($dimension$$2_nextStep$$ = $JSCompiler_StaticMethods_findOne$$(function($dimension$$3$$) {
      return $dimension$$3$$.$weight$ === $data$$58$$.weight && $dimension$$3$$.shape === $data$$58$$.shape
    }), $dimension$$2_nextStep$$ !== $JSCompiler_alias_NULL$$ && ($data$$58$$.dimension_id = $dimension$$2_nextStep$$.id, $tuna$rest$call$$("cakes.add", $data$$58$$, function($cake$$2$$) {
      $model$currentCake$$.set($cake$$2$$)
    }, "cake")));
    this.$__cakeImage$ === $JSCompiler_alias_NULL$$ && (this.$__cakeImage$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "data-image", "cake-image"));
    this.$__cakeImage$.setData($data$$58$$.image);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
var $controller$$ = new $DesignerController$$;
window.onFlashReady = $tuna$utils$bind$$($controller$$.$onFlashReady$, $controller$$);
window.confirmShapeChange = $tuna$utils$bind$$($controller$$.$confirmShapeChange$, $controller$$);
window.openMessageBox = $tuna$ui$popups$alert$$;
window.onDecoElementsLoaded = $tuna$utils$bind$$($controller$$.$onDecoElementsLoaded$, $controller$$);
$tuna$control$__controllerTable$$.designer_step = $controller$$;
function $OrderController$$() {
  $tuna$control$PageViewController$$.call(this);
  this.$__orderTransformer$ = $JSCompiler_alias_NULL$$;
  this.$__handleBakeryUpdate$ = $tuna$utils$bind$$(this.$__handleBakeryUpdate$, this);
  this.$__updateOrder$ = $tuna$utils$bind$$(this.$__updateOrder$, this);
  this.$_modules$ = "template-transformer,data-image-copy,datepicker,form,popup,popup-button,button-group".split(",")
}
$tuna$utils$extend$$($OrderController$$, $tuna$control$PageViewController$$);
$JSCompiler_prototypeAlias$$ = $OrderController$$.prototype;
$JSCompiler_prototypeAlias$$.$_initActions$ = function $$JSCompiler_prototypeAlias$$$$_initActions$$() {
  function $updateRecipesList$$() {
    var $recipes$$ = $model$recipes$$.get(), $cake$$3$$ = $model$currentCake$$.get();
    $recipes$$ !== $JSCompiler_alias_NULL$$ && $cake$$3$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_applyTransform$$($recipesTransformer$$, $tuna$model$serialize$$($recipes$$, $cake$$3$$))
  }
  this.$__orderTransformer$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "order-form");
  var $self$$17$$ = this, $recipePopup$$ = $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup-button", "recipe-popup"));
  $recipePopup$$.open();
  var $recipesTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "recipes-list"), $recipesForm$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "form", "recipes-list");
  $recipePopup$$.addEventListener("apply", function() {
    var $recipe_recipeIds$$ = $recipesForm$$.$getValue$("recipe_id"), $recipe_recipeIds$$ = $JSCompiler_StaticMethods_getItemById$$($model$recipes$$, $recipe_recipeIds$$.shift());
    $model$currentRecipe$$.set($recipe_recipeIds$$)
  });
  var $orderForm$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "form", "order-form");
  $orderForm$$.addEventListener("result", function($event$$34$$, $order$$) {
    $self$$17$$.$_navigation$.navigate("result", $order$$)
  });
  $JSCompiler_StaticMethods_setValue$$($orderForm$$, "client_network", 2);
  var $popupRecipe$$ = $JSCompiler_alias_NULL$$, $recipeInfoPopup$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup", "recipe-info-popup"), $recipeInfoTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "recipe-info-popup");
  $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button-group", "recipes-list").addEventListener("show", function($event$$35$$, $button$$5$$) {
    $popupRecipe$$ = $JSCompiler_StaticMethods_getItemById$$($model$recipes$$, $JSCompiler_StaticMethods_getStringOption$$($button$$5$$, "recipe-id"));
    $popupRecipe$$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_applyTransform$$($recipeInfoTransformer$$, $popupRecipe$$.$serialize$()), $recipeInfoPopup$$.open(), $recipePopup$$.close())
  });
  $recipeInfoPopup$$.addEventListener("apply", function() {
    $JSCompiler_StaticMethods_setValue$$($recipesForm$$, "recipe_id", $popupRecipe$$.id);
    $recipePopup$$.open()
  });
  $recipeInfoPopup$$.addEventListener("close", function() {
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
  var $order$$1$$ = $model$currentOrder$$.get();
  $order$$1$$ === $JSCompiler_alias_NULL$$ && ($order$$1$$ = new $model$records$Order$$, $model$currentOrder$$.set($order$$1$$));
  $order$$1$$.$cake$ = $model$currentCake$$.get();
  $order$$1$$.$bakery$ = $model$currentBakery$$.get();
  $order$$1$$.$recipe$ = $model$currentRecipe$$.get();
  $JSCompiler_StaticMethods_applyTransform$$(this.$__orderTransformer$, $tuna$model$serialize$$($order$$1$$))
};
var $controller$$inline_422$$ = new $OrderController$$;
$tuna$control$__controllerTable$$.order_step = $controller$$inline_422$$;
function $OKShareController$$() {
  $tuna$control$PageViewController$$.call(this);
  this.$__albumId$ = this.$__cakeImage$ = this.$__downloadDataInput$ = $JSCompiler_alias_NULL$$;
  this.$__showFriendsPopup$ = $tuna$utils$bind$$(this.$__showFriendsPopup$, this);
  this.$__post$ = $tuna$utils$bind$$(this.$__post$, this);
  this.$_modules$ = ["data-image-copy", "button-group"]
}
$tuna$utils$extend$$($OKShareController$$, $tuna$control$PageViewController$$);
$OKShareController$$.prototype.open = function $$OKShareController$$$$open$() {
  this.$__cakeImage$ !== $JSCompiler_alias_NULL$$ && this.$__downloadDataInput$ !== $JSCompiler_alias_NULL$$ && (this.$__downloadDataInput$.value = this.$__cakeImage$.getData())
};
$OKShareController$$.prototype.$_initActions$ = function $$OKShareController$$$$$_initActions$$() {
  this.$__downloadDataInput$ = $tuna$dom$selectOne$$("#download_data_input");
  this.$__cakeImage$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "data-image-copy", "cake-image");
  var $self$$18$$ = this, $sendControls$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button-group", "share");
  $sendControls$$.addEventListener("publish", function() {
    $self$$18$$.$__albumId$ === $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods___getAlbum$$($self$$18$$, $self$$18$$.$__post$) : $JSCompiler_StaticMethods___uploadPhoto$$($self$$18$$, $self$$18$$.$__post$)
  });
  $sendControls$$.addEventListener("notify", function() {
    $self$$18$$.$__albumId$ === $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods___getAlbum$$($self$$18$$, $self$$18$$.$__showFriendsPopup$) : $JSCompiler_StaticMethods___uploadPhoto$$($self$$18$$, $self$$18$$.$__showFriendsPopup$)
  })
};
function $JSCompiler_StaticMethods___fetchAlbumId$$($JSCompiler_StaticMethods___fetchAlbumId$self$$, $albums$$) {
  for(var $i$$50$$ = 0, $l$$36$$ = $albums$$.length, $album$$ = $JSCompiler_alias_NULL$$;$i$$50$$ < $l$$36$$;) {
    $album$$ = $albums$$[$i$$50$$];
    if("\u041c\u043e\u0438 \u0442\u043e\u0440\u0442\u0438\u043a\u0438" === $album$$.title && '\u0418\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "\u0424\u043e\u0442\u043e \u041d\u0430 \u0422\u043e\u0440\u0442\u0435"' === $album$$.description) {
      $JSCompiler_StaticMethods___fetchAlbumId$self$$.$__albumId$ = $album$$.aid;
      break
    }
    $i$$50$$++
  }
}
function $JSCompiler_StaticMethods___getAlbum$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$) {
  function $getAlbums$$() {
    FAPI.Client.call({method:"photos.getAlbums"}, function($status$$, $data$$59$$) {
      "ok" === $status$$ && ($JSCompiler_StaticMethods___fetchAlbumId$$($JSCompiler_StaticMethods___getAlbum$self$$, $data$$59$$.albums), $JSCompiler_StaticMethods___getAlbum$self$$.$__albumId$ === $JSCompiler_alias_NULL$$ ? FAPI.Client.call({method:"photos.createAlbum", title:"\u041c\u043e\u0438 \u0442\u043e\u0440\u0442\u0438\u043a\u0438", description:'\u0418\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "\u0424\u043e\u0442\u043e \u041d\u0430 \u0422\u043e\u0440\u0442\u0435"', 
      type:"friends"}, function($status$$1$$, $aid$$) {
        "ok" === $status$$1$$ && ($JSCompiler_StaticMethods___getAlbum$self$$.$__albumId$ = $aid$$, $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$))
      }) : $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$))
    })
  }
  FAPI.Client.call({method:"users.hasAppPermission", ext_perm:"PHOTO CONTENT"}, function($status$$2$$, $data$$60$$) {
    $data$$60$$ ? $getAlbums$$() : (window.$API_callback$ = function $window$$API_callback$$($method$$6$$, $status$$3$$) {
      "ok" === $status$$3$$ && "showPermissions" === $method$$6$$ && $getAlbums$$();
      window.$API_callback$ = $JSCompiler_alias_NULL$$
    }, FAPI.UI.showPermissions('["PHOTO CONTENT"]'))
  })
}
function $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___uploadPhoto$self$$, $callback$$38$$) {
  $tuna$rest$call$$("social.ok.uploadImage", {image:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__cakeImage$.getData(), upload_url:"http://api.odnoklassniki.ru/api/photos/upload", album_id:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__albumId$, session_key:FAPI.Client.sessionKey, application_key:FAPI.Client.applicationKey, secret_key:FAPI.Client.sessionSecretKey}, function() {
    FAPI.Client.call({method:"photos.getUserAlbumPhotos", aid:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__albumId$, pagingDirection:"backward", count:1}, function($status$$4$$, $data$$61$$) {
      $callback$$38$$($data$$61$$.photos.shift())
    })
  })
}
$OKShareController$$.prototype.$__showFriendsPopup$ = function $$OKShareController$$$$$__showFriendsPopup$$($photo$$) {
  FAPI.UI.showNotification("\u0421\u043c\u043e\u0442\u0440\u0438 \u043a\u0430\u043a\u043e\u0439 \u0443 \u043c\u0435\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0441\u044f \u0442\u043e\u0440\u0442!", "ok_cake_url=" + ($photo$$ ? $JSCompiler_StaticMethods___parsePhotoUrl$$($photo$$.standard_url) : "url"))
};
$OKShareController$$.prototype.$__post$ = function $$OKShareController$$$$$__post$$($photo$$1_sig_url$$24$$) {
  var $photo$$1_sig_url$$24$$ = $photo$$1_sig_url$$24$$ ? $JSCompiler_StaticMethods___parsePhotoUrl$$($photo$$1_sig_url$$24$$.standard_url) : "url", $request$$3$$ = {application_key:FAPI.Client.applicationKey, session_key:FAPI.Client.sessionKey, format:FAPI.Client.format, method:"stream.publish", message:"\u0441\u0434\u0435\u043b\u0430\u043b\u0430 \u0442\u043e\u0440\u0442!", attachment:JSON.stringify({caption:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0442\u043e\u0440\u0442\u0438\u043a! \u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c!", 
  media:[{href:"link", src:$photo$$1_sig_url$$24$$, type:"image"}]}), action_links:JSON.stringify([{text:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u043e\u0440\u0442\u0438\u043a!", href:"ok_cake_url=" + $photo$$1_sig_url$$24$$}, {text:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439!", href:"action=create"}])}, $photo$$1_sig_url$$24$$ = FAPI.Util.calcSignature($request$$3$$, FAPI.Client.sessionSecretKey);
  window.API_callback = function $window$API_callback$($method$$7$$, $status$$5$$, $resig$$1$$) {
    "ok" === $status$$5$$ && FAPI.Client.call($request$$3$$, function($status$$6$$, $data$$62$$, $error$$8$$) {
      "ok" === $status$$6$$ ? $tuna$ui$popups$alert$$("\u0422\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d!") : $tuna$ui$popups$alert$$(JSON.stringify($error$$8$$))
    }, $resig$$1$$);
    window.API_callback = $JSCompiler_alias_NULL$$
  };
  FAPI.UI.showConfirmation("stream.publish", "\u0417\u0430\u043f\u043e\u0441\u0442\u0438\u0442\u044c \u0432 \u043b\u0435\u043d\u0442\u0443?", $photo$$1_sig_url$$24$$)
};
function $JSCompiler_StaticMethods___parsePhotoUrl$$($url$$25$$) {
  var $id$$5$$ = $url$$25$$.split("photoId=").pop().split("&").shift();
  return $url$$25$$.split("//").pop().split(".").shift() + "/" + $id$$5$$
}
var $controller$$inline_425$$ = new $OKShareController$$;
$tuna$control$__controllerTable$$.share_step = $controller$$inline_425$$;
function $OkResultController$$() {
  $tuna$control$PageViewController$$.call(this);
  this.$__orderId$ = $JSCompiler_alias_NULL$$;
  this.$__totalPrice$ = -1;
  this.$_modules$ = ["data-image-copy", "button"]
}
$tuna$utils$extend$$($OkResultController$$, $tuna$control$PageViewController$$);
$OkResultController$$.prototype.$_initActions$ = function $$OkResultController$$$$$_initActions$$() {
  var $self$$21$$ = this, $payButton$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button", "pay-button");
  $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button", "cash-button").addEventListener("click", function() {
    $tuna$ui$popups$alert$$("\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!");
    $self$$21$$.$_navigation$.navigate("title")
  });
  $payButton$$.addEventListener("click", function() {
    $self$$21$$.$__orderId$ !== $JSCompiler_alias_NULL$$ && (FAPI.UI.showPayment("\u0422\u043e\u0440\u0442\u0438\u043a", "\u041f\u043e\u043a\u0443\u043f\u0430\u0435\u0442\u0435 \u0442\u043e\u0440\u0442\u0438\u043a?", $self$$21$$.$__orderId$, $self$$21$$.$__totalPrice$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, "RUR", "true"), $self$$21$$.$_navigation$.navigate("title"))
  })
};
$OkResultController$$.prototype.open = function $$OkResultController$$$$open$($order$$2$$) {
  $order$$2$$ !== $JSCompiler_alias_NULL$$ && (this.$__orderId$ = $order$$2$$.id, this.$__totalPrice$ = $order$$2$$.$payment$.$decoPrice$ + $order$$2$$.$payment$.$recipePrice$ + $order$$2$$.$payment$.$deliveryPrice$)
};
$tuna$control$__controllerTable$$.result_step = new $OkResultController$$;
function $MainController$$() {
  $tuna$control$ViewController$$.call(this);
  this.$_modules$ = ["navigation", "popup-button", "template-transformer", "autocomplete", "yandex-share"]
}
$tuna$utils$extend$$($MainController$$, $tuna$control$ViewController$$);
$MainController$$.prototype.$_initActions$ = function $$MainController$$$$$_initActions$$() {
  var $cityAutocomplete$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "autocomplete", "city-popup");
  $JSCompiler_StaticMethods_setItemSerializeCallback$$($cityAutocomplete$$, function($city$$) {
    return $city$$.name
  });
  $JSCompiler_StaticMethods_getPopup$$($JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "popup-button", "city-popup")).addEventListener("apply", function() {
    var $city$$1$$ = $cityAutocomplete$$.$__selectedData$;
    $city$$1$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$1$$)
  });
  var $bakeryTransformer$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "template-transformer", "current-bakery");
  $model$currentBakery$$.addEventListener("update", function($event$$36$$, $bakery$$6$$) {
    $JSCompiler_StaticMethods_applyTransform$$($bakeryTransformer$$, $tuna$model$serialize$$($bakery$$6$$))
  });
  $model$cities$$.addEventListener("update", function($event$$37$$, $cities$$) {
    $cityAutocomplete$$.setData($cities$$)
  });
  $tuna$rest$call$$("cities.getCurrent", $JSCompiler_alias_NULL$$, function($city$$2$$) {
    function $listener$$34$$() {
      $model$bakeries$$.removeEventListener("update", $listener$$34$$);
      var $ids$$ = [];
      $model$cities$$.set($model$bakeries$$.map(function($bakery$$7$$) {
        $bakery$$7$$.$isNative$ = $bakery$$7$$.city.name === $city$$2$$.name;
        var $id$$6$$ = $bakery$$7$$.city.id;
        return-1 === $tuna$utils$indexOf$$($id$$6$$, $ids$$) ? ($ids$$.push($id$$6$$), $bakery$$7$$.city) : $JSCompiler_alias_NULL$$
      }));
      $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$2$$)
    }
    $model$bakeries$$.addEventListener("update", $listener$$34$$);
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
$tuna$control$__mainController$$ = new $MainController$$;
function $GetCurrent$$() {
  $tuna$events$EventDispatcher$$.call(this)
}
$tuna$utils$extend$$($GetCurrent$$, $tuna$rest$Method$$);
$GetCurrent$$.prototype.call = function $$GetCurrent$$$$call$() {
  var $self$$23$$ = this;
  FAPI.Client.call({method:"users.getInfo", fields:"current_location", uids:FAPI.Client.uid}, function($city$$4_status$$7$$, $data$$63_value$$60$$, $error$$9$$) {
    "ok" === $city$$4_status$$7$$ ? ($city$$4_status$$7$$ = new $City$$, $data$$63_value$$60$$ !== $JSCompiler_alias_NULL$$ && 0 < $data$$63_value$$60$$.length ? ($data$$63_value$$60$$ = $data$$63_value$$60$$.shift(), $city$$4_status$$7$$.name = $data$$63_value$$60$$.location.city) : $city$$4_status$$7$$.name = "\u041c\u043e\u0441\u043a\u0432\u0430", $self$$23$$.$dispatch$("result", $city$$4_status$$7$$)) : $self$$23$$.$dispatch$("error", $error$$9$$)
  })
};
$tuna$rest$methodFactory$$.$__methods$["cities.getCurrent"] = new $GetCurrent$$;
})();
