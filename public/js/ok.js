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
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
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
function $tuna$dom$matchesSelector$$($element$$8$$, $selector$$3$$) {
  return $tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matchesSelector($element$$8$$, $selector$$3$$) : $JSCompiler_alias_FALSE$$
}
var $tuna$dom$__selectorEngine$$ = $JSCompiler_alias_NULL$$;
function $tuna$dom$addEventListener$$($element$$10$$, $listenerId_type$$48$$, $handler$$3$$) {
  if($element$$10$$.addEventListener !== $JSCompiler_alias_VOID$$) {
    $element$$10$$.addEventListener($listenerId_type$$48$$, $handler$$3$$, $JSCompiler_alias_FALSE$$)
  }else {
    if($element$$10$$.attachEvent !== $JSCompiler_alias_VOID$$) {
      var $eventName$$1$$ = "on" + $listenerId_type$$48$$;
      $element$$10$$[$eventName$$1$$] === $JSCompiler_alias_VOID$$ ? $tuna$dom$__addCustomIEListener$$($element$$10$$, $listenerId_type$$48$$, $handler$$3$$) : ($element$$10$$.$__ieTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$10$$.$__ieTargetId$ = "element_" + $tuna$dom$__lastElementId$$++), $listenerId_type$$48$$ = $element$$10$$.$__ieTargetId$ + "_" + $listenerId_type$$48$$, $handler$$3$$[$listenerId_type$$48$$] = function $$handler$$3$$$$listenerId_type$$48$$$($event$$4$$) {
        $handler$$3$$.call($element$$10$$, $event$$4$$)
      }, $element$$10$$.attachEvent($eventName$$1$$, $handler$$3$$[$listenerId_type$$48$$]))
    }
  }
}
function $tuna$dom$addOneEventListener$$($element$$12$$, $type$$50$$, $handler$$5$$) {
  $element$$12$$.$__onceTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$12$$.$__onceTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$2$$ = $element$$12$$.$__onceTargetId$ + "_" + $type$$50$$;
  $handler$$5$$[$listenerId$$2$$] = function $$handler$$5$$$$listenerId$$2$$$($event$$5_listenerId$$inline_23$$) {
    $handler$$5$$.call($element$$12$$, $event$$5_listenerId$$inline_23$$);
    $event$$5_listenerId$$inline_23$$ = $element$$12$$.$__onceTargetId$ + "_" + $type$$50$$;
    if($handler$$5$$[$event$$5_listenerId$$inline_23$$] !== $JSCompiler_alias_VOID$$) {
      var $handler$$inline_461$$ = $handler$$5$$[$event$$5_listenerId$$inline_23$$];
      if($element$$12$$.removeEventListener !== $JSCompiler_alias_VOID$$) {
        $element$$12$$.removeEventListener($type$$50$$, $handler$$inline_461$$, $JSCompiler_alias_FALSE$$)
      }else {
        if($element$$12$$.detachEvent !== $JSCompiler_alias_VOID$$) {
          if($element$$12$$["on" + $type$$50$$] === $JSCompiler_alias_VOID$$) {
            var $handlers$$inline_462_listenerId$$inline_464$$ = $element$$12$$["__" + $type$$50$$];
            if($handlers$$inline_462_listenerId$$inline_464$$ !== $JSCompiler_alias_VOID$$) {
              for(var $i$$inline_463$$ = $handlers$$inline_462_listenerId$$inline_464$$.length - 1;0 <= $i$$inline_463$$;) {
                $handlers$$inline_462_listenerId$$inline_464$$[$i$$inline_463$$] === $handler$$inline_461$$ && $handlers$$inline_462_listenerId$$inline_464$$.splice($i$$inline_463$$, 1), $i$$inline_463$$--
              }
            }
          }else {
            $handlers$$inline_462_listenerId$$inline_464$$ = $element$$12$$.$__ieTargetId$ + "_" + $type$$50$$, $handler$$inline_461$$[$handlers$$inline_462_listenerId$$inline_464$$] !== $JSCompiler_alias_VOID$$ && ($element$$12$$.detachEvent("on" + $type$$50$$, $handler$$inline_461$$[$handlers$$inline_462_listenerId$$inline_464$$]), delete $handler$$inline_461$$[$handlers$$inline_462_listenerId$$inline_464$$])
          }
        }
      }
      delete $handler$$5$$[$event$$5_listenerId$$inline_23$$]
    }
  };
  $tuna$dom$addEventListener$$($element$$12$$, $type$$50$$, $handler$$5$$[$listenerId$$2$$])
}
function $tuna$dom$addChildEventListener$$($element$$14$$, $selector$$4$$, $type$$52$$, $handler$$7$$) {
  $element$$14$$.$__childTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$14$$.$__childTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$4$$ = $element$$14$$.$__childTargetId$ + "_" + $type$$52$$ + "_" + $selector$$4$$;
  $handler$$7$$[$listenerId$$4$$] = function $$handler$$7$$$$listenerId$$4$$$($event$$6$$) {
    var $target$$36$$ = $event$$6$$.target || $event$$6$$.srcElement, $child$$1$$ = $JSCompiler_alias_NULL$$, $child$$1$$ = 0 === ($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches($selector$$4$$, [$target$$36$$]) : []).length ? $tuna$dom$getParentMatches$$($target$$36$$, $selector$$4$$, $element$$14$$) : $target$$36$$;
    $child$$1$$ !== $JSCompiler_alias_NULL$$ && $handler$$7$$.call($child$$1$$, $event$$6$$)
  };
  $tuna$dom$addEventListener$$($element$$14$$, $type$$52$$, $handler$$7$$[$listenerId$$4$$])
}
function $tuna$dom$__addCustomIEListener$$($element$$16$$, $type$$54$$, $handler$$9$$) {
  $element$$16$$.$__customListener$ === $JSCompiler_alias_VOID$$ && ($element$$16$$.$__customListener$ = function $$element$$16$$$$__customListener$$($event$$7$$) {
    if($event$$7$$.$__type$ !== $JSCompiler_alias_VOID$$) {
      var $handlers_type$$55$$ = $event$$7$$.$__type$;
      delete $event$$7$$.$__type$;
      var $handlers_type$$55$$ = $element$$16$$["__" + $handlers_type$$55$$], $i$$3$$;
      for($i$$3$$ in $handlers_type$$55$$) {
        $handlers_type$$55$$[$i$$3$$].call($element$$16$$, $event$$7$$)
      }
    }
  }, $element$$16$$.attachEvent("onhelp", $element$$16$$.$__customListener$));
  $element$$16$$["__" + $type$$54$$] === $JSCompiler_alias_VOID$$ && ($element$$16$$["__" + $type$$54$$] = []);
  $element$$16$$["__" + $type$$54$$].push($handler$$9$$)
}
var $tuna$dom$__lastElementId$$ = 0;
function $tuna$dom$preventDefault$$($event$$9$$) {
  $event$$9$$.preventDefault !== $JSCompiler_alias_VOID$$ ? $event$$9$$.preventDefault() : $event$$9$$.returnValue = $JSCompiler_alias_FALSE$$
}
function $tuna$dom$stopPropagation$$($event$$10$$) {
  $event$$10$$.stopPropagation !== $JSCompiler_alias_VOID$$ ? $event$$10$$.stopPropagation() : $event$$10$$.cancelBubble = $JSCompiler_alias_TRUE$$
}
function $tuna$dom$getParentMatches$$($element$$19_parent$$2$$, $selector$$6$$, $opt_context$$7$$) {
  for($element$$19_parent$$2$$ = $element$$19_parent$$2$$.parentNode;$element$$19_parent$$2$$ !== $JSCompiler_alias_NULL$$ && $element$$19_parent$$2$$ !== $opt_context$$7$$ && !$tuna$dom$matchesSelector$$($element$$19_parent$$2$$, $selector$$6$$);) {
    $element$$19_parent$$2$$ = $element$$19_parent$$2$$.parentNode
  }
  return $element$$19_parent$$2$$ === $opt_context$$7$$ ? $JSCompiler_alias_NULL$$ : $element$$19_parent$$2$$
}
function $tuna$dom$hasClass$$($element$$21$$, $className$$2$$) {
  return $element$$21$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$21$$.classList.contains($className$$2$$) : $element$$21$$.className !== $JSCompiler_alias_VOID$$ ? $element$$21$$.className.match(RegExp("(\\s|^)" + $className$$2$$ + "(\\s|$)")) !== $JSCompiler_alias_NULL$$ : $JSCompiler_alias_FALSE$$
}
function $tuna$dom$addClass$$($element$$22$$, $className$$3$$) {
  $element$$22$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$22$$.classList.add($className$$3$$) : $tuna$dom$hasClass$$($element$$22$$, $className$$3$$) || ($element$$22$$.className += " " + $className$$3$$)
}
function $tuna$dom$removeClass$$($element$$23$$, $className$$4$$) {
  $element$$23$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$23$$.classList.remove($className$$4$$) : $tuna$dom$hasClass$$($element$$23$$, $className$$4$$) && ($element$$23$$.className = $element$$23$$.className.replace(RegExp("(\\s|^)" + $className$$4$$ + "(\\s|$)"), " "))
}
function $tuna$dom$setClassExist$$($element$$24$$, $className$$5$$, $isExist$$) {
  !$isExist$$ && $tuna$dom$hasClass$$($element$$24$$, $className$$5$$) ? $tuna$dom$removeClass$$($element$$24$$, $className$$5$$) : $isExist$$ && !$tuna$dom$hasClass$$($element$$24$$, $className$$5$$) && $tuna$dom$addClass$$($element$$24$$, $className$$5$$)
}
;function $tuna$events$BasicEvent$$($target$$37$$, $type$$58$$, $opt_isBubbling$$) {
  this.$_target$ = $target$$37$$;
  this.$_type$ = $type$$58$$;
  this.$_isBubbling$ = !!$opt_isBubbling$$;
  this.$_isImmediateStopped$ = this.$_isStopped$ = this.$_isCanceled$ = $JSCompiler_alias_FALSE$$
}
$tuna$events$BasicEvent$$.prototype.$getTarget$ = $JSCompiler_get$$("$_target$");
$tuna$events$BasicEvent$$.prototype.$getType$ = $JSCompiler_get$$("$_type$");
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
  var $data$$20$$ = $opt_data$$3$$ !== $JSCompiler_alias_VOID$$ ? $opt_data$$3$$ : $JSCompiler_alias_NULL$$, $type$$62$$ = $event$$12$$.$getType$();
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
        for(var $i$$inline_27$$ = 0, $l$$inline_28$$ = $self$$1$$.$__requests$.length;$i$$inline_27$$ < $l$$inline_28$$;) {
          $self$$1$$.$__requests$[$i$$inline_27$$] === $request$$ && $self$$1$$.$__requests$.splice($i$$inline_27$$, 1), $i$$inline_27$$++
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
function $tuna$tmpl$data$DataNode$$($value$$42$$, $opt_parent$$, $opt_key$$1$$) {
  this.$__value$ = $value$$42$$;
  this.$__parent$ = $opt_parent$$ || $tuna$tmpl$data$NULL_NODE$$;
  this.$__key$ = $opt_key$$1$$ || $JSCompiler_alias_NULL$$;
  this.$__keyNode$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {}
}
$JSCompiler_prototypeAlias$$ = $tuna$tmpl$data$DataNode$$.prototype;
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$__parent$");
$JSCompiler_prototypeAlias$$.getKey = function $$JSCompiler_prototypeAlias$$$getKey$() {
  this.$__keyNode$ === $JSCompiler_alias_NULL$$ && (this.$__keyNode$ = new $tuna$tmpl$data$DataNode$$(this.$__key$));
  return this.$__keyNode$
};
$JSCompiler_prototypeAlias$$.$getRoot$ = function $$JSCompiler_prototypeAlias$$$$getRoot$$() {
  return this.$__parent$ !== $tuna$tmpl$data$NULL_NODE$$ ? this.$__parent$.$getRoot$() : this
};
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$__value$");
$JSCompiler_prototypeAlias$$.getStringValue = function $$JSCompiler_prototypeAlias$$$getStringValue$() {
  return this.$__value$ !== $JSCompiler_alias_NULL$$ ? this.$__value$.toString() : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_growChild$$($JSCompiler_StaticMethods_growChild$self$$, $key$$16$$) {
  if($JSCompiler_StaticMethods_growChild$self$$ === $tuna$tmpl$data$NULL_NODE$$) {
    return $JSCompiler_StaticMethods_growChild$self$$
  }
  $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] === $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] = $JSCompiler_StaticMethods_growChild$self$$.$__value$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$16$$] !== $JSCompiler_alias_VOID$$ ? new $tuna$tmpl$data$DataNode$$($JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$16$$], $JSCompiler_StaticMethods_growChild$self$$, $key$$16$$) : 
  $tuna$tmpl$data$NULL_NODE$$);
  return $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$]
}
var $tuna$tmpl$data$NULL_NODE$$ = new $tuna$tmpl$data$DataNode$$($JSCompiler_alias_NULL$$);
function $tuna$tmpl$data$PathEvaluator$$() {
  this.$__parsedPath$ = $JSCompiler_alias_NULL$$
}
$tuna$tmpl$data$PathEvaluator$$.prototype.$setPath$ = function $$tuna$tmpl$data$PathEvaluator$$$$$setPath$$($path$$4$$) {
  this.$__parsedPath$ = $path$$4$$.split("/")
};
$tuna$tmpl$data$PathEvaluator$$.prototype.evaluate = function $$tuna$tmpl$data$PathEvaluator$$$$evaluate$($dataNode$$) {
  return this.$__parsedPath$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods___applyNextToken$$(this, this.$__parsedPath$, $dataNode$$, 0) : $tuna$tmpl$data$NULL_NODE$$
};
function $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $dataNode$$1$$, $index$$51$$) {
  var $token$$4$$ = $path$$5$$[$index$$51$$];
  return $token$$4$$ !== $JSCompiler_alias_VOID$$ && $dataNode$$1$$ !== $tuna$tmpl$data$NULL_NODE$$ ? $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $JSCompiler_StaticMethods___applyToken$$($token$$4$$, $dataNode$$1$$), ++$index$$51$$) : $dataNode$$1$$
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
;function $tuna$tmpl$settings$SpotSettings$$($targetSelector$$, $dataPath$$) {
  this.$targetSelector$ = $targetSelector$$;
  this.$dataPath$ = $dataPath$$;
  this.pattern = $JSCompiler_alias_NULL$$
}
$tuna$tmpl$settings$SpotSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("spot");
function $tuna$tmpl$settings$AttributeSettings$$($targetSelector$$1$$, $dataPath$$1$$, $attributeName$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$1$$, $dataPath$$1$$);
  this.$attributeName$ = $attributeName$$;
  this.$hasEvent$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$AttributeSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$AttributeSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("attribute");
