CSS_COMBINER = node utils/combiner.js

CSS_FILES = \
			bootstrap.css \
			jquery/jquery.ui.core.css \
			jquery/jquery.ui.datepicker.css \
			jquery/jquery.ui.theme.css \
			head.css \
			typography.css \
			layout.css \
			share.css \
			styles.css \
			title-step.css \


CSS_SITE = $(addprefix $(STYLE_DIR), $(CSS_FILES))

CSS_PUBLIC_DIR = public/css/