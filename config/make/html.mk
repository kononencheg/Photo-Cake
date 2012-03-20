HTML_COMPRESSOR = java -jar utils/htmlcompressor.jar --type html

LAYOUT_TEMPLATE = $(addprefix $(TEMPLATE_DIR), layout.mustache)

YAML_BAKERY = config/template/bakery.yaml
YAML_SITE   = config/template/site.yaml
YAML_OK     = config/template/ok.yaml
YAML_VK     = config/template/vk.yaml

HTML_PUBLIC_DIR = public/