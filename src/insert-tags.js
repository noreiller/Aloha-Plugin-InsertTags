/**
 * register the plugin with unique name
 */
GENTICS.Aloha.InsertTags = new GENTICS.Aloha.Plugin('insert-tags');

/**
 * Configure the available languages
 */
GENTICS.Aloha.InsertTags.languages = ['en','fr'];

/**
 * Default configuration tags
 */
GENTICS.Aloha.InsertTags.config = ['br','hr'];

/**
 * InsertTagsment wanted by the user
 */
GENTICS.Aloha.InsertTags.tag = '';

/**
 * InsertTagsment of the selection before modification
 */
GENTICS.Aloha.InsertTags.lastTag = '';

/**
 * Initialize the plugin and set initialize flag on true
 */
GENTICS.Aloha.InsertTags.init = function () {
    this.createButtons();
};

GENTICS.Aloha.InsertTags.createButtons = function () {
    var scope = 'GENTICS.Aloha.continuoustext';
    this.buttons = {};
    var that = this;

    //iterate configuration array an push buttons to buttons array
    jQuery.each(GENTICS.Aloha.InsertTags.config, function(j, button) {
      
      that.buttons[button] = new GENTICS.Aloha.ui.Button({
        'iconClass' : 'GENTICS_button GENTICS_inserttags_' + button,
        'size' : 'small',
        'onclick' : function () {
          that.insertTag(button);
        },
        'tooltip' : that.i18n('button.inserttags.' + button + '.tooltip'),
        'toggle' : false
      });
      GENTICS.Aloha.FloatingMenu.addButton(
        scope,
        that.buttons[button],
        GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.insert'),
        1
      );
    });
};

/**
* InsertTags the selection or remove it
*/
GENTICS.Aloha.InsertTags.insertTag = function ( tag ) {
    var 
      range = GENTICS.Aloha.Selection.getRangeObject(),
      newTag
    ;
    
    if (tag == 'br')
      newTag = jQuery('<p>&nbsp;</p>');
    else
      newTag = jQuery('<' + tag + ' />');
    
    GENTICS.Utils.Dom.insertIntoDOM(newTag, range, jQuery(GENTICS.Aloha.activeEditable.obj));
};

 
