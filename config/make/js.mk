JS_COMBINER = node utils/combiner.js \

JS_COMPRESSOR = uglifyjs --overwrite --max-line-len 32000 --lift-vars --no-copyright

JS_COMPILER = java -jar utils/compiler.jar \
			  --warning_level VERBOSE \
			  --output_wrapper="(function(){%output%})();" \
			  --compilation_level ADVANCED_OPTIMIZATIONS \
			  --externs library/externs.js \
			  #--formatting PRETTY_PRINT \
			  #--debug \
			  #WHITESPACE_ONLY

#ADVANCED_OPTIMIZATIONS

TUNA_FILES = tuna.js \
			 \
			 utils/utils.js \
			 \
			 dom/dom.js \
			 \
			 events/basic-event.js \
			 events/i-event-dispatcher.js \
			 events/event-dispatcher.js \
			 \
			 net/i-request.js \
			 net/request.js \
			 \
			 model/i-resource.js \
			 model/list-resource.js \
			 model/item-resource.js \
			 model/record-factory.js \
			 model/record.js \
			 model/model.js \
			 \
			 rest/i-method.js \
			 rest/method.js \
			 rest/default-method.js \
			 rest/i-method-factory.js \
			 rest/method-factory.js \
			 rest/rest.js \
			 \
			 tmpl/data/data-node.js \
			 tmpl/data/path-evaluator.js \
			 \
			 tmpl/settings/i-item-settings.js \
			 tmpl/settings/spot-settings.js \
			 tmpl/settings/attribute-settings.js \
			 tmpl/settings/condition-settings.js \
			 tmpl/settings/checkbox-settings.js \
			 tmpl/settings/list-settings.js \
			 tmpl/settings/template-settings.js \
			 \
			 tmpl/markup/i-markup-extractor.js \
			 tmpl/markup/spot-extractor.js \
			 tmpl/markup/list-extractor.js \
			 tmpl/markup/attribute-extractor.js \
			 tmpl/markup/condition-extractor.js \
			 tmpl/markup/checkbox-extractor.js \
			 tmpl/markup/markup-template-builder.js \
			 \
			 tmpl/units/list/i-list-item-router.js \
			 tmpl/units/list/list-container-router.js \
			 tmpl/units/condition/class-action.js \
			 tmpl/units/condition/condition-action.js \
			 tmpl/units/condition/condition-operator.js \
			 tmpl/units/condition/equals-operator.js \
			 tmpl/units/condition/isset-operator.js \
			 tmpl/units/condition/not-equals-operator.js \
			 tmpl/units/condition/notset-operator.js \
			 tmpl/units/i-unit.js \
			 tmpl/units/unit.js \
			 tmpl/units/spot.js \
			 tmpl/units/attribute.js \
			 tmpl/units/condition.js \
			 tmpl/units/checkbox.js \
			 tmpl/units/list.js \
			 tmpl/units/template.js \
			 \
			 tmpl/compilers/i-item-compiler.js \
			 tmpl/compilers/template-compiler.js \
			 tmpl/compilers/spot-compiler.js \
			 tmpl/compilers/attribute-compiler.js \
			 tmpl/compilers/condition-compiler.js \
			 tmpl/compilers/checkbox-compiler.js \
			 tmpl/compilers/list-compiler.js \
			 \
			 tmpl/tmpl.js \
			 \
			 ui/module.js \
			 ui/module-instance.js \
			 ui/module-container.js \
			 ui/ui.js \
			 \
			 ui/popups/popup.js \
			 ui/popups/popups.js \
			 \
			 ui/buttons/button.js \
			 ui/buttons/popup-button.js \
			 ui/buttons/button-group.js \
			 ui/buttons/buttons.js \
			 \
			 ui/flash/swf.js \
			 ui/flash/flash.js \
			 \
			 ui/forms/form.js \
			 ui/forms/form-input.js \
			 ui/forms/input-filter.js \
			 ui/forms/autocomplete.js \
			 ui/forms/forms.js \
			 \
			 ui/transformers/i-transform-handler.js \
			 ui/transformers/i-transformer.js \
			 ui/transformers/template-transformer.js \
			 \
			 ui/selection/i-selection-group.js \
			 ui/selection/abstract-selection-group.js \
			 ui/selection/selection-group.js \
			 ui/selection/navigation.js \
			 ui/selection/carousel.js \
			 \
			 ui/selection/items/i-items-collection.js \
			 ui/selection/items/elements-collection.js \
			 ui/selection/items/named-elements-collection.js \
			 \
			 ui/selection/rule/i-selection-rule.js \
			 ui/selection/rule/abstract-selection-rule.js \
			 ui/selection/rule/single-selection-rule.js \
			 ui/selection/rule/multiple-selection-rule.js \
			 ui/selection/rule/navigation-selection-rule.js \
			 \
			 ui/selection/view/i-selection-view.js \
			 ui/selection/view/abstract-selection-view.js \
			 ui/selection/view/class-selection-view.js \
			 \
			 control/control.js \
			 control/view-controller.js \
			 control/page-view-controller.js \
			 \
             modules/navigation.js \
             modules/popup.js \
             modules/button.js \
             modules/popup-button.js \
             modules/selection-group.js \
             modules/template-transformer.js \
             modules/button-group.js \
             modules/swf.js \
             modules/input-filter.js \
             modules/autocomplete.js \
             modules/form.js \
             modules/carousel.js \

APPLICATION_FILES = main.js \
					\
					ui/data-image.js \
					ui/inner-html.js \
					\
					ui/modules/datepicker.js \
					ui/modules/inner-html.js \
					ui/modules/data-image.js \
					ui/modules/data-image-copy.js \
					ui/modules/yandex-share.js \
					ui/modules/vk-share.js \
					\
					rest/common-method.js \
					\
					model/records/dimension.js \
					model/records/city.js \
					model/records/bakery.js \
					model/records/cake.js \
					model/records/order.js \
					model/records/payment.js \
					model/records/recipe.js \
					model/records/user.js \
					model/records/decoration.js \
					model/model.js \
					\
					control/steps/title-controller.js \
					control/steps/designer-controller.js \
					control/steps/order-controller.js \

BAKERY_FILES = control/steps/share/share-controller.js \
	 		   control/bakery-main-controller.js \

SITE_FILES = control/steps/share/share-controller.js \
             control/steps/result/result-controller.js	\
			 control/main-controller.js \

VK_FILES = control/steps/share/vk-share-controller.js \
		   control/main-controller.js \
            control/steps/result/result-controller.js	\
		   rest/social/vk/vk-method.js \
		   rest/social/vk/friends/get-list.js \
		   rest/social/vk/wall/post.js \
		   rest/social/vk/cities/get-current.js \

OK_FILES = control/steps/share/ok-share-controller.js \
           control/steps/result/ok-result-controller.js	\
		   control/main-controller.js \
		   rest/social/ok/cities/get-current.js \


JS_APP = $(addprefix $(LIBRARY_DIR)tuna/, $(TUNA_FILES)) \
		 $(addprefix $(APPLICATION_DIR), $(APPLICATION_FILES))

JS_BAKERY = $(JS_APP) $(addprefix $(APPLICATION_DIR), $(BAKERY_FILES))
JS_SITE = $(JS_APP) $(addprefix $(APPLICATION_DIR), $(SITE_FILES))
JS_VK = $(JS_APP) $(addprefix $(APPLICATION_DIR), $(VK_FILES))
JS_OK = $(JS_APP) $(addprefix $(APPLICATION_DIR), $(OK_FILES))


JS_PUBLIC_DIR = public/js/