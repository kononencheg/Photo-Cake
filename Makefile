JS_COMPILER = java -jar util/compiler.jar
JS_COMPILER_FLAGS = --compilation_level ADVANCED_OPTIMIZATIONS \
					--language_in ECMASCRIPT5_STRICT \
					--warning_level VERBOSE \
					--summary_detail_level 3 \
					--define IS_COMPILED=true
					#--formatting PRETTY_PRINT \
					#--debug \


JS_ROOT = public/js/

EXTERNS = $(addprefix $(JS_ROOT), externs.js)

COMMON_SRC =  lib/tuna.js \
              namespaces.js \
              \
              lib/tuna/dom.js \
              lib/tuna/config.js \
              \
              lib/tuna/model/record.js \
              \
              lib/tuna/tmpl/i-transform-handler.js \
              lib/tuna/tmpl/i-transformer.js \
              \
              lib/tuna/tmpl/data/data-node.js \
              lib/tuna/tmpl/data/path-evaluator.js \
              \
              lib/tuna/tmpl/settings/spot.js \
              lib/tuna/tmpl/settings/attribute.js \
              lib/tuna/tmpl/settings/condition.js \
              lib/tuna/tmpl/settings/list.js \
              lib/tuna/tmpl/settings/template.js \
              \
              lib/tuna/tmpl/markup/i-markup-extractor.js \
              lib/tuna/tmpl/markup/spot-extractor.js \
              lib/tuna/tmpl/markup/list-extractor.js \
              lib/tuna/tmpl/markup/attribute-extractor.js \
              lib/tuna/tmpl/markup/condition-extractor.js \
              lib/tuna/tmpl/markup/markup-template-builder.js \
              \
              lib/tuna/tmpl/unit/i-list-item-router.js \
              lib/tuna/tmpl/unit/list-container-router.js \
              lib/tuna/tmpl/unit/compiled-unit.js \
              lib/tuna/tmpl/unit/spot.js \
              lib/tuna/tmpl/unit/attribute.js \
              lib/tuna/tmpl/unit/condition.js \
              lib/tuna/tmpl/unit/list.js \
              lib/tuna/tmpl/unit/template.js \
              \
              lib/tuna/tmpl/compile/i-item-compiler.js \
              lib/tuna/tmpl/compile/template-compiler.js \
              lib/tuna/tmpl/compile/spot-compiler.js \
              lib/tuna/tmpl/compile/attribute-compiler.js \
              lib/tuna/tmpl/compile/condition-compiler.js \
              lib/tuna/tmpl/compile/list-compiler.js \
              \
              lib/tuna/tmpl/template-transformer.js \
              \
              lib/tuna/events/event.js \
              lib/tuna/events/i-event-dispatcher.js \
              lib/tuna/events/event-dispatcher.js \
              \
              lib/tuna/net/i-request.js \
              lib/tuna/net/request.js \
              \
              lib/tuna/rest/i-response-parser.js \
              lib/tuna/rest/i-remote-method.js \
              lib/tuna/rest/remote-method.js \
              lib/tuna/rest/i-method-factory.js \
              lib/tuna/rest/factory.js \
              \
              lib/tuna/ui/modules/module.js \
              lib/tuna/ui/modules.js \
              lib/tuna/ui/modules/transform-container.js \
              lib/tuna/ui/modules/navigation.js \
              lib/tuna/ui/modules/selection-group.js \
              \
              lib/tuna/ui/selection/items/i-items-collection.js \
              lib/tuna/ui/selection/items/elements-collection.js \
              lib/tuna/ui/selection/items/named-elements-collection.js \
              \
              lib/tuna/ui/selection/rule/i-selection-rule.js \
              lib/tuna/ui/selection/rule/abstract-selection-rule.js \
              lib/tuna/ui/selection/rule/single-selection-rule.js \
              lib/tuna/ui/selection/rule/multiple-selection-rule.js \
              \
              lib/tuna/ui/selection/view/i-selection-view.js \
              lib/tuna/ui/selection/view/abstract-selection-view.js \
              lib/tuna/ui/selection/view/class-selection-view.js \
              \
              lib/tuna/ui/selection/i-selection-group.js \
              lib/tuna/ui/selection/abstract-selection-group.js \
              lib/tuna/ui/selection/selection-group.js \
              \
              lib/tuna/ui/container/container.js \
              lib/tuna/ui/container/transform-container.js \
              \
              lib/tuna/view/view-controller.js \
              lib/tuna/view/page-view-controller.js \
              lib/tuna/view/navigation-view-controller.js \
              lib/tuna/view.js \
              \
              src/main.js \
              \
              src/model/users.js \
              \
              src/rest/common-method.js \
              \
              src/ui/popup.js \
              \
              src/view/main-controller.js \
              src/view/steps/title-controller.js \

 	 	  
OUTPUT = common.js


common.js: $(addprefix $(JS_ROOT), $(COMMON_SRC))

	$(JS_COMPILER) $(JS_COMPILER_FLAGS) $(addprefix --js , $^) \
	 	 	 	   $(addprefix --externs , $(EXTERNS)) \
	 	 	 	   $(addprefix --js_output_file $(JS_ROOT), $@)