function $tuna$tmpl$settings$ConditionSettings$$($targetSelector$$2$$, $dataPath$$2$$, $actionType$$, $operatorType$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$2$$, $dataPath$$2$$);
  this.$actionType$ = $actionType$$;
  this.$operatorType$ = $operatorType$$;
  this.$operatorData$ = this.$actionData$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$settings$ConditionSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$ConditionSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("condition");
function $tuna$tmpl$settings$CheckboxSettings$$($targetSelector$$3$$, $dataPath$$3$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$3$$, $dataPath$$3$$)
}
$tuna$utils$extend$$($tuna$tmpl$settings$CheckboxSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$CheckboxSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("checkbox");
function $tuna$tmpl$settings$ListSettings$$($targetSelector$$4$$, $dataPath$$4$$, $keyPath$$1$$, $itemRendererID$$, $itemSettings$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$4$$, $dataPath$$4$$);
  this.keyPath = $keyPath$$1$$;
  this.$itemRendererID$ = $itemRendererID$$;
  this.$itemSettings$ = $itemSettings$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$ListSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$ListSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("list");
function $tuna$tmpl$settings$TemplateSettings$$() {
  this.$__items$ = []
}
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getItemsCount$ = function $$tuna$tmpl$settings$TemplateSettings$$$$$getItemsCount$$() {
  return this.$__items$.length
};
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getItemAt$ = function $$tuna$tmpl$settings$TemplateSettings$$$$$getItemAt$$($index$$52$$) {
  return this.$__items$[$index$$52$$]
};
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("template");
function $tuna$tmpl$markup$SpotExtractor$$() {
  this.$_tagName$ = "spot";
  this.$_ns$ = "tuna:"
}
$tuna$tmpl$markup$SpotExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$SpotExtractor$$$$$_createItem$$($element$$28$$) {
  var $selector$$7_spot$$ = $element$$28$$.getAttribute(this.$_ns$ + "target"), $dataPath$$5$$ = $element$$28$$.getAttribute(this.$_ns$ + "path");
  return $selector$$7_spot$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$5$$ !== $JSCompiler_alias_NULL$$ ? ($selector$$7_spot$$ = new $tuna$tmpl$settings$SpotSettings$$($selector$$7_spot$$, $dataPath$$5$$), $selector$$7_spot$$.pattern = $element$$28$$.getAttribute(this.$_ns$ + "pattern"), $selector$$7_spot$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$ListExtractor$$($templateBuilder$$) {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "list";
  this.$__templateBuilder$ = $templateBuilder$$
}
$tuna$utils$extend$$($tuna$tmpl$markup$ListExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$ListExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$ListExtractor$$$$$_createItem$$($element$$29$$) {
  var $list$$2_selector$$8$$ = $element$$29$$.getAttribute(this.$_ns$ + "target"), $dataPath$$6$$ = $element$$29$$.getAttribute(this.$_ns$ + "path"), $keyPath$$2$$ = $element$$29$$.getAttribute(this.$_ns$ + "key-path"), $itemRendererID$$1$$ = $element$$29$$.getAttribute(this.$_ns$ + "item-renderer-id"), $itemSettings$$1$$ = $JSCompiler_alias_NULL$$, $templateID$$ = $element$$29$$.getAttribute(this.$_ns$ + "item-template-id");
  $templateID$$ !== $JSCompiler_alias_NULL$$ && ($itemSettings$$1$$ = $JSCompiler_StaticMethods_buildSettings$$(this.$__templateBuilder$, $templateID$$));
  return $list$$2_selector$$8$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$6$$ !== $JSCompiler_alias_NULL$$ && $keyPath$$2$$ !== $JSCompiler_alias_NULL$$ && $itemRendererID$$1$$ !== $JSCompiler_alias_NULL$$ && $itemSettings$$1$$ !== $JSCompiler_alias_NULL$$ ? ($list$$2_selector$$8$$ = new $tuna$tmpl$settings$ListSettings$$($list$$2_selector$$8$$, $dataPath$$6$$, $keyPath$$2$$, $itemRendererID$$1$$, $itemSettings$$1$$), $list$$2_selector$$8$$.pattern = $element$$29$$.getAttribute(this.$_ns$ + "pattern"), 
  $list$$2_selector$$8$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$AttributeExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "attr"
}
$tuna$utils$extend$$($tuna$tmpl$markup$AttributeExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$AttributeExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$AttributeExtractor$$$$$_createItem$$($element$$30$$) {
  var $attribute$$2_selector$$9$$ = $element$$30$$.getAttribute(this.$_ns$ + "target"), $dataPath$$7$$ = $element$$30$$.getAttribute(this.$_ns$ + "path"), $attributeName$$1$$ = $element$$30$$.getAttribute(this.$_ns$ + "name");
  return $attribute$$2_selector$$9$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$7$$ !== $JSCompiler_alias_NULL$$ && $attributeName$$1$$ !== $JSCompiler_alias_NULL$$ ? ($attribute$$2_selector$$9$$ = new $tuna$tmpl$settings$AttributeSettings$$($attribute$$2_selector$$9$$, $dataPath$$7$$, $attributeName$$1$$), $attribute$$2_selector$$9$$.pattern = $element$$30$$.getAttribute(this.$_ns$ + "pattern"), $attribute$$2_selector$$9$$.$hasEvent$ = !!$element$$30$$.getAttribute(this.$_ns$ + "event"), $attribute$$2_selector$$9$$) : 
  $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$ConditionExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "if";
  this.$__operators$ = [];
  this.$__actions$ = []
}
$tuna$utils$extend$$($tuna$tmpl$markup$ConditionExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$ConditionExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$ConditionExtractor$$$$$_createItem$$($element$$31$$) {
  var $condition$$1_selector$$10$$ = $element$$31$$.getAttribute(this.$_ns$ + "target"), $dataPath$$8$$ = $element$$31$$.getAttribute(this.$_ns$ + "path"), $actionAttribute_name$$inline_33$$;
  a: {
    for($actionAttribute_name$$inline_33$$ in this.$__actions$) {
      if($element$$31$$.attributes[$actionAttribute_name$$inline_33$$]) {
        $actionAttribute_name$$inline_33$$ = $element$$31$$.attributes[$actionAttribute_name$$inline_33$$];
        break a
      }
    }
    $actionAttribute_name$$inline_33$$ = $JSCompiler_alias_NULL$$
  }
  var $name$$inline_37_operatorAttribute$$;
  a: {
    for($name$$inline_37_operatorAttribute$$ in this.$__operators$) {
      if($element$$31$$.attributes[$name$$inline_37_operatorAttribute$$]) {
        $name$$inline_37_operatorAttribute$$ = $element$$31$$.attributes[$name$$inline_37_operatorAttribute$$];
        break a
      }
    }
    $name$$inline_37_operatorAttribute$$ = $JSCompiler_alias_NULL$$
  }
  return $condition$$1_selector$$10$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$8$$ !== $JSCompiler_alias_NULL$$ && $actionAttribute_name$$inline_33$$ !== $JSCompiler_alias_NULL$$ && $name$$inline_37_operatorAttribute$$ !== $JSCompiler_alias_NULL$$ ? ($condition$$1_selector$$10$$ = new $tuna$tmpl$settings$ConditionSettings$$($condition$$1_selector$$10$$, $dataPath$$8$$, $actionAttribute_name$$inline_33$$.name, $name$$inline_37_operatorAttribute$$.name), $condition$$1_selector$$10$$.pattern = $element$$31$$.getAttribute(this.$_ns$ + 
  "pattern"), $condition$$1_selector$$10$$.$actionData$ = $actionAttribute_name$$inline_33$$.value, $condition$$1_selector$$10$$.$operatorData$ = $name$$inline_37_operatorAttribute$$.value, $condition$$1_selector$$10$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$CheckboxExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "checkbox"
}
$tuna$utils$extend$$($tuna$tmpl$markup$CheckboxExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$CheckboxExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$CheckboxExtractor$$$$$_createItem$$($element$$34$$) {
  var $checkbox_selector$$11$$ = $element$$34$$.getAttribute(this.$_ns$ + "target"), $dataPath$$9$$ = $element$$34$$.getAttribute(this.$_ns$ + "path");
  return $checkbox_selector$$11$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$9$$ !== $JSCompiler_alias_NULL$$ ? ($checkbox_selector$$11$$ = new $tuna$tmpl$settings$CheckboxSettings$$($checkbox_selector$$11$$, $dataPath$$9$$), $checkbox_selector$$11$$.pattern = $element$$34$$.getAttribute(this.$_ns$ + "pattern"), $checkbox_selector$$11$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$MarkupTemplateBuilder$$() {
  this.$__templatesTable$ = {};
  this.$__extractors$ = []
}
function $JSCompiler_StaticMethods_addExtractor$$($extractor$$) {
  $tuna$tmpl$__markupBuilder$$.$__extractors$.push($extractor$$)
}
function $JSCompiler_StaticMethods_buildSettings$$($JSCompiler_StaticMethods_buildSettings$self$$, $templateID$$1$$) {
  if($JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] === $JSCompiler_alias_VOID$$) {
    var $element$$35$$ = document.getElementById($templateID$$1$$);
    if($element$$35$$ !== $JSCompiler_alias_NULL$$) {
      for(var $template$$ = new $tuna$tmpl$settings$TemplateSettings$$, $i$$19$$ = 0, $l$$16$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$.length, $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$ = $JSCompiler_alias_NULL$$;$i$$19$$ < $l$$16$$;) {
        for(var $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$[$i$$19$$], $result$$inline_41$$ = [], $elements$$inline_42$$ = Array.prototype.slice.call($element$$35$$.getElementsByTagName($tuna$IS_IE$$ ? $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$.$_tagName$ : $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$.$_ns$ + $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$.$_tagName$)), 
        $i$$inline_43$$ = 0, $l$$inline_44$$ = $elements$$inline_42$$.length, $item$$inline_45$$ = $JSCompiler_alias_NULL$$;$i$$inline_43$$ < $l$$inline_44$$;) {
          $item$$inline_45$$ = $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$.$_createItem$($elements$$inline_42$$[$i$$inline_43$$]), $item$$inline_45$$ !== $JSCompiler_alias_NULL$$ && $result$$inline_41$$.push($item$$inline_45$$), $i$$inline_43$$++
        }
        $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$ = $result$$inline_41$$;
        $JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$ !== $JSCompiler_alias_NULL$$ && ($template$$.$__items$ = $template$$.$__items$.concat($JSCompiler_StaticMethods_extract$self$$inline_39_items$$1$$));
        $i$$19$$++
      }
      $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] = $template$$
    }
  }
  return $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] || $JSCompiler_alias_NULL$$
}
;function $tuna$tmpl$units$list$ListContainerRouter$$($container$$, $rootTemplate$$) {
  this.$_container$ = $container$$;
  this.$_rootTemplate$ = $rootTemplate$$
}
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.append = function $$tuna$tmpl$units$list$ListContainerRouter$$$$append$($node$$2$$) {
  this.$_container$.appendChild($node$$2$$);
  var $JSCompiler_StaticMethods_registerChildCreation$self$$inline_50$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildCreation$self$$inline_50$$.$__createdChildren$ = $JSCompiler_StaticMethods_registerChildCreation$self$$inline_50$$.$__createdChildren$.concat($node$$2$$)
};
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.remove = function $$tuna$tmpl$units$list$ListContainerRouter$$$$remove$($node$$3$$) {
  this.$_container$.removeChild($node$$3$$);
  var $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_53$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_53$$.$__removedChildren$ = $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_53$$.$__removedChildren$.concat($node$$3$$)
};
function $tuna$tmpl$units$condition$ClassAction$$($opt_data$$6$$) {
  this.$_data$ = $opt_data$$6$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$ClassAction$$, $tuna$tmpl$units$condition$ConditionAction$$);
$tuna$tmpl$units$condition$ClassAction$$.prototype.apply = function $$tuna$tmpl$units$condition$ClassAction$$$$apply$($element$$38$$, $testResult$$) {
  "" !== this.$_data$ && $tuna$dom$setClassExist$$($element$$38$$, this.$_data$, $testResult$$)
};
function $tuna$tmpl$units$condition$ConditionAction$$($opt_data$$7$$) {
  this.$_data$ = $opt_data$$7$$ || ""
}
$tuna$tmpl$units$condition$ConditionAction$$.prototype.apply = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$condition$ConditionAction$$.prototype.$clone$ = function $$tuna$tmpl$units$condition$ConditionAction$$$$$clone$$($data$$26$$) {
  return new this.constructor($data$$26$$)
};
function $tuna$tmpl$units$condition$ConditionOperator$$($opt_data$$8$$) {
  this.$_data$ = $opt_data$$8$$ || ""
}
$tuna$tmpl$units$condition$ConditionOperator$$.prototype.test = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$condition$ConditionOperator$$.prototype.$clone$ = function $$tuna$tmpl$units$condition$ConditionOperator$$$$$clone$$($data$$27$$) {
  return new this.constructor($data$$27$$)
};
function $tuna$tmpl$units$condition$EqualsOperator$$($opt_data$$9$$) {
  this.$_data$ = $opt_data$$9$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$EqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$EqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$EqualsOperator$$$$test$($value$$46$$) {
  return $value$$46$$ === this.$_data$ || $value$$46$$ + "" === this.$_data$
};
function $tuna$tmpl$units$condition$IsSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$IsSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$IsSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$IsSetOperator$$$$test$($value$$47$$) {
  return $value$$47$$ != $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$condition$NotEqualsOperator$$($opt_data$$10$$) {
  this.$_data$ = $opt_data$$10$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotEqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotEqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotEqualsOperator$$$$test$($value$$48$$) {
  return!($value$$48$$ == this.$_data$ || $value$$48$$ + "" == this.$_data$)
};
function $tuna$tmpl$units$condition$NotSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotSetOperator$$$$test$($value$$49$$) {
  return $value$$49$$ == $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$Unit$$($root$$) {
  this.$_rootTemplate$ = $root$$
}
$tuna$tmpl$units$Unit$$.prototype.$applyData$ = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$Unit$$.prototype.$destroy$ = $JSCompiler_emptyFn$$();
function $tuna$tmpl$units$Spot$$($root$$1$$) {
  this.$_rootTemplate$ = $root$$1$$;
  this.$__pathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$_nodes$ = [];
  this.$_pattern$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Spot$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$Spot$$.prototype.$setPath$ = function $$tuna$tmpl$units$Spot$$$$$setPath$$($path$$6$$) {
  this.$__pathEvaluator$.$setPath$($path$$6$$)
};
$tuna$tmpl$units$Spot$$.prototype.$applyData$ = function $$tuna$tmpl$units$Spot$$$$$applyData$$($dataNode$$5_value$$50$$) {
  $dataNode$$5_value$$50$$ = this.$__pathEvaluator$.evaluate($dataNode$$5_value$$50$$).$getValue$();
  this.$_pattern$ !== $JSCompiler_alias_NULL$$ && $dataNode$$5_value$$50$$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$5_value$$50$$ = this.$_pattern$.join($dataNode$$5_value$$50$$));
  this.$_applyValue$($dataNode$$5_value$$50$$)
};
$tuna$tmpl$units$Spot$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Spot$$$$$_applyValue$$($i$$20_value$$51$$) {
  var $html$$1$$ = "";
  $i$$20_value$$51$$ !== $JSCompiler_alias_NULL$$ && ($html$$1$$ = $i$$20_value$$51$$.toString());
  for($i$$20_value$$51$$ = this.$_nodes$.length - 1;0 <= $i$$20_value$$51$$;) {
    this.$_nodes$[$i$$20_value$$51$$].innerHTML !== $html$$1$$ && (this.$_nodes$[$i$$20_value$$51$$].innerHTML = $html$$1$$), $i$$20_value$$51$$--
  }
};
$tuna$tmpl$units$Spot$$.prototype.$destroy$ = function $$tuna$tmpl$units$Spot$$$$$destroy$$() {
  this.$_nodes$.length = 0
};
function $tuna$tmpl$units$Attribute$$($root$$2$$, $attributeName$$2$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$2$$);
  this.$__attributeName$ = $attributeName$$2$$;
  this.$__hasEvent$ = $JSCompiler_alias_FALSE$$;
  this.$__dispatchAttribute$ = $tuna$utils$bind$$(this.$__dispatchAttribute$, this)
}
$tuna$utils$extend$$($tuna$tmpl$units$Attribute$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Attribute$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Attribute$$$$$_applyValue$$($i$$inline_73_value$$52$$) {
  if($i$$inline_73_value$$52$$ !== $JSCompiler_alias_NULL$$) {
    for(var $i$$inline_70$$ = this.$_nodes$.length - 1;0 <= $i$$inline_70$$;) {
      this.$_nodes$[$i$$inline_70$$][this.$__attributeName$] !== $JSCompiler_alias_VOID$$ ? this.$_nodes$[$i$$inline_70$$][this.$__attributeName$] = $i$$inline_73_value$$52$$ : this.$_nodes$[$i$$inline_70$$].setAttribute(this.$__attributeName$, $i$$inline_73_value$$52$$ + ""), $i$$inline_70$$--
    }
  }else {
    for($i$$inline_73_value$$52$$ = this.$_nodes$.length - 1;0 <= $i$$inline_73_value$$52$$;) {
      this.$_nodes$[$i$$inline_73_value$$52$$].removeAttribute(this.$__attributeName$), $i$$inline_73_value$$52$$--
    }
  }
  this.$__hasEvent$ && setTimeout(this.$__dispatchAttribute$, 0)
};
$tuna$tmpl$units$Attribute$$.prototype.$__dispatchAttribute$ = function $$tuna$tmpl$units$Attribute$$$$$__dispatchAttribute$$() {
  for(var $i$$23$$ = this.$_nodes$.length - 1;0 <= $i$$23$$;) {
    var $element$$inline_466_element$$inline_77$$ = this.$_nodes$[$i$$23$$], $type$$inline_78$$ = this.$__attributeName$, $event$$inline_467_event$$inline_79$$ = $JSCompiler_alias_NULL$$;
    if(document.createEventObject !== $JSCompiler_alias_VOID$$) {
      var $event$$inline_467_event$$inline_79$$ = document.createEventObject(), $eventName$$inline_80$$ = "on" + $type$$inline_78$$;
      $element$$inline_466_element$$inline_77$$[$eventName$$inline_80$$] === $JSCompiler_alias_VOID$$ ? ($event$$inline_467_event$$inline_79$$.$__type$ = $type$$inline_78$$, $element$$inline_466_element$$inline_77$$.fireEvent("onhelp", $event$$inline_467_event$$inline_79$$)) : $element$$inline_466_element$$inline_77$$.fireEvent($eventName$$inline_80$$, $event$$inline_467_event$$inline_79$$)
    }else {
      $event$$inline_467_event$$inline_79$$ = document.createEvent("UIEvents"), $event$$inline_467_event$$inline_79$$.initUIEvent($type$$inline_78$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, window, 1), $element$$inline_466_element$$inline_77$$.dispatchEvent($event$$inline_467_event$$inline_79$$)
    }
    $i$$23$$--
  }
};
function $tuna$tmpl$units$Condition$$($root$$3$$, $action$$, $operator$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$3$$);
  this.$__action$ = $action$$;
  this.$__operator$ = $operator$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Condition$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Condition$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Condition$$$$$_applyValue$$($value$$54$$) {
  for(var $testResult$$2$$ = this.$__operator$.test($value$$54$$), $i$$24$$ = this.$_nodes$.length - 1;0 <= $i$$24$$;) {
    this.$__action$.apply(this.$_nodes$[$i$$24$$], $testResult$$2$$, $value$$54$$), $i$$24$$--
  }
};
function $tuna$tmpl$units$Checkbox$$($root$$4$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$4$$)
}
$tuna$utils$extend$$($tuna$tmpl$units$Checkbox$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Checkbox$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Checkbox$$$$$_applyValue$$($value$$55$$) {
  if($value$$55$$ !== $JSCompiler_alias_NULL$$) {
    var $i$$25$$ = this.$_nodes$.length - 1;
    if($value$$55$$ === $JSCompiler_alias_TRUE$$ || $value$$55$$ === $JSCompiler_alias_FALSE$$) {
      for(;0 <= $i$$25$$;) {
        this.$_nodes$[$i$$25$$].checked = $value$$55$$, $i$$25$$--
      }
    }else {
      if($value$$55$$ instanceof Array) {
        for(;0 <= $i$$25$$;) {
          this.$_nodes$[$i$$25$$].checked = -1 !== $tuna$utils$indexOf$$(this.$_nodes$[$i$$25$$].value, $value$$55$$), $i$$25$$--
        }
      }else {
        for($value$$55$$ += "";0 <= $i$$25$$;) {
          this.$_nodes$[$i$$25$$].checked = this.$_nodes$[$i$$25$$].value === $value$$55$$, $i$$25$$--
        }
      }
    }
  }
};
function $tuna$tmpl$units$List$$($root$$5$$) {
  this.$_rootTemplate$ = $root$$5$$;
  this.$__itemSettings$ = this.$__itemRenderer$ = this.$__templateCompiler$ = $JSCompiler_alias_NULL$$;
  this.$__itemsTable$ = {};
  this.$__pathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$__keyPathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$__listNodeRouter$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$List$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$List$$.prototype.$setPath$ = function $$tuna$tmpl$units$List$$$$$setPath$$($path$$7$$) {
  this.$__pathEvaluator$.$setPath$($path$$7$$)
};
$tuna$tmpl$units$List$$.prototype.$applyData$ = function $$tuna$tmpl$units$List$$$$$applyData$$($dataNode$$6_sampleNode_templateTarget$$inline_91$$) {
  var $oldItemsTable$$ = this.$__itemsTable$;
  this.$__itemsTable$ = {};
  var $dataNode$$6_sampleNode_templateTarget$$inline_91$$ = this.$__pathEvaluator$.evaluate($dataNode$$6_sampleNode_templateTarget$$inline_91$$), $sample$$ = $dataNode$$6_sampleNode_templateTarget$$inline_91$$.$getValue$(), $itemTemplate_templateTarget$$inline_85$$ = $JSCompiler_alias_NULL$$, $itemNode$$ = $JSCompiler_alias_NULL$$, $key$$17$$ = $JSCompiler_alias_NULL$$, $index$$53_template$$inline_90$$;
  for($index$$53_template$$inline_90$$ in $sample$$) {
    if($itemNode$$ = $JSCompiler_StaticMethods_growChild$$($dataNode$$6_sampleNode_templateTarget$$inline_91$$, $index$$53_template$$inline_90$$), $key$$17$$ = this.$__keyPathEvaluator$.evaluate($itemNode$$).getStringValue(), $key$$17$$ !== $JSCompiler_alias_NULL$$) {
      if($oldItemsTable$$[$key$$17$$] === $JSCompiler_alias_VOID$$) {
        if($itemTemplate_templateTarget$$inline_85$$ = this.$__itemRenderer$.cloneNode($JSCompiler_alias_TRUE$$), $itemTemplate_templateTarget$$inline_85$$ !== $JSCompiler_alias_NULL$$ && this.$__itemSettings$ !== $JSCompiler_alias_NULL$$) {
          var $template$$inline_86$$ = this.$__templateCompiler$.compile(this.$__itemSettings$, $itemTemplate_templateTarget$$inline_85$$, this.$_rootTemplate$);
          this.$__listNodeRouter$.append($itemTemplate_templateTarget$$inline_85$$);
          $itemTemplate_templateTarget$$inline_85$$ = $template$$inline_86$$
        }else {
          $itemTemplate_templateTarget$$inline_85$$ = $JSCompiler_alias_NULL$$
        }
      }else {
        $itemTemplate_templateTarget$$inline_85$$ = $oldItemsTable$$[$key$$17$$], delete $oldItemsTable$$[$key$$17$$]
      }
      $itemTemplate_templateTarget$$inline_85$$ !== $JSCompiler_alias_NULL$$ && ($itemTemplate_templateTarget$$inline_85$$.$applyData$($itemNode$$), this.$__itemsTable$[$key$$17$$] = $itemTemplate_templateTarget$$inline_85$$)
    }
  }
  var $dataNode$$6_sampleNode_templateTarget$$inline_91$$ = $index$$53_template$$inline_90$$ = $JSCompiler_alias_NULL$$, $key$$inline_92$$;
  for($key$$inline_92$$ in $oldItemsTable$$) {
    $index$$53_template$$inline_90$$ = $oldItemsTable$$[$key$$inline_92$$], $dataNode$$6_sampleNode_templateTarget$$inline_91$$ = $index$$53_template$$inline_90$$.$getTarget$(), $dataNode$$6_sampleNode_templateTarget$$inline_91$$ !== $JSCompiler_alias_NULL$$ && this.$__listNodeRouter$.remove($dataNode$$6_sampleNode_templateTarget$$inline_91$$), $index$$53_template$$inline_90$$.$destroy$()
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
  for(var $i$$26$$ = this.$__items$.length - 1;0 <= $i$$26$$;) {
    this.$__items$[$i$$26$$].$applyData$($dataNode$$7$$), $i$$26$$--
  }
};
$tuna$tmpl$units$Template$$.prototype.$destroy$ = function $$tuna$tmpl$units$Template$$$$$destroy$$() {
  for(;0 < this.$__items$.length;) {
    this.$__items$.shift().$destroy$()
  }
  this.$__target$ = $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$TemplateCompiler$$() {
  this.$__itemCompilers$ = {}
}
$tuna$tmpl$compilers$TemplateCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$TemplateCompiler$$$$compile$($settings$$2$$, $element$$43$$, $opt_root$$1_root$$7$$) {
  var $template$$3$$ = new $tuna$tmpl$units$Template$$($opt_root$$1_root$$7$$);
  $template$$3$$.$__target$ = $element$$43$$;
  for(var $i$$27$$ = 0, $l$$17$$ = $settings$$2$$.$getItemsCount$(), $opt_root$$1_root$$7$$ = $opt_root$$1_root$$7$$ || $template$$3$$, $compiler$$2_items$$3$$ = $JSCompiler_alias_NULL$$, $itemSettings$$2$$ = $compiler$$2_items$$3$$ = $JSCompiler_alias_NULL$$;$i$$27$$ < $l$$17$$;) {
    $itemSettings$$2$$ = $settings$$2$$.$getItemAt$($i$$27$$), $compiler$$2_items$$3$$ = this.$__itemCompilers$[$itemSettings$$2$$.$getType$()], $compiler$$2_items$$3$$ !== $JSCompiler_alias_VOID$$ && ($compiler$$2_items$$3$$ = $compiler$$2_items$$3$$.compile($element$$43$$, $itemSettings$$2$$, $opt_root$$1_root$$7$$), $compiler$$2_items$$3$$ !== $JSCompiler_alias_NULL$$ && ($template$$3$$.$__items$ = $template$$3$$.$__items$.concat($compiler$$2_items$$3$$))), $i$$27$$++
  }
  return $template$$3$$
};
function $tuna$tmpl$compilers$SpotCompiler$$() {
}
$tuna$tmpl$compilers$SpotCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$SpotCompiler$$$$compile$($element$$44$$, $settings$$3$$, $root$$8_spot$$1$$) {
  return $settings$$3$$ instanceof $tuna$tmpl$settings$SpotSettings$$ ? ($root$$8_spot$$1$$ = new $tuna$tmpl$units$Spot$$($root$$8_spot$$1$$), $JSCompiler_StaticMethods__setupSpot$$($element$$44$$, $root$$8_spot$$1$$, $settings$$3$$), $root$$8_spot$$1$$) : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__setupSpot$$($element$$45_elements$$inline_109$$, $spot$$2$$, $selector$$12_settings$$4$$) {
  $spot$$2$$.$setPath$($selector$$12_settings$$4$$.$dataPath$);
  $selector$$12_settings$$4$$.pattern !== $JSCompiler_alias_NULL$$ && ($spot$$2$$.$_pattern$ = $selector$$12_settings$$4$$.pattern.split("$$"));
  $selector$$12_settings$$4$$ = $selector$$12_settings$$4$$.$targetSelector$;
  $tuna$dom$matchesSelector$$($element$$45_elements$$inline_109$$, $selector$$12_settings$$4$$) || ($element$$45_elements$$inline_109$$ = $tuna$dom$select$$($selector$$12_settings$$4$$, $element$$45_elements$$inline_109$$));
  $spot$$2$$.$_nodes$ = $spot$$2$$.$_nodes$.concat($element$$45_elements$$inline_109$$)
}
;function $tuna$tmpl$compilers$AttributeCompiler$$() {
}
$tuna$utils$extend$$($tuna$tmpl$compilers$AttributeCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$AttributeCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$AttributeCompiler$$$$compile$($element$$46$$, $settings$$5$$, $attribute$$3_root$$9$$) {
  return $settings$$5$$ instanceof $tuna$tmpl$settings$AttributeSettings$$ ? ($attribute$$3_root$$9$$ = new $tuna$tmpl$units$Attribute$$($attribute$$3_root$$9$$, $settings$$5$$.$attributeName$), $JSCompiler_StaticMethods__setupSpot$$($element$$46$$, $attribute$$3_root$$9$$, $settings$$5$$), $attribute$$3_root$$9$$.$__hasEvent$ = $settings$$5$$.$hasEvent$, $attribute$$3_root$$9$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$ConditionCompiler$$() {
  this.$__actions$ = {};
  this.$__operators$ = {}
}
$tuna$utils$extend$$($tuna$tmpl$compilers$ConditionCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$ConditionCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$ConditionCompiler$$$$compile$($element$$47$$, $settings$$6$$, $condition$$2_root$$10$$) {
  if($settings$$6$$ instanceof $tuna$tmpl$settings$ConditionSettings$$) {
    var $action$$2_actionPrototype$$ = this.$__actions$[$settings$$6$$.$actionType$], $operator$$2_operatorPrototype$$ = this.$__operators$[$settings$$6$$.$operatorType$];
    if($action$$2_actionPrototype$$ !== $JSCompiler_alias_VOID$$ && $operator$$2_operatorPrototype$$ !== $JSCompiler_alias_VOID$$) {
      return $action$$2_actionPrototype$$ = $action$$2_actionPrototype$$.$clone$($settings$$6$$.$actionData$), $operator$$2_operatorPrototype$$ = $operator$$2_operatorPrototype$$.$clone$($settings$$6$$.$operatorData$), $condition$$2_root$$10$$ = new $tuna$tmpl$units$Condition$$($condition$$2_root$$10$$, $action$$2_actionPrototype$$, $operator$$2_operatorPrototype$$), $JSCompiler_StaticMethods__setupSpot$$($element$$47$$, $condition$$2_root$$10$$, $settings$$6$$), $condition$$2_root$$10$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$CheckboxCompiler$$() {
}
$tuna$utils$extend$$($tuna$tmpl$compilers$CheckboxCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$CheckboxCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$CheckboxCompiler$$$$compile$($element$$48$$, $settings$$7$$, $checkbox$$1_root$$11$$) {
  return $settings$$7$$ instanceof $tuna$tmpl$settings$CheckboxSettings$$ ? ($checkbox$$1_root$$11$$ = new $tuna$tmpl$units$Checkbox$$($checkbox$$1_root$$11$$), $JSCompiler_StaticMethods__setupSpot$$($element$$48$$, $checkbox$$1_root$$11$$, $settings$$7$$), $checkbox$$1_root$$11$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$ListCompiler$$($compiler$$3$$) {
  this.$__templateCompiler$ = $compiler$$3$$
}
$tuna$tmpl$compilers$ListCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$ListCompiler$$$$compile$($element$$49$$, $settings$$8$$, $root$$12$$) {
  if($settings$$8$$ instanceof $tuna$tmpl$settings$ListSettings$$) {
    var $renderer$$ = document.getElementById($settings$$8$$.$itemRendererID$);
    if($renderer$$ !== $JSCompiler_alias_NULL$$) {
      $renderer$$ = $renderer$$.cloneNode($JSCompiler_alias_TRUE$$);
      $renderer$$.removeAttribute("id");
      var $selector$$13$$ = $settings$$8$$.$targetSelector$;
      if($tuna$dom$matchesSelector$$($element$$49$$, $selector$$13$$)) {
        return $JSCompiler_StaticMethods___compileList$$(this, $element$$49$$, $renderer$$, $settings$$8$$, $root$$12$$)
      }
      for(var $lists$$ = [], $elements$$3$$ = $tuna$dom$select$$($selector$$13$$, $element$$49$$), $i$$28$$ = $elements$$3$$.length - 1;0 <= $i$$28$$;) {
        $tuna$dom$getParentMatches$$($elements$$3$$[$i$$28$$], $selector$$13$$, $element$$49$$) === $JSCompiler_alias_NULL$$ && $lists$$.push($JSCompiler_StaticMethods___compileList$$(this, $elements$$3$$[$i$$28$$], $renderer$$, $settings$$8$$, $root$$12$$)), $i$$28$$--
      }
      return $lists$$
    }
    throw'Cannot find item renderer with id: "' + $settings$$8$$.$itemRendererID$ + '"';
  }
  return $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods___compileList$$($JSCompiler_StaticMethods___compileList$self$$, $element$$50$$, $itemRenderer$$, $settings$$9$$, $root$$13$$) {
  var $list$$3$$ = new $tuna$tmpl$units$List$$($root$$13$$);
  $list$$3$$.$__templateCompiler$ = $JSCompiler_StaticMethods___compileList$self$$.$__templateCompiler$;
  $list$$3$$.$__itemRenderer$ = $itemRenderer$$;
  $list$$3$$.$__itemSettings$ = $settings$$9$$.$itemSettings$;
  $list$$3$$.$__keyPathEvaluator$.$setPath$($settings$$9$$.keyPath);
  $list$$3$$.$setPath$($settings$$9$$.$dataPath$);
  $list$$3$$.$__listNodeRouter$ = new $tuna$tmpl$units$list$ListContainerRouter$$($element$$50$$, $root$$13$$);
  return $list$$3$$
}
;var $tuna$tmpl$__compiler$$ = $JSCompiler_alias_NULL$$, $tuna$tmpl$__markupBuilder$$ = $JSCompiler_alias_NULL$$, $tuna$tmpl$__settingsTable$$ = {};
function $tuna$ui$Module$$($selector$$14$$) {
  this.$_selector$ = $selector$$14$$
}
$tuna$ui$Module$$.prototype.init = function $$tuna$ui$Module$$$$init$($context$$2$$, $container$$1$$) {
  var $instances$$ = [], $targets_targets$$inline_178$$;
  $targets_targets$$inline_178$$ = $tuna$dom$select$$(this.$_selector$, $context$$2$$);
  $targets_targets$$inline_178$$ = $targets_targets$$inline_178$$.concat($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches(this.$_selector$, [$context$$2$$]) : []);
  for(var $i$$29$$ = 0, $l$$18$$ = $targets_targets$$inline_178$$.length, $instance_target$$inline_181$$ = $JSCompiler_alias_NULL$$;$i$$29$$ < $l$$18$$;) {
    for(var $instance_target$$inline_181$$ = $targets_targets$$inline_178$$[$i$$29$$], $context$$inline_182$$ = $context$$2$$, $JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ = $JSCompiler_alias_TRUE$$, $isolators$$inline_184$$ = $tuna$ui$__isolators$$, $i$$inline_185$$ = 0, $l$$inline_186$$ = $isolators$$inline_184$$.length;$i$$inline_185$$ < $l$$inline_186$$;) {
      if($instance_target$$inline_181$$ !== $context$$inline_182$$) {
        if($JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ && ($JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ = !$tuna$dom$hasClass$$($instance_target$$inline_181$$, $isolators$$inline_184$$[$i$$inline_185$$]))) {
          for(var $JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ = $isolators$$inline_184$$[$i$$inline_185$$], $opt_context$$inline_473$$ = $context$$inline_182$$, $parent$$inline_474$$ = $instance_target$$inline_181$$.parentNode;$parent$$inline_474$$ !== $JSCompiler_alias_NULL$$ && $parent$$inline_474$$ !== $opt_context$$inline_473$$ && !$tuna$dom$hasClass$$($parent$$inline_474$$, $JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$);) {
            $parent$$inline_474$$ = $parent$$inline_474$$.parentNode
          }
          $JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ = ($parent$$inline_474$$ === $opt_context$$inline_473$$ ? $JSCompiler_alias_NULL$$ : $parent$$inline_474$$) === $JSCompiler_alias_NULL$$
        }
        if(!$JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$) {
          break
        }
      }
      $i$$inline_185$$++
    }
    $JSCompiler_temp$$454_JSCompiler_temp$$455_className$$inline_472_result$$inline_183$$ && ($instance_target$$inline_181$$ = this.$initInstance$($targets_targets$$inline_178$$[$i$$29$$], $container$$1$$), $instance_target$$inline_181$$ !== $JSCompiler_alias_NULL$$ && ($instances$$.push($instance_target$$inline_181$$), $JSCompiler_StaticMethods_getBooleanOption$$($instance_target$$inline_181$$, "not-init") || $instance_target$$inline_181$$.init()));
    $i$$29$$++
  }
  return $instances$$
};
$tuna$ui$Module$$.prototype.$destroy$ = function $$tuna$ui$Module$$$$$destroy$$($instances$$1_l$$20$$) {
  for(var $i$$31$$ = 0, $instances$$1_l$$20$$ = $instances$$1_l$$20$$.length;$i$$31$$ < $instances$$1_l$$20$$;) {
    $i$$31$$++
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
function $JSCompiler_StaticMethods__setDefaultOption$$($JSCompiler_StaticMethods__setDefaultOption$self$$, $name$$67$$, $option$$) {
  $option$$ === $JSCompiler_alias_NULL$$ ? delete $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$67$$] : $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$67$$] = $option$$
}
function $JSCompiler_StaticMethods_setOption$$($JSCompiler_StaticMethods_setOption$self$$, $name$$68$$, $option$$1$$) {
  $option$$1$$ ? $JSCompiler_StaticMethods_setOption$self$$.$_target$.setAttribute("data-" + $name$$68$$, $option$$1$$) : $JSCompiler_StaticMethods_setOption$self$$.$_target$.removeAttribute("data-" + $name$$68$$)
}
function $JSCompiler_StaticMethods_getOption$$($JSCompiler_StaticMethods_getOption$self$$) {
  var $option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$_target$.getAttribute("data-popup-id");
  $option$$2$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"] !== $JSCompiler_alias_VOID$$ && ($option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"]);
  return $option$$2$$
}
function $JSCompiler_StaticMethods_getStringOption$$($JSCompiler_StaticMethods_getStringOption$self$$, $name$$70$$) {
  var $option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$_target$.getAttribute("data-" + $name$$70$$);
  $option$$3$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$70$$] !== $JSCompiler_alias_VOID$$ && ($option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$70$$]);
  return $option$$3$$
}
function $JSCompiler_StaticMethods_getNumberOption$$($JSCompiler_StaticMethods_getNumberOption$self$$, $name$$71$$) {
  var $option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$_target$.getAttribute("data-" + $name$$71$$);
  $option$$4$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$71$$] !== $JSCompiler_alias_VOID$$ && ($option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$71$$]);
  return Number($option$$4$$)
}
function $JSCompiler_StaticMethods_getBooleanOption$$($JSCompiler_StaticMethods_getBooleanOption$self$$, $name$$72$$) {
  var $option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$_target$.getAttribute("data-" + $name$$72$$);
  $option$$5$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$72$$] !== $JSCompiler_alias_VOID$$ && ($option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$72$$]);
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
  for(var $instances$$2_targetId$$ = $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$], $i$$32$$ = 0, $l$$21$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$.length, $type$$72$$ = $JSCompiler_alias_NULL$$, $module$$ = $JSCompiler_alias_NULL$$;$i$$32$$ < $l$$21$$;) {
    $type$$72$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$[$i$$32$$];
    $module$$ = $tuna$ui$__typeTable$$[$type$$72$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$type$$72$$] : $JSCompiler_alias_NULL$$;
    if($module$$ !== $JSCompiler_alias_NULL$$) {
      $instances$$2_targetId$$[$type$$72$$] === $JSCompiler_alias_VOID$$ && ($instances$$2_targetId$$[$type$$72$$] = []), $instances$$2_targetId$$[$type$$72$$] = $instances$$2_targetId$$[$type$$72$$].concat($module$$.init($target$$42$$, $JSCompiler_StaticMethods_initModules$self$$))
    }else {
      throw'Unknown module "' + $type$$72$$ + '"';
    }
    $i$$32$$++
  }
}
function $JSCompiler_StaticMethods_getModuleInstanceByName$$($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$, $i$$33_type$$74$$, $name$$73$$) {
  var $l$$22_targetId$$2$$;
  $l$$22_targetId$$2$$ = $l$$22_targetId$$2$$ || $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$_target$.id;
  if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$22_targetId$$2$$] !== $JSCompiler_alias_VOID$$ && $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$22_targetId$$2$$][$i$$33_type$$74$$] !== $JSCompiler_alias_VOID$$) {
    $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.$__instances$[$l$$22_targetId$$2$$][$i$$33_type$$74$$];
    $i$$33_type$$74$$ = 0;
    for($l$$22_targetId$$2$$ = $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$.length;$i$$33_type$$74$$ < $l$$22_targetId$$2$$;) {
      if($JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$[$i$$33_type$$74$$].getName() === $name$$73$$) {
        return $JSCompiler_StaticMethods_getModuleInstanceByName$self_instances$$3$$[$i$$33_type$$74$$]
      }
      $i$$33_type$$74$$++
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
  var $module$$1$$ = $JSCompiler_alias_NULL$$, $name$$74$$;
  for($name$$74$$ in $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$]) {
    $module$$1$$ = $tuna$ui$__typeTable$$[$name$$74$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$name$$74$$] : $JSCompiler_alias_NULL$$, $module$$1$$ !== $JSCompiler_alias_NULL$$ && $module$$1$$.$destroy$($JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$74$$]), $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$74$$].length = 0
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
    $callback$$30$$("apply" === $event$$17$$.$getType$());
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
    var $button$$ = $tuna$ui$buttons$create$$(this), $action$$4$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$, "action");
    $action$$4$$ === $JSCompiler_alias_NULL$$ && ($action$$4$$ = $self$$6$$.$__defaultAction$);
    $action$$4$$ !== $JSCompiler_alias_NULL$$ && ($self$$6$$.$dispatch$($action$$4$$, $button$$) || $tuna$dom$stopPropagation$$($event$$20$$))
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
    $self$$7$$.isEnabled() ? ($callbackInput$$.value = "form_callback" + (Math.random() + "").substr(2), window[$callbackInput$$.value] = function $window$$callbackInput$$$value$($data$$inline_195_errors$$inline_197_response$$) {
      var $data$$inline_195_errors$$inline_197_response$$ = JSON.parse(JSON.stringify($data$$inline_195_errors$$inline_197_response$$)), $i$$inline_478_response$$inline_196$$ = $data$$inline_195_errors$$inline_197_response$$.response, $data$$inline_195_errors$$inline_197_response$$ = $data$$inline_195_errors$$inline_197_response$$.errors;
      if($i$$inline_478_response$$inline_196$$ !== $JSCompiler_alias_VOID$$) {
        $self$$7$$.$__recordName$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_478_response$$inline_196$$ = $tuna$rest$populateRecords$$($i$$inline_478_response$$inline_196$$, $self$$7$$.$__recordName$)), $self$$7$$.$dispatch$("result", $i$$inline_478_response$$inline_196$$)
      }else {
        if($data$$inline_195_errors$$inline_197_response$$ !== $JSCompiler_alias_VOID$$) {
          for(var $i$$inline_478_response$$inline_196$$ = 0, $l$$inline_479$$ = $data$$inline_195_errors$$inline_197_response$$.length, $error$$inline_480_name$$inline_516$$ = $JSCompiler_alias_NULL$$;$i$$inline_478_response$$inline_196$$ < $l$$inline_479$$;) {
            $error$$inline_480_name$$inline_516$$ = $data$$inline_195_errors$$inline_197_response$$[$i$$inline_478_response$$inline_196$$];
            if($error$$inline_480_name$$inline_516$$.param !== $JSCompiler_alias_VOID$$) {
              var $JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$ = $self$$7$$, $message$$inline_482_message$$inline_522$$ = $error$$inline_480_name$$inline_516$$.message, $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$ = $JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$;
              var $error$$inline_480_name$$inline_516$$ = $error$$inline_480_name$$inline_516$$.param, $result$$inline_517$$ = $JSCompiler_alias_NULL$$;
              if($JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$.$__inputTable$[$error$$inline_480_name$$inline_516$$] === $JSCompiler_alias_VOID$$) {
                var $input$$inline_519_inputWrapper$$inline_518$$ = $tuna$dom$selectOne$$(".j-" + $error$$inline_480_name$$inline_516$$ + "-input", $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$.$_target$);
                $input$$inline_519_inputWrapper$$inline_518$$ !== $JSCompiler_alias_NULL$$ && ($input$$inline_519_inputWrapper$$inline_518$$ = new $tuna$ui$forms$FormInput$$($input$$inline_519_inputWrapper$$inline_518$$), $input$$inline_519_inputWrapper$$inline_518$$.init(), $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$.$__inputTable$[$error$$inline_480_name$$inline_516$$] = $input$$inline_519_inputWrapper$$inline_518$$)
              }
              $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$.$__inputTable$[$error$$inline_480_name$$inline_516$$] !== $JSCompiler_alias_VOID$$ && ($result$$inline_517$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$.$__inputTable$[$error$$inline_480_name$$inline_516$$]);
              $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$ = $result$$inline_517$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_515_formInput$$inline_483$$, $tuna$dom$addClass$$($JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$.$_target$, "error"), $JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$.$__message$ !== 
              $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$.$__message$.innerHTML = $message$$inline_482_message$$inline_522$$)) : $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showInputError$self$$inline_481_JSCompiler_StaticMethods_showErrorMessage$self$$inline_521$$, $message$$inline_482_message$$inline_522$$)
            }else {
              $JSCompiler_StaticMethods___showErrorMessage$$($self$$7$$, $error$$inline_480_name$$inline_516$$.message)
            }
            $i$$inline_478_response$$inline_196$$++
          }
          $self$$7$$.$dispatch$("error", $data$$inline_195_errors$$inline_197_response$$)
        }
      }
      window[$callbackInput$$.value] = $JSCompiler_alias_VOID$$
    }, $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$21$$.type, $event$$21$$)) : $tuna$dom$preventDefault$$($event$$21$$)
  });
  $tuna$dom$addEventListener$$(this.$_target$, "reset", function($event$$22$$) {
    $self$$7$$.isEnabled() ? $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$22$$.type, $event$$22$$) : $tuna$dom$preventDefault$$($event$$22$$)
  })
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$53_name$$75$$) {
  var $result$$13$$ = $JSCompiler_alias_NULL$$, $element$$53_name$$75$$ = this.$_target$.elements[$element$$53_name$$75$$];
  if($element$$53_name$$75$$ !== $JSCompiler_alias_VOID$$) {
    var $isCheck$$ = $JSCompiler_alias_FALSE$$;
    if($element$$53_name$$75$$.value === $JSCompiler_alias_VOID$$) {
      for(var $i$$34$$ = 0, $l$$23$$ = $element$$53_name$$75$$.length, $result$$13$$ = [];$i$$34$$ < $l$$23$$;) {
        $isCheck$$ = "checkbox" === $element$$53_name$$75$$[$i$$34$$].type || "radio" === $element$$53_name$$75$$[$i$$34$$].type, (!$isCheck$$ || $isCheck$$ && $element$$53_name$$75$$[$i$$34$$].checked) && $result$$13$$.push($element$$53_name$$75$$[$i$$34$$].value), $i$$34$$++
      }
    }else {
      if($isCheck$$ = "checkbox" === $element$$53_name$$75$$.type || "radio" === $element$$53_name$$75$$.type, !$isCheck$$ || $isCheck$$ && $element$$53_name$$75$$.checked) {
        $result$$13$$ = $element$$53_name$$75$$.value
      }
    }
  }
  return $result$$13$$
};
function $JSCompiler_StaticMethods_setValue$$($JSCompiler_StaticMethods_setValue$self_element$$54$$, $i$$35_name$$76$$, $index$$54_value$$56$$) {
  $JSCompiler_StaticMethods_setValue$self_element$$54$$ = $JSCompiler_StaticMethods_setValue$self_element$$54$$.$_target$.elements[$i$$35_name$$76$$];
  if($JSCompiler_StaticMethods_setValue$self_element$$54$$ !== $JSCompiler_alias_VOID$$) {
    if($JSCompiler_StaticMethods_setValue$self_element$$54$$.value === $JSCompiler_alias_VOID$$) {
      var $i$$35_name$$76$$ = 0, $l$$24$$ = $JSCompiler_StaticMethods_setValue$self_element$$54$$.length, $stringValue$$1$$ = "", $arrayValue$$ = [];
      $index$$54_value$$56$$ instanceof Array ? ($arrayValue$$ = $index$$54_value$$56$$.slice(0), $stringValue$$1$$ = $index$$54_value$$56$$.join(",")) : ($stringValue$$1$$ = $index$$54_value$$56$$ + "", $arrayValue$$ = [$stringValue$$1$$]);
      for($index$$54_value$$56$$ = -1;$i$$35_name$$76$$ < $l$$24$$;) {
        "radio" === $JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].type ? $JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].checked = $JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].value === $stringValue$$1$$ : "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].type ? ($index$$54_value$$56$$ = $tuna$utils$indexOf$$($JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].value, 
        $arrayValue$$), $JSCompiler_StaticMethods_setValue$self_element$$54$$[$i$$35_name$$76$$].checked = -1 !== $index$$54_value$$56$$, -1 !== $index$$54_value$$56$$ && $arrayValue$$.splice($index$$54_value$$56$$, 1)) : $JSCompiler_StaticMethods_setValue$self_element$$54$$.value = $stringValue$$1$$, $i$$35_name$$76$$++
      }
    }else {
      "checkbox" === $JSCompiler_StaticMethods_setValue$self_element$$54$$.type || "radio" === $JSCompiler_StaticMethods_setValue$self_element$$54$$.type ? $JSCompiler_StaticMethods_setValue$self_element$$54$$.checked = $JSCompiler_StaticMethods_setValue$self_element$$54$$.value === $index$$54_value$$56$$ : $JSCompiler_StaticMethods_setValue$self_element$$54$$.value = $index$$54_value$$56$$
    }
  }
}
function $JSCompiler_StaticMethods_setInputEnabled$$($JSCompiler_StaticMethods_setInputEnabled$self$$, $isEnabled$$1$$) {
  var $element$$55$$ = $JSCompiler_StaticMethods_setInputEnabled$self$$.$_target$.elements.delivery_address;
  if($element$$55$$ !== $JSCompiler_alias_VOID$$) {
    if($element$$55$$.value === $JSCompiler_alias_VOID$$) {
      for(var $i$$36$$ = 0, $l$$25$$ = $element$$55$$.length;$i$$36$$ < $l$$25$$;) {
        $isEnabled$$1$$ ? $element$$55$$[$i$$36$$].removeAttribute("disabled") : $element$$55$$[$i$$36$$].setAttribute("disabled", $JSCompiler_alias_TRUE$$), $i$$36$$++
      }
    }else {
      $isEnabled$$1$$ ? $element$$55$$.removeAttribute("disabled") : $element$$55$$.setAttribute("disabled", $JSCompiler_alias_TRUE$$)
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
function $JSCompiler_StaticMethods___prepareTo$$($JSCompiler_StaticMethods___prepareTo$self$$, $JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$, $event$$23$$) {
  if($JSCompiler_StaticMethods___prepareTo$self$$.$dispatch$($JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$)) {
    $JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$.innerHTML = "", $tuna$dom$addClass$$($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$, "hide"));
    for(var $name$$inline_202$$ in $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$) {
      $JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$ = $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$[$name$$inline_202$$], $tuna$dom$removeClass$$($JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$.$_target$, "error"), $JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$.$__message$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$.$__message$.innerHTML = $JSCompiler_StaticMethods_cleanup$self$$inline_485_type$$77$$.$__defaultMessage$)
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
  this.$_itemSerializeCallback$ = function $this$$_itemSerializeCallback$$($item$$3$$) {
    return $item$$3$$.name !== $JSCompiler_alias_VOID$$ ? "" + $item$$3$$.name : ""
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
$JSCompiler_prototypeAlias$$.setData = function $$JSCompiler_prototypeAlias$$$setData$($data$$29$$) {
  this.$_currentData$ = this.$_data$ = $data$$29$$;
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
    for(var $needle$$ = $term$$1$$.toUpperCase(), $i$$38$$ = 0, $l$$27$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.length, $core$$ = $JSCompiler_alias_NULL$$;$i$$38$$ < $l$$27$$;) {
      $core$$ = $JSCompiler_StaticMethods__filterData$self$$.$_itemSerializeCallback$($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$38$$]), -1 !== $core$$.toUpperCase().indexOf($needle$$) && $result$$15$$.push($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$38$$]), $i$$38$$++
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
        var $value$$inline_210$$ = $self$$9$$.$_input$.value;
        $self$$9$$.$__selectedData$ = $JSCompiler_alias_NULL$$;
        var $dataItem$$inline_211$$ = $JSCompiler_StaticMethods__filterData$$($self$$9$$, $value$$inline_210$$).shift();
        $dataItem$$inline_211$$ !== $JSCompiler_alias_VOID$$ && $self$$9$$.$_itemSerializeCallback$($dataItem$$inline_211$$) === $value$$inline_210$$ && $JSCompiler_StaticMethods___selectData$$($self$$9$$, $dataItem$$inline_211$$);
        $self$$9$$.$__selectedData$ === $JSCompiler_alias_NULL$$ && $self$$9$$.clear();
        $tuna$dom$addClass$$($self$$9$$.$__listBody$, "hide");
        $isOpen$$ = $JSCompiler_alias_FALSE$$
      }), $self$$9$$.filter(""), $tuna$dom$removeClass$$($self$$9$$.$__listBody$, "hide"), $isOpen$$ = $JSCompiler_alias_TRUE$$)
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-autocomplete-item", "click", function($event$$24$$) {
      var $index$$55$$ = $self$$9$$.$__selectionGroup$.$getItemIndex$(this);
      $index$$55$$ !== $JSCompiler_alias_NULL$$ ? $self$$9$$.$selectIndex$($index$$55$$) : $tuna$dom$stopPropagation$$($event$$24$$)
    });
    $tuna$dom$addEventListener$$(this.$_input$, "click", function($event$$25$$) {
      $tuna$dom$stopPropagation$$($event$$25$$)
    });
    $JSCompiler_StaticMethods_setOption$$(this.$__selectionGroup$, "item-selector", ".j-autocomplete-item");
    this.$__selectionGroup$.init()
  }
};
$tuna$ui$forms$Autocomplete$$.prototype.$selectIndex$ = function $$tuna$ui$forms$Autocomplete$$$$$selectIndex$$($index$$56$$) {
  0 < this.$_currentData$.length && $JSCompiler_StaticMethods___selectData$$(this, this.$_currentData$[$index$$56$$])
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
  for(var $result$$16$$ = {}, $elements$$4_formElement$$ = $elements$$4_formElement$$.elements, $i$$39$$ = 0, $l$$28$$ = $elements$$4_formElement$$.length, $name$$81$$ = $JSCompiler_alias_NULL$$;$i$$39$$ < $l$$28$$;) {
    $name$$81$$ = $elements$$4_formElement$$[$i$$39$$].name, $result$$16$$[$name$$81$$] !== $JSCompiler_alias_VOID$$ ? ($result$$16$$[$name$$81$$] instanceof Array || ($result$$16$$[$name$$81$$] = [$result$$16$$[$name$$81$$]]), $result$$16$$[$name$$81$$].push($elements$$4_formElement$$[$i$$39$$].value)) : $result$$16$$[$name$$81$$] = $elements$$4_formElement$$[$i$$39$$].value, $i$$39$$++
  }
  return $result$$16$$
}
;function $tuna$ui$transformers$TemplateTransformer$$($target$$57$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$57$$);
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$transformers$TemplateTransformer$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$transformers$TemplateTransformer$$.prototype.init = function $$tuna$ui$transformers$TemplateTransformer$$$$init$() {
  var $element$$inline_218_templateId$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "template-id");
  if($element$$inline_218_templateId$$ !== $JSCompiler_alias_NULL$$) {
    var $conditionExtractor$$inline_488_settings$$11$$;
    $tuna$tmpl$__settingsTable$$[$element$$inline_218_templateId$$] === $JSCompiler_alias_VOID$$ && ($tuna$tmpl$__markupBuilder$$ === $JSCompiler_alias_NULL$$ && ($tuna$tmpl$__markupBuilder$$ = new $tuna$tmpl$markup$MarkupTemplateBuilder$$, $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$SpotExtractor$$), $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$ListExtractor$$($tuna$tmpl$__markupBuilder$$)), $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$AttributeExtractor$$), 
    $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$CheckboxExtractor$$), $conditionExtractor$$inline_488_settings$$11$$ = new $tuna$tmpl$markup$ConditionExtractor$$, $conditionExtractor$$inline_488_settings$$11$$.$__actions$.push("class"), $conditionExtractor$$inline_488_settings$$11$$.$__operators$.push("isset"), $conditionExtractor$$inline_488_settings$$11$$.$__operators$.push("notset"), $conditionExtractor$$inline_488_settings$$11$$.$__operators$.push("eq"), $conditionExtractor$$inline_488_settings$$11$$.$__operators$.push("ne"), 
    $JSCompiler_StaticMethods_addExtractor$$($conditionExtractor$$inline_488_settings$$11$$)), $tuna$tmpl$__settingsTable$$[$element$$inline_218_templateId$$] = $JSCompiler_StaticMethods_buildSettings$$($tuna$tmpl$__markupBuilder$$, $element$$inline_218_templateId$$));
    $conditionExtractor$$inline_488_settings$$11$$ = $tuna$tmpl$__settingsTable$$[$element$$inline_218_templateId$$];
    if($conditionExtractor$$inline_488_settings$$11$$ !== $JSCompiler_alias_NULL$$) {
      $element$$inline_218_templateId$$ = this.$_target$;
      debugger;
      if($tuna$tmpl$__compiler$$ === $JSCompiler_alias_NULL$$) {
        $tuna$tmpl$__compiler$$ = new $tuna$tmpl$compilers$TemplateCompiler$$;
        $tuna$tmpl$__compiler$$.$__itemCompilers$.spot = new $tuna$tmpl$compilers$SpotCompiler$$;
        $tuna$tmpl$__compiler$$.$__itemCompilers$.attribute = new $tuna$tmpl$compilers$AttributeCompiler$$;
        $tuna$tmpl$__compiler$$.$__itemCompilers$.checkbox = new $tuna$tmpl$compilers$CheckboxCompiler$$;
        $tuna$tmpl$__compiler$$.$__itemCompilers$.list = new $tuna$tmpl$compilers$ListCompiler$$($tuna$tmpl$__compiler$$);
        var $conditionCompiler$$inline_491$$ = new $tuna$tmpl$compilers$ConditionCompiler$$;
        $conditionCompiler$$inline_491$$.$__actions$["class"] = new $tuna$tmpl$units$condition$ClassAction$$;
        $conditionCompiler$$inline_491$$.$__operators$.isset = new $tuna$tmpl$units$condition$IsSetOperator$$;
        $conditionCompiler$$inline_491$$.$__operators$.notset = new $tuna$tmpl$units$condition$NotSetOperator$$;
        $conditionCompiler$$inline_491$$.$__operators$.eq = new $tuna$tmpl$units$condition$EqualsOperator$$;
        $conditionCompiler$$inline_491$$.$__operators$.ne = new $tuna$tmpl$units$condition$NotEqualsOperator$$;
        $tuna$tmpl$__compiler$$.$__itemCompilers$.condition = $conditionCompiler$$inline_491$$
      }
      this.$__template$ = $tuna$tmpl$__compiler$$.compile($conditionExtractor$$inline_488_settings$$11$$, $element$$inline_218_templateId$$)
    }else {
      throw'Unknown template with id "' + $element$$inline_218_templateId$$ + '"';
    }
  }
};
function $JSCompiler_StaticMethods_applyTransform$$($JSCompiler_StaticMethods_applyTransform$self$$, $data$$31$$) {
  $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$applyData$(new $tuna$tmpl$data$DataNode$$($data$$31$$));
  if($JSCompiler_StaticMethods_applyTransform$self$$.$__transformHandler$ !== $JSCompiler_alias_NULL$$) {
    for(var $JSCompiler_StaticMethods_handleTransformComplete$self$$inline_221$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__transformHandler$, $createdElements$$inline_222$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__createdChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__createdChildren$.length), $removedElements$$inline_223$$ = $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__removedChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$.$__template$.$__removedChildren$.length), 
    $i$$inline_224$$ = 0, $l$$inline_225$$ = $createdElements$$inline_222$$.length;$i$$inline_224$$ < $l$$inline_225$$;) {
      $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_221$$.$_container$, $createdElements$$inline_222$$[$i$$inline_224$$]), $i$$inline_224$$++
    }
    $i$$inline_224$$ = 0;
    for($l$$inline_225$$ = $removedElements$$inline_223$$.length;$i$$inline_224$$ < $l$$inline_225$$;) {
      $JSCompiler_StaticMethods_destroyModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_221$$.$_container$, $removedElements$$inline_223$$[$i$$inline_224$$]), $i$$inline_224$$++
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
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$63$$) {
  return this.$_selectionRule$.$isIndexEnabled$($index$$63$$)
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$5$$) {
  return this.$_itemsCollection$.$getItemIndex$($item$$5$$)
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
  var $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ = new $tuna$ui$selection$items$NamedElementsCollection$$("data-name"), $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$), $className$$inline_494_l$$inline_252_selector$$inline_497$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$.$_selectionClass$ = $className$$inline_494_l$$inline_252_selector$$inline_497$$;
  $className$$inline_494_l$$inline_252_selector$$inline_497$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$.$_itemSelector$ = $className$$inline_494_l$$inline_252_selector$$inline_497$$;
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$.$_selectionRule$ = this.$__navigationRule$;
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$.$setItemsCollection$($buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$);
  this.$__navigationRule$.$_eventDispatcher$ = this;
  this.$__navigationRule$.$_selectionView$ = $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$;
  this.$__navigationRule$.$setItemsCollection$($buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$);
  this.$__navigationRule$.$setNavigation$(this);
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$.update();
  $JSCompiler_StaticMethods___initControls$$(this);
  $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "menu-selector");
  $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  if($i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ !== $JSCompiler_alias_NULL$$ && $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ = $tuna$dom$selectOne$$($i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$, this.$_target$), $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ !== 
  $JSCompiler_alias_NULL$$)) {
    for(var $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ = $tuna$dom$select$$($buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$, $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$), $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ = 0, $className$$inline_494_l$$inline_252_selector$$inline_497$$ = $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$.length, 
    $href$$inline_253_index$$inline_254$$ = $JSCompiler_alias_NULL$$, $button$$inline_255$$ = $href$$inline_253_index$$inline_254$$ = $JSCompiler_alias_NULL$$;$i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$ < $className$$inline_494_l$$inline_252_selector$$inline_497$$;) {
      $button$$inline_255$$ = $tuna$ui$buttons$create$$($buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$[$i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$]), $href$$inline_253_index$$inline_254$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$inline_255$$, "href"), $href$$inline_253_index$$inline_254$$ !== $JSCompiler_alias_NULL$$ && ($href$$inline_253_index$$inline_254$$ = $href$$inline_253_index$$inline_254$$.split("/").shift(), 
      this.$__menuLinks$[$href$$inline_253_index$$inline_254$$] === $JSCompiler_alias_VOID$$ && (this.$__menuLinks$[$href$$inline_253_index$$inline_254$$] = []), this.$__menuLinks$[$href$$inline_253_index$$inline_254$$].push($button$$inline_255$$)), $i$$inline_251_menu$$inline_249_menuSelector$$inline_247_selectionView$$inline_244$$++
    }
  }
  $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ = this.$__navigationRule$.$__currentIndex$;
  $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateMenu$$(this, $buttonSelector$$inline_248_buttons$$inline_250_currentIndex$$inline_256_itemsCollection$$inline_243$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods___initControls$$($JSCompiler_StaticMethods___initControls$self$$) {
  var $controls$$ = new $tuna$ui$buttons$ButtonGroup$$($JSCompiler_StaticMethods___initControls$self$$.$_target$);
  $JSCompiler_StaticMethods_setOption$$($controls$$, "button-selector", ".j-navigation-link");
  $controls$$.$__defaultAction$ = "navigate";
  $controls$$.addEventListener("navigate", function($event$$26$$, $button$$2$$) {
    $event$$26$$.preventDefault();
    var $index$$67$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$2$$, "href");
    if($index$$67$$ !== $JSCompiler_alias_NULL$$) {
      for(var $result$$inline_509$$ = {}, $attrs$$inline_510$$ = $button$$2$$.$_target$.attributes, $i$$inline_511$$ = 0, $l$$inline_512$$ = $attrs$$inline_510$$.length;$i$$inline_511$$ < $l$$inline_512$$;) {
        0 === $attrs$$inline_510$$[$i$$inline_511$$].name.indexOf("data-") && ($result$$inline_509$$[$attrs$$inline_510$$[$i$$inline_511$$].name.substr(5)] = $attrs$$inline_510$$[$i$$inline_511$$].value), $i$$inline_511$$++
      }
      delete $result$$inline_509$$.href;
      $JSCompiler_StaticMethods___initControls$self$$.navigate($index$$67$$, $result$$inline_509$$)
    }
  });
  $controls$$.addEventListener("back", function($event$$27$$) {
    $event$$27$$.preventDefault();
    $JSCompiler_StaticMethods___initControls$self$$.back()
  });
  $controls$$.init()
}
function $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$, $i$$41_path$$9$$, $isSelected$$) {
  if($i$$41_path$$9$$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.$__menuLinks$[$i$$41_path$$9$$], $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ !== $JSCompiler_alias_VOID$$)) {
    for(var $i$$41_path$$9$$ = 0, $l$$30$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.length;$i$$41_path$$9$$ < $l$$30$$;) {
      $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$[$i$$41_path$$9$$].setActive($isSelected$$), $i$$41_path$$9$$++
    }
  }
}
function $JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$) {
  var $result$$17$$ = [], $index$$69$$ = $JSCompiler_StaticMethods_getPathDesc$self$$.$__navigationRule$.$__currentIndex$;
  $index$$69$$ !== $JSCompiler_alias_NULL$$ && ($result$$17$$.push($index$$69$$), $JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$] !== $JSCompiler_alias_VOID$$ && ($result$$17$$ = $result$$17$$.concat($JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$]))));
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
$tuna$ui$selection$Navigation$$.prototype.navigate = function $$tuna$ui$selection$Navigation$$$$navigate$($path$$10$$, $data$$33$$) {
  if($path$$10$$ instanceof Array) {
    this.$__parent$ === $JSCompiler_alias_NULL$$ ? (this.$__currentState$ === $JSCompiler_alias_NULL$$ && (this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this))), $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$33$$), this.$__history$.push(this.$__currentState$), this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this), $data$$33$$)) : $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$33$$)
  }else {
    var $parsedPath$$ = $path$$10$$.split("/");
    0 !== $path$$10$$.indexOf("/") && ($parsedPath$$ = $JSCompiler_StaticMethods_getRelatedPath$$(this).concat($parsedPath$$));
    this.$getRoot$().navigate($parsedPath$$, $data$$33$$)
  }
};
function $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$, $path$$11$$, $data$$34$$) {
  for(var $index$$70$$ = $path$$11$$.shift();"" === $index$$70$$ && 0 < $path$$11$$.length;) {
    $index$$70$$ = $path$$11$$.shift()
  }
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.navigate($index$$70$$, $data$$34$$ || $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_TRUE$$);
  if($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$] !== $JSCompiler_alias_VOID$$) {
    return $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$], $path$$11$$, $data$$34$$)
  }
}
function $NavigationState$$($path$$12$$, $data$$35$$) {
  this.$__path$ = $path$$12$$;
  this.$__data$ = $data$$35$$ || $JSCompiler_alias_NULL$$
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
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$8$$) {
  return this.$__items$.push($item$$8$$) - 1
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$9$$) {
  return $tuna$utils$indexOf$$($item$$9$$, this.$__items$)
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
function $tuna$ui$selection$items$NamedElementsCollection$$($indexAttribute$$2$$) {
  this.$__indexAttribute$ = $indexAttribute$$2$$;
  this.$__items$ = {}
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$items$NamedElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$10$$) {
  var $index$$73$$ = $item$$10$$.getAttribute(this.$__indexAttribute$);
  $index$$73$$ !== $JSCompiler_alias_NULL$$ && (this.$__items$[$index$$73$$] = $item$$10$$);
  return $index$$73$$
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($index$$74_item$$11$$) {
  $index$$74_item$$11$$ = $index$$74_item$$11$$.getAttribute(this.$__indexAttribute$);
  return $index$$74_item$$11$$ !== $JSCompiler_alias_NULL$$ && this.$__items$[$index$$74_item$$11$$] !== $JSCompiler_alias_VOID$$ ? $index$$74_item$$11$$ : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$75$$) {
  return this.$__items$[$index$$75$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$ = {}
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  var $i$$43$$ = 0, $_$$;
  for($_$$ in this.$__items$) {
    $i$$43$$++
  }
  return $i$$43$$
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
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$84$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$84$$) !== $JSCompiler_alias_NULL$$ && -1 === $tuna$utils$indexOf$$($index$$84$$, this.$_disabledIndexes$)
};
function $tuna$ui$selection$rule$SingleSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$rule$SingleSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$selectIndex$$($index$$85$$) {
  var $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$;
  if($JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ = this.$isIndexEnabled$($index$$85$$)) {
    if($JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ = this.$__currentIndex$ !== $index$$85$$) {
      $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ = this.$__currentIndex$, $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ = ($JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ === $JSCompiler_alias_NULL$$ || this.$_eventDispatcher$.$dispatch$("deselect", $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$)) && this.$_eventDispatcher$.$dispatch$("select", $index$$85$$)
    }
  }
  return $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ ? ($JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ = this.$__currentIndex$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_selectionView$.$applySelectionAt$($index$$85$$), this.$__currentIndex$ = $index$$85$$, $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$ !== $JSCompiler_alias_NULL$$ && 
  this.$_eventDispatcher$.$dispatch$("deselected", $JSCompiler_temp$$10_JSCompiler_temp$$11_oldIndex_oldIndex$$inline_277$$), this.$_eventDispatcher$.$dispatch$("selected", $index$$85$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
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
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$selectIndex$$($index$$87$$) {
  if(this.$isIndexEnabled$($index$$87$$)) {
    var $indexPosition$$1$$ = $tuna$utils$indexOf$$($index$$87$$, this.$__selectedIndexes$);
    if(-1 === $indexPosition$$1$$) {
      if(this.$_eventDispatcher$.$dispatch$("select", $index$$87$$)) {
        return this.$_selectionView$.$applySelectionAt$($index$$87$$), this.$__selectedIndexes$.push($index$$87$$), $JSCompiler_alias_TRUE$$
      }
    }else {
      if(this.$_eventDispatcher$.$dispatch$("deselect", $index$$87$$)) {
        return this.$_selectionView$.$destroySelectionAt$($index$$87$$), this.$__selectedIndexes$.splice($indexPosition$$1$$, 1), $JSCompiler_alias_TRUE$$
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
$JSCompiler_prototypeAlias$$.navigate = function $$JSCompiler_prototypeAlias$$$navigate$($index$$89$$, $data$$36$$) {
  this.$__openData$ = $data$$36$$;
  return this.$selectIndex$($index$$89$$)
};
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$90_page$$inline_280$$) {
  return this.$isIndexEnabled$($index$$90_page$$inline_280$$) && this.$__currentIndex$ !== $index$$90_page$$inline_280$$ ? (this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.$canClose$($index$$90_page$$inline_280$$) && this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.close(), this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), 
  this.$_eventDispatcher$.$dispatch$("close", this.$__currentIndex$)), this.$__currentIndex$ = $index$$90_page$$inline_280$$, this.$__currentController$ = $JSCompiler_alias_NULL$$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && ($index$$90_page$$inline_280$$ = this.$_itemsCollection$.$getItemAt$(this.$__currentIndex$), $index$$90_page$$inline_280$$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ = $tuna$control$__controllerTable$$[$index$$90_page$$inline_280$$.id] !== $JSCompiler_alias_VOID$$ ? 
  $tuna$control$__controllerTable$$[$index$$90_page$$inline_280$$.id] : $JSCompiler_alias_NULL$$, this.$__currentController$ !== $JSCompiler_alias_NULL$$ && !this.$__currentController$.$isActive$() && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.$setNavigation$(this.$__navigation$), this.$__currentController$.init($index$$90_page$$inline_280$$)))), this.$_selectionView$.$applySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("open", 
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
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$applySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$applySelectionAt$$($index$$100_item$$12$$) {
  $index$$100_item$$12$$ = this.$_itemsCollection$.$getItemAt$($index$$100_item$$12$$);
  $index$$100_item$$12$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addClass$$($index$$100_item$$12$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$destroySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$destroySelectionAt$$($index$$101_item$$13$$) {
  $index$$101_item$$13$$ = this.$_itemsCollection$.$getItemAt$($index$$101_item$$13$$);
  $index$$101_item$$13$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($index$$101_item$$13$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.update = function $$tuna$ui$selection$view$ClassSelectionView$$$$update$() {
  if(this.$_itemSelector$ !== $JSCompiler_alias_NULL$$) {
    this.$_selectionRule$.$clearSelection$();
    this.$_itemsCollection$.clear();
    for(var $possibleItems$$ = $tuna$dom$select$$(this.$_itemSelector$, this.$_target$), $i$$44$$ = 0, $l$$32$$ = $possibleItems$$.length, $index$$104$$ = $JSCompiler_alias_NULL$$, $item$$16$$ = $JSCompiler_alias_NULL$$;$i$$44$$ < $l$$32$$;) {
      $item$$16$$ = $possibleItems$$[$i$$44$$], $tuna$dom$getParentMatches$$($item$$16$$, this.$_itemSelector$, this.$_target$) === $JSCompiler_alias_NULL$$ && ($index$$104$$ = this.$_itemsCollection$.$addItem$($item$$16$$), $index$$104$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$hasClass$$($item$$16$$, this.$_selectionClass$) && this.$_selectionRule$.$selectIndex$($index$$104$$)), $i$$44$$++
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
$tuna$control$PageViewController$$.prototype.$canClose$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
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
    var $index$$106$$ = $selectionGroup$$.$getItemIndex$(this);
    $index$$106$$ !== $JSCompiler_alias_NULL$$ && $selectionGroup$$.$selectIndex$($index$$106$$)
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
  -1 === $tuna$utils$indexOf$$("j-control-container", $tuna$ui$__isolators$$) && $tuna$ui$__isolators$$.push("j-control-container");
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
$DataImage$$.prototype.setData = function $$DataImage$$$$setData$($data$$37$$) {
  this.$_data$ = $data$$37$$;
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
        var $parent$$inline_351$$ = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.parentNode;
        $parent$$inline_351$$ !== $JSCompiler_alias_NULL$$ ? ($parent$$inline_351$$.replaceChild($image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$_target$), $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id !== $JSCompiler_alias_NULL$$ && ($image$$2$$.id = $JSCompiler_StaticMethods___updateImage$self$$.$_target$.id), $JSCompiler_StaticMethods___updateImage$self$$.$_target$ = $image$$2$$, $JSCompiler_StaticMethods___updateImage$self$$.$dispatch$("loaded", $JSCompiler_StaticMethods___updateImage$self$$.$_target$)) : 
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
  this.$__completeHandler$ = $tuna$utils$bind$$(function($event$$32$$, $data$$38$$) {
    var $result$$inline_385$$ = $JSCompiler_alias_NULL$$;
    try {
      $result$$inline_385$$ = JSON.parse($data$$38$$)
    }catch($error$$inline_386$$) {
      $self$$14$$.$dispatch$("error", $data$$38$$)
    }
    $result$$inline_385$$ !== $JSCompiler_alias_NULL$$ ? $result$$inline_385$$.response !== $JSCompiler_alias_VOID$$ ? $self$$14$$.$dispatch$("result", $result$$inline_385$$.response) : $self$$14$$.$dispatch$("error", $result$$inline_385$$.errors || $result$$inline_385$$) : $self$$14$$.$dispatch$("error", $data$$38$$)
  }, this);
  $tuna$rest$DefaultMethod$$.call(this, $opt_name$$4$$)
}
$tuna$utils$extend$$($rest$CommonMethod$$, $tuna$rest$Method$$);
$rest$CommonMethod$$.prototype.$setName$ = function $$rest$CommonMethod$$$$$setName$$($name$$83$$) {
  this.$__request$ === $JSCompiler_alias_NULL$$ && (this.$__request$ = new $tuna$net$Request$$, this.$__request$.$__method$ = "POST", this.$__request$.addEventListener("complete", this.$__completeHandler$));
  this.$__request$.$__url$ = "/api/?method=" + $name$$83$$
};
$rest$CommonMethod$$.prototype.call = function $$rest$CommonMethod$$$$call$($args$$6$$) {
  this.$__request$.send($args$$6$$)
};
var $JSCompiler_StaticMethods_setDefaultMethod$self$$inline_393$$ = $tuna$rest$methodFactory$$, $method$$inline_394$$ = new $rest$CommonMethod$$;
$JSCompiler_StaticMethods_setDefaultMethod$self$$inline_393$$.$__defaultMethod$ = $method$$inline_394$$;
function $Dimension$$($data$$40$$) {
  this.id = "";
  this.$weight$ = 0;
  this.shape = "";
  this.$personsCount$ = this.$ratio$ = 0;
  $tuna$model$Record$$.call(this, $data$$40$$)
}
$tuna$utils$extend$$($Dimension$$, $tuna$model$Record$$);
$Dimension$$.prototype.$populate$ = function $$Dimension$$$$$populate$$($data$$41$$) {
  this.id = $data$$41$$.id;
  this.$weight$ = $data$$41$$.weight;
  this.shape = $data$$41$$.shape;
  this.$ratio$ = $data$$41$$.ratio;
  this.$personsCount$ = $data$$41$$.persons_count
};
$Dimension$$.prototype.$serialize$ = function $$Dimension$$$$$serialize$$() {
  return{weight:this.$weight$, shape:this.shape, ratio:this.$ratio$, personsCount:this.$personsCount$}
};
var $record$$inline_398$$ = new $Dimension$$;
$tuna$model$recordFactory$$.$__prototypes$.dimension = $record$$inline_398$$;
function $City$$($data$$42$$) {
  this.name = this.id = "";
  $tuna$model$Record$$.call(this, $data$$42$$)
}
$tuna$utils$extend$$($City$$, $tuna$model$Record$$);
$City$$.prototype.$populate$ = function $$City$$$$$populate$$($data$$43$$) {
  this.id = $data$$43$$.id || $JSCompiler_alias_NULL$$;
  this.name = $data$$43$$.name || $JSCompiler_alias_NULL$$
};
$City$$.prototype.$serialize$ = function $$City$$$$$serialize$$() {
  return{id:this.id, name:this.name}
};
var $record$$inline_402$$ = new $City$$;
$tuna$model$recordFactory$$.$__prototypes$.city = $record$$inline_402$$;
function $Bakery$$($data$$44$$) {
  this.$address$ = this.name = "";
  this.city = $JSCompiler_alias_NULL$$;
  this.$deliveryPrice$ = 0;
  this.$decorationPrices$ = $JSCompiler_alias_NULL$$;
  this.$isNative$ = $JSCompiler_alias_FALSE$$;
  $tuna$model$Record$$.call(this, $data$$44$$)
}
$tuna$utils$extend$$($Bakery$$, $tuna$model$Record$$);
$Bakery$$.prototype.$populate$ = function $$Bakery$$$$$populate$$($data$$45_prices$$) {
  this.id = $data$$45_prices$$.id;
  this.name = $data$$45_prices$$.name;
  this.$address$ = $data$$45_prices$$.address;
  this.city = new $City$$($data$$45_prices$$.city);
  this.$deliveryPrice$ = $data$$45_prices$$.delivery_price;
  this.$decorationPrices$ = {};
  var $data$$45_prices$$ = $data$$45_prices$$.decoration_prices, $decorationId$$;
  for($decorationId$$ in $data$$45_prices$$) {
    this.$decorationPrices$[$decorationId$$] = $data$$45_prices$$[$decorationId$$].price
  }
};
$Bakery$$.prototype.$serialize$ = function $$Bakery$$$$$serialize$$() {
  return{id:this.id, city:this.city.$serialize$(), isNative:this.$isNative$, deliveryPrice:this.$deliveryPrice$}
};
var $record$$inline_406$$ = new $Bakery$$;
$tuna$model$recordFactory$$.$__prototypes$.bakery = $record$$inline_406$$;
function $Cake$$($opt_rawData$$1$$) {
  this.$imageUrl$ = "";
  this.$dimension$ = this.$__markupJson$ = this.$markup$ = this.$photoUrl$ = $JSCompiler_alias_NULL$$;
  $tuna$model$Record$$.call(this, $opt_rawData$$1$$)
}
$tuna$utils$extend$$($Cake$$, $tuna$model$Record$$);
$Cake$$.prototype.$populate$ = function $$Cake$$$$$populate$$($data$$46$$) {
  this.id = $data$$46$$.id;
  this.$imageUrl$ = $data$$46$$.image_url;
  this.$photoUrl$ = $data$$46$$.photo_url || $JSCompiler_alias_NULL$$;
  this.$markup$ = $data$$46$$.markup;
  this.$__markupJson$ = JSON.parse($data$$46$$.markup);
  this.$dimension$ = new $Dimension$$($data$$46$$.dimension)
};
$Cake$$.prototype.$serialize$ = function $$Cake$$$$$serialize$$() {
  return{id:this.id, imageUrl:this.$imageUrl$, photoUrl:this.$photoUrl$, dimension:this.$dimension$.$serialize$()}
};
var $record$$inline_410$$ = new $Cake$$;
$tuna$model$recordFactory$$.$__prototypes$.cake = $record$$inline_410$$;
function $model$records$Order$$($opt_rawData$$2$$) {
  this.$payment$ = this.$recipe$ = this.$bakery$ = this.$cake$ = $JSCompiler_alias_NULL$$;
  this.$isPickup$ = $JSCompiler_alias_FALSE$$;
  $tuna$model$Record$$.call(this, $opt_rawData$$2$$)
}
$tuna$utils$extend$$($model$records$Order$$, $tuna$model$Record$$);
$model$records$Order$$.prototype.$populate$ = function $$model$records$Order$$$$$populate$$($data$$47$$) {
  this.id = $data$$47$$.id;
  this.$cake$ = new $Cake$$($data$$47$$.cake);
  this.$bakery$ = new $Bakery$$($data$$47$$.bakery);
  this.$recipe$ = new $model$records$Recipe$$($data$$47$$.recipe);
  this.$payment$ = new $model$records$Payment$$($data$$47$$.payment)
};
$model$records$Order$$.prototype.$serialize$ = function $$model$records$Order$$$$$serialize$$() {
  var $decorationPrice_price$$inline_414$$;
  $decorationPrice_price$$inline_414$$ = 0;
  if(this.$cake$ !== $JSCompiler_alias_NULL$$) {
    var $deco$$inline_415_recipePrice$$ = this.$cake$.$__markupJson$.content.deco !== $JSCompiler_alias_VOID$$ ? this.$cake$.$__markupJson$.content.deco : $JSCompiler_alias_NULL$$;
    if($deco$$inline_415_recipePrice$$ !== $JSCompiler_alias_NULL$$) {
      for(var $deliveryPrice_i$$inline_416$$ = 0, $l$$inline_417$$ = $deco$$inline_415_recipePrice$$.length;$deliveryPrice_i$$inline_416$$ < $l$$inline_417$$;) {
        $decorationPrice_price$$inline_414$$ += this.$bakery$.$decorationPrices$[$deco$$inline_415_recipePrice$$[$deliveryPrice_i$$inline_416$$].name], $deliveryPrice_i$$inline_416$$++
      }
    }
  }
  $deco$$inline_415_recipePrice$$ = this.$recipe$ !== $JSCompiler_alias_NULL$$ && this.$cake$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getWeightPrice$$(this.$recipe$, this.$cake$.$dimension$.$weight$) : 0;
  $deliveryPrice_i$$inline_416$$ = !this.$isPickup$ && this.$bakery$ !== $JSCompiler_alias_NULL$$ ? this.$bakery$.$deliveryPrice$ : 0;
  return{cake:$tuna$model$serialize$$(this.$cake$), recipe:$tuna$model$serialize$$(this.$recipe$), bakery:$tuna$model$serialize$$(this.$bakery$), decorationPrice:$decorationPrice_price$$inline_414$$, recipePrice:$deco$$inline_415_recipePrice$$, deliveryPrice:$deliveryPrice_i$$inline_416$$, totalPrice:$decorationPrice_price$$inline_414$$ + $deco$$inline_415_recipePrice$$ + $deliveryPrice_i$$inline_416$$}
};
var $record$$inline_421$$ = new $model$records$Order$$;
$tuna$model$recordFactory$$.$__prototypes$.order = $record$$inline_421$$;
function $model$records$Payment$$($opt_rawData$$3$$) {
  this.$deliveryPrice$ = this.$recipePrice$ = this.$decoPrice$ = 0;
  $tuna$model$Record$$.call(this, $opt_rawData$$3$$)
}
$tuna$utils$extend$$($model$records$Payment$$, $tuna$model$Record$$);
$model$records$Payment$$.prototype.$populate$ = function $$model$records$Payment$$$$$populate$$($data$$48$$) {
  this.$decoPrice$ = $data$$48$$.decoration_price;
  this.$recipePrice$ = $data$$48$$.recipe_price;
  this.$deliveryPrice$ = $data$$48$$.delivery_price
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
$Recipe$$.prototype.$populate$ = function $$Recipe$$$$$populate$$($data$$49$$) {
  this.id = $data$$49$$.id;
  this.$imageUrl$ = $data$$49$$.image_url;
  this.$desc$ = $data$$49$$.desc;
  this.name = $data$$49$$.name;
  this.$dimensionPrices$ = $data$$49$$.dimension_prices || $JSCompiler_alias_NULL$$
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
var $model$records$Recipe$$ = $Recipe$$, $record$$inline_425$$ = new $model$records$Recipe$$;
$tuna$model$recordFactory$$.$__prototypes$.recipe = $record$$inline_425$$;
function $User$$() {
  this.$network$ = this.$userpicUrl$ = this.city = this.name = this.id = ""
}
$tuna$utils$extend$$($User$$, $tuna$model$Record$$);
$User$$.prototype.$serialize$ = function $$User$$$$$serialize$$() {
  return{id:this.id, name:this.name, network:this.$network$, userpicUrl:this.$userpicUrl$}
};
function $Decoration$$($data$$50$$) {
  this.$imageUrl$ = this.name = "";
  this.group = 0;
  this.$isAutorotate$ = $JSCompiler_alias_FALSE$$;
  $tuna$model$Record$$.call(this, $data$$50$$)
}
$tuna$utils$extend$$($Decoration$$, $tuna$model$Record$$);
$Decoration$$.prototype.$populate$ = function $$Decoration$$$$$populate$$($data$$51$$) {
  this.id = $data$$51$$.id;
  this.name = $data$$51$$.name;
  this.group = $data$$51$$.group;
  this.$imageUrl$ = $data$$51$$.image_url;
  this.$isAutorotate$ = $data$$51$$.is_autorotate
};
$Decoration$$.prototype.$serialize$ = function $$Decoration$$$$$serialize$$() {
  return{name:this.id, description:this.name, url:this.$imageUrl$, autorotate:this.$isAutorotate$}
};
var $record$$inline_429$$ = new $Decoration$$;
$tuna$model$recordFactory$$.$__prototypes$.decoration = $record$$inline_429$$;
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
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($cake$$1_data$$52$$) {
  $model$currentBakery$$.addEventListener("update", this.$__handleBakeryUpdate$);
  this.$__handleBakeryUpdate$();
  $cake$$1_data$$52$$ = $JSCompiler_StaticMethods_getItemById$$($model$cakes$$, $cake$$1_data$$52$$["cake-id"]);
  $cake$$1_data$$52$$ !== $JSCompiler_alias_NULL$$ ? (this.$__cakePreset$ = $cake$$1_data$$52$$.$markup$, this.$__movie$ !== $JSCompiler_alias_NULL$$ && this.$__movie$.loadCakePreset($cake$$1_data$$52$$.$markup$)) : this.$__cakePreset$ = $JSCompiler_alias_NULL$$
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
  var $JSCompiler_StaticMethods_getMovie$self$$inline_435$$ = this.$__designerSWF$;
  $JSCompiler_StaticMethods_getMovie$self$$inline_435$$.$__movieId$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getMovie$self$$inline_435$$.$__movie$ === $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getMovie$self$$inline_435$$.$__movie$ = swfobject.getObjectById($JSCompiler_StaticMethods_getMovie$self$$inline_435$$.$__movieId$));
  this.$__movie$ = $JSCompiler_StaticMethods_getMovie$self$$inline_435$$.$__movie$;
  $JSCompiler_StaticMethods___initDesigner$$(this)
};
$JSCompiler_prototypeAlias$$.$canClose$ = function $$JSCompiler_prototypeAlias$$$$canClose$$($dimension$$2_nextStep$$) {
  if(this.$__movie$ !== $JSCompiler_alias_NULL$$) {
    var $data$$53$$ = this.$__movie$.getCakeData();
    "order" === $dimension$$2_nextStep$$ && ($dimension$$2_nextStep$$ = $JSCompiler_StaticMethods_findOne$$(function($dimension$$3$$) {
      return $dimension$$3$$.$weight$ === $data$$53$$.weight && $dimension$$3$$.shape === $data$$53$$.shape
    }), $dimension$$2_nextStep$$ !== $JSCompiler_alias_NULL$$ && ($data$$53$$.dimension_id = $dimension$$2_nextStep$$.id, $tuna$rest$call$$("cakes.add", $data$$53$$, function($cake$$2$$) {
      $model$currentCake$$.set($cake$$2$$)
    }, "cake")));
    this.$__cakeImage$ === $JSCompiler_alias_NULL$$ && (this.$__cakeImage$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "data-image", "cake-image"));
    this.$__cakeImage$.setData($data$$53$$.image);
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
  this.$__orderForm$ = this.$__orderTransformer$ = $JSCompiler_alias_NULL$$;
  this.$__handleBakeryUpdate$ = $tuna$utils$bind$$(this.$__handleBakeryUpdate$, this);
  this.$__updateOrder$ = $tuna$utils$bind$$(this.$__updateOrder$, this);
  this.$_modules$ = "template-transformer,data-image-copy,datepicker,form,popup,popup-button,button,button-group".split(",")
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
  this.$__orderForm$ = $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "form", "order-form");
  this.$__orderForm$.addEventListener("result", function($event$$34$$, $order$$) {
    $self$$17$$.$_navigation$.navigate("result", $order$$)
  });
  $JSCompiler_StaticMethods_setValue$$(this.$__orderForm$, "client_network", 2);
  $JSCompiler_StaticMethods_getModuleInstanceByName$$(this.$_container$, "button", "delivery-button").addEventListener("click", function() {
    var $isPickup$$ = $self$$17$$.$__orderForm$.$getValue$("delivery_is_pickup") !== $JSCompiler_alias_NULL$$, $bakery$$4$$ = $model$currentBakery$$.get();
    $JSCompiler_StaticMethods_setInputEnabled$$($self$$17$$.$__orderForm$, !$isPickup$$);
    $JSCompiler_StaticMethods_setValue$$($self$$17$$.$__orderForm$, "delivery_address", $isPickup$$ ? $bakery$$4$$.$address$ : "");
    $self$$17$$.$__updateOrder$()
  });
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
  var $bakery$$5$$ = $model$currentBakery$$.get();
  $bakery$$5$$ !== $JSCompiler_alias_NULL$$ && $model$recipes$$.load({bakery_id:$bakery$$5$$.id});
  $JSCompiler_StaticMethods_setValue$$(this.$__orderForm$, "delivery_address", "");
  $JSCompiler_StaticMethods_setValue$$(this.$__orderForm$, "delivery_is_pickup", $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods_setInputEnabled$$(this.$__orderForm$, $JSCompiler_alias_TRUE$$);
  this.$__updateOrder$()
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  $model$currentBakery$$.removeEventListener("update", this.$__handleBakeryUpdate$);
  $model$currentCake$$.addEventListener("update", this.$__updateOrder$);
  $model$currentRecipe$$.addEventListener("update", this.$__updateOrder$)
};
$JSCompiler_prototypeAlias$$.$__handleBakeryUpdate$ = function $$JSCompiler_prototypeAlias$$$$__handleBakeryUpdate$$() {
  var $bakery$$6$$ = $model$currentBakery$$.get();
  $bakery$$6$$ !== $JSCompiler_alias_NULL$$ && $model$recipes$$.load({bakery_id:$bakery$$6$$.id});
  this.$_navigation$.navigate("title")
};
$JSCompiler_prototypeAlias$$.$__updateOrder$ = function $$JSCompiler_prototypeAlias$$$$__updateOrder$$() {
  var $order$$1$$ = $model$currentOrder$$.get();
  $order$$1$$ === $JSCompiler_alias_NULL$$ && ($order$$1$$ = new $model$records$Order$$, $model$currentOrder$$.set($order$$1$$));
  $order$$1$$.$cake$ = $model$currentCake$$.get();
  $order$$1$$.$bakery$ = $model$currentBakery$$.get();
  $order$$1$$.$recipe$ = $model$currentRecipe$$.get();
  $order$$1$$.$isPickup$ = this.$__orderForm$.$getValue$("delivery_is_pickup") !== $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_applyTransform$$(this.$__orderTransformer$, $tuna$model$serialize$$($order$$1$$))
};
var $controller$$inline_441$$ = new $OrderController$$;
$tuna$control$__controllerTable$$.order_step = $controller$$inline_441$$;
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
  for(var $i$$47$$ = 0, $l$$35$$ = $albums$$.length, $album$$ = $JSCompiler_alias_NULL$$;$i$$47$$ < $l$$35$$;) {
    $album$$ = $albums$$[$i$$47$$];
    if("\u041c\u043e\u0438 \u0442\u043e\u0440\u0442\u0438\u043a\u0438" === $album$$.title && '\u0418\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "\u0424\u043e\u0442\u043e \u041d\u0430 \u0422\u043e\u0440\u0442\u0435"' === $album$$.description) {
      $JSCompiler_StaticMethods___fetchAlbumId$self$$.$__albumId$ = $album$$.aid;
      break
    }
    $i$$47$$++
  }
}
function $JSCompiler_StaticMethods___getAlbum$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$) {
  function $getAlbums$$() {
    FAPI.Client.call({method:"photos.getAlbums"}, function($status$$, $data$$54$$) {
      "ok" === $status$$ && ($JSCompiler_StaticMethods___fetchAlbumId$$($JSCompiler_StaticMethods___getAlbum$self$$, $data$$54$$.albums), $JSCompiler_StaticMethods___getAlbum$self$$.$__albumId$ === $JSCompiler_alias_NULL$$ ? FAPI.Client.call({method:"photos.createAlbum", title:"\u041c\u043e\u0438 \u0442\u043e\u0440\u0442\u0438\u043a\u0438", description:'\u0418\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f "\u0424\u043e\u0442\u043e \u041d\u0430 \u0422\u043e\u0440\u0442\u0435"', 
      type:"friends"}, function($status$$1$$, $aid$$) {
        "ok" === $status$$1$$ && ($JSCompiler_StaticMethods___getAlbum$self$$.$__albumId$ = $aid$$, $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$))
      }) : $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___getAlbum$self$$, $callback$$37$$))
    })
  }
  FAPI.Client.call({method:"users.hasAppPermission", ext_perm:"PHOTO CONTENT"}, function($status$$2$$, $data$$55$$) {
    $data$$55$$ ? $getAlbums$$() : (window.$API_callback$ = function $window$$API_callback$$($method$$6$$, $status$$3$$) {
      "ok" === $status$$3$$ && "showPermissions" === $method$$6$$ && $getAlbums$$();
      window.$API_callback$ = $JSCompiler_alias_NULL$$
    }, FAPI.UI.showPermissions('["PHOTO CONTENT"]'))
  })
}
function $JSCompiler_StaticMethods___uploadPhoto$$($JSCompiler_StaticMethods___uploadPhoto$self$$, $callback$$38$$) {
  $tuna$rest$call$$("social.ok.uploadImage", {image:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__cakeImage$.getData(), upload_url:"http://api.odnoklassniki.ru/api/photos/upload", album_id:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__albumId$, session_key:FAPI.Client.sessionKey, application_key:FAPI.Client.applicationKey, secret_key:FAPI.Client.sessionSecretKey}, function() {
    FAPI.Client.call({method:"photos.getUserAlbumPhotos", aid:$JSCompiler_StaticMethods___uploadPhoto$self$$.$__albumId$, pagingDirection:"backward", count:1}, function($status$$4$$, $data$$56$$) {
      $callback$$38$$($data$$56$$.photos.shift())
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
    "ok" === $status$$5$$ && FAPI.Client.call($request$$3$$, function($status$$6$$, $data$$57$$, $error$$8$$) {
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
var $controller$$inline_444$$ = new $OKShareController$$;
$tuna$control$__controllerTable$$.share_step = $controller$$inline_444$$;
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
  $model$currentBakery$$.addEventListener("update", function($event$$36$$, $bakery$$7$$) {
    $JSCompiler_StaticMethods_applyTransform$$($bakeryTransformer$$, $tuna$model$serialize$$($bakery$$7$$))
  });
  $model$cities$$.addEventListener("update", function($event$$37$$, $cities$$) {
    $cityAutocomplete$$.setData($cities$$)
  });
  $tuna$rest$call$$("cities.getCurrent", $JSCompiler_alias_NULL$$, function($city$$2$$) {
    function $listener$$34$$() {
      $model$bakeries$$.removeEventListener("update", $listener$$34$$);
      var $ids$$ = [];
      $model$cities$$.set($model$bakeries$$.map(function($bakery$$8$$) {
        $bakery$$8$$.$isNative$ = $bakery$$8$$.city.name === $city$$2$$.name;
        var $id$$6$$ = $bakery$$8$$.city.id;
        return-1 === $tuna$utils$indexOf$$($id$$6$$, $ids$$) ? ($ids$$.push($id$$6$$), $bakery$$8$$.city) : $JSCompiler_alias_NULL$$
      }));
      $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$2$$)
    }
    $model$bakeries$$.addEventListener("update", $listener$$34$$);
    $model$bakeries$$.load()
  }, "city");
  $model$decorations$$.load()
};
function $JSCompiler_StaticMethods___updateCurrentBakery$$($city$$3$$) {
  var $bakeries$$ = $model$bakeries$$.find(function($bakery$$9$$) {
    return $bakery$$9$$.city.name === $city$$3$$.name
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
  FAPI.Client.call({method:"users.getInfo", fields:"current_location", uids:FAPI.Client.uid}, function($city$$4_status$$7$$, $data$$58_value$$58$$, $error$$9$$) {
    "ok" === $city$$4_status$$7$$ ? ($city$$4_status$$7$$ = new $City$$, $data$$58_value$$58$$ !== $JSCompiler_alias_NULL$$ && 0 < $data$$58_value$$58$$.length ? ($data$$58_value$$58$$ = $data$$58_value$$58$$.shift(), $city$$4_status$$7$$.name = $data$$58_value$$58$$.location.city) : $city$$4_status$$7$$.name = "\u041c\u043e\u0441\u043a\u0432\u0430", $self$$23$$.$dispatch$("result", $city$$4_status$$7$$)) : $self$$23$$.$dispatch$("error", $error$$9$$)
  })
};
$tuna$rest$methodFactory$$.$__methods$["cities.getCurrent"] = new $GetCurrent$$;
})();
