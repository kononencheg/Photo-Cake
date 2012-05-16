APPLICATION_DIR = application/
TEMPLATE_DIR_RU	= template/ru/
TEMPLATE_DIR_EN	= template/en/
LIBRARY_DIR		= library/
STYLE_DIR		= style/

include config/make/*.mk

all: html css js

#
#   HTML
#

html: html-app html-vk html-ok html-bakery html-en


html-ok:
		 cd $(TEMPLATE_DIR_RU) && mustache $(YAML_OK) layout.mustache > \
				  $(addprefix $(HTML_PUBLIC_DIR), ok.html)


html-vk:
		 cd $(TEMPLATE_DIR_RU) && mustache $(YAML_VK) layout.mustache > \
         				  $(addprefix $(HTML_PUBLIC_DIR), vk.html)


html-bakery:
			 cd $(TEMPLATE_DIR_RU) && mustache $(YAML_BAKERY) layout.mustache > \
             				  $(addprefix $(HTML_PUBLIC_DIR), bakery.html)


html-app:
		  cd $(TEMPLATE_DIR_RU) && mustache $(YAML_SITE) layout.mustache > \
                              $(addprefix $(HTML_PUBLIC_DIR), index.html)


html-en:
		 cd $(TEMPLATE_DIR_EN) && mustache $(YAML_SITE) layout.mustache > \
                              $(addprefix $(HTML_PUBLIC_DIR), en.html)


#
#   JS
#

js: js-ok js-vk js-bakery js-app

js-ok: $(JS_OK)
	   $(JS_COMPILER) --define 'APP_NETWORK=2' $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), ok.js)


js-vk: $(JS_VK)
	   $(JS_COMPILER) --define 'APP_NETWORK=1' $(addprefix --js , $^) \
					  $(addprefix --js_output_file $(JS_PUBLIC_DIR), vk.js)


js-bakery: $(JS_BAKERY)
		   $(JS_COMPILER) $(addprefix --js , $^) \
						  $(addprefix --js_output_file $(JS_PUBLIC_DIR), bakery.js)


js-app: $(JS_SITE)
		$(JS_COMPILER) $(addprefix --js , $^) \
					   $(addprefix --js_output_file $(JS_PUBLIC_DIR), app.js)


#
#   CSS
#

css: $(CSS_SITE)
	 $(CSS_COMBINER) $(addprefix --css , $^) \
				     $(addprefix --css_output_file $(CSS_PUBLIC_DIR), styles.css)


#
#   Clean
#

clean:
	rm $(addprefix $(JS_PUBLIC_DIR), *.js) \
	   $(addprefix $(HTML_PUBLIC_DIR), *.html)
