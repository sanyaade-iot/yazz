'use strict';

goog.provide('Blockly.Blocks.appshare');

goog.require('Blockly.Blocks');
goog.require('Blockly.FieldClickImage');


Blockly.Blocks['appshare_app'] = {
  init: function() {
    this.appendDummyInput().appendField("Appshare Application");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.appendDummyInput().appendField("Add UI blocks here");
    this.appendStatementInput("main application element").setCheck("HtmlElement");

    this.setColour(230);
    this.appendDummyInput().appendField("Main Application Text")
        .appendField(new Blockly.FieldTextInput("Type text here"), "VALUE");


  }
};



Blockly.Blocks['appshare_ui_component'] = {
  init: function() {
    this.appendDummyInput().appendField("UI component");
    this.setColour(130);
    this.appendDummyInput().appendField("");
    this.appendDummyInput().appendField("Add Divs here");
    this.appendStatementInput("main div element").setCheck("HtmlElement");
    //this.setOutput(true, 'UiComponent')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};







Blockly.Blocks['appshare_div'] = {
  init: function() {
    this.appendDummyInput().appendField("<div");
    this.appendValueInput("ATTRIBUTES").setCheck("HtmlElementAttribute");
    this.appendDummyInput().appendField(">");
    this.appendStatementInput("more elements").setCheck("HtmlElement");
    this.appendDummyInput().appendField("</div>");
    this.setInputsInline(true);

    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(130);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['appshare_no_attributes'] = {
  init: function() {
    this.appendDummyInput().appendField("no attributes");
    this.setInputsInline(true);

    this.setColour(150);
    this.setTooltip('');
    this.setOutput(true, 'HtmlElementAttribute')
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['appshare_element_attribute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("style"), "style")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("width=100%"), "value");

    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElementAttribute");
    this.setNextStatement(true, "HtmlElementAttribute");
    this.setOutput(true, 'HtmlElementAttribute')
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }

};





Blockly.Blocks['appshare_element_header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header text")
        .appendField(new Blockly.FieldTextInput("Header text"), "VALUE");

    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
    //this.setOutput(true, 'HtmlElement')
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['appshare_element_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text")
        .appendField(new Blockly.FieldTextInput("Type text here"), "VALUE");

    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
    //this.setOutput(true, 'HtmlElement')
    this.setHelpUrl('http://www.example.com/');
  }
};




Blockly.Blocks['appshare_element_br'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Newline");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
  }
};


Blockly.Blocks['appshare_element_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
  }
};



Blockly.Blocks['appshare_element_left_padding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Left Padding");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['appshare_element_top_padding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Top Padding");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');
  }
};




Blockly.Blocks['appshare_custom_component'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Thing")
        .appendField(new Blockly.FieldTextInput("Component_Name"), "COMPONENT_NAME");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.appendDummyInput().appendField("Add DIV blocks here");
    this.appendStatementInput("main div element").setCheck("HtmlElement");
  }
}



Blockly.Blocks['appshare_call_custom_component'] = {
  init: function() {


    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
    this.setColour(230);
    this.setTooltip('');

    var dropdown = new Blockly.FieldDropdown([['world', 'WORLD'], ['computer', 'CPU']]);
    this.appendDummyInput()
    .appendField("component name").appendField(dropdown, 'COMPONENT_NAME_VALUE');
    dropdown.setText(""); // set the actual text
    dropdown.setValue("");

    //this.setOutput(true, 'HtmlElement')
    this.setHelpUrl('http://www.example.com/');
  },

  onchange: function(event) {
    //var dropdown = new Blockly.FieldDropdown([['1', '1'], ['2', '2']]);
    //this.getInput("COMPONENT_NAME").appendField(dropdown, 'MODE');
    //this.removeInput('COMPONENT_NAME');
    //var dropdown = new Blockly.FieldDropdown([['1', '1'], ['2', '2']]);
    //this.appendValueInput("COMPONENT_NAME2").appendField(dropdown, 'MODE2');
    var dummyData = component_list;

    // setting the menuGenerator for your "variable_name"
    this.getField("COMPONENT_NAME_VALUE").menuGenerator_ = dummyData;
  }

};

Blockly.Blocks['appshare_db_component'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DB")
        .appendField(new Blockly.FieldTextInput("table_name"), "VALUE");
    this.appendDummyInput()
        .appendField("Fields")
        .appendField(new Blockly.FieldTextInput(":id"), "DB_FIELDS");
    this.appendStatementInput("more elements").setCheck("HtmlElement");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}



Blockly.Blocks['appshare_db_field'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Field")
        .appendField(new Blockly.FieldTextInput("id"), "VALUE");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}






Blockly.Blocks['appshare_show_tables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Show tables");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}






Blockly.Blocks['appshare_input_field'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input field")
        .appendField();
    this.appendDummyInput()
        .appendField("Placeholder text")
        .appendField(new Blockly.FieldTextInput("Some text"), "PLACEHOLDER");
    this.setColour(230);
    this.appendDummyInput().appendField("");

    this.appendDummyInput()
        .appendField("Store the name in")
        .appendField(new Blockly.FieldTextInput("input-value"), "STOREIN");

    this.appendDummyInput().appendField("Add callback code here");
    this.appendStatementInput("CALLBACK").setCheck("CodeElement");
    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}



Blockly.Blocks['appshare_code_alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("JS Alert");
    this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("Some text"), "TEXT");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "CodeElement");
    this.setNextStatement(true, "CodeElement");
  }
}





Blockly.Blocks['appshare_code_raw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RAW code");
    this.appendDummyInput()
        .appendField("Code")
        .appendField(new Blockly.FieldTextInput("nil"), "CODE");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "CodeElement");
    this.setNextStatement(true, "CodeElement");
  }
}







Blockly.Blocks['appshare_code_insert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DB Insert");
    this.appendDummyInput().appendField("Table Name").appendField(new Blockly.FieldTextInput(""), "TABLENAME");
    this.appendDummyInput().appendField("Field").appendField(new Blockly.FieldTextInput(""), "FIELD");
    this.appendDummyInput().appendField("Value").appendField(new Blockly.FieldTextInput(""), "VALUE");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.setPreviousStatement(true, "CodeElement");
    this.setNextStatement(true, "CodeElement");
  }
}






Blockly.Blocks['appshare_db_rowid_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DB Row Button")
        .appendField(new Blockly.FieldTextInput("Button text"), "TEXT");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.appendDummyInput().appendField("Add callback code here");
    this.appendStatementInput("CALLBACK").setCheck("CodeElement");

    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}






var fff = function (eventpat) {
  alert('Clicked');
  return 0;};








Blockly.Blocks['appshare_definedb_table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Define table")
        .appendField(new Blockly.FieldTextInput("table_name"), "TABLENAME");
    this.appendDummyInput()
        .appendField("update DB")
        .appendField(new Blockly.FieldClickImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*",fff));
    this.setcolor();
    this.appendStatementInput("COLUMNS").setCheck("ColumnElement");
  },
  setcolor: function() {
          this.setColour(230);
      }
}




Blockly.Blocks['appshare_definedb_column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Column name")
        .appendField(new Blockly.FieldTextInput("Col_Name"), "COLUMNNAME");

    var dropdown = new Blockly.FieldDropdown([['Text', 'TEXT'], ['Number', 'NUMBER'], ['ID', 'ID'], ['Picture', 'PICTURE'], ['Boolean', 'BOOLEAN']]);
    this.appendDummyInput()
    .appendField("Type").appendField(dropdown, 'COLUMN_TYPE');
    dropdown.setText(""); // set the actual text
    dropdown.setValue("");

    this.setcolor();
    this.setPreviousStatement(true, "ColumnElement");
    this.setNextStatement(true, "ColumnElement");
  },
  setcolor: function() {
          this.setColour(230);
  }
}







Blockly.Blocks['appshare_code_update_ddl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("update DDL");
    this.appendDummyInput()
        .appendField("Success message")
        .appendField(new Blockly.FieldTextInput("Done"), "DONETEXT");

    this.setColour(230);
    this.setPreviousStatement(true, "CodeElement");
    this.setNextStatement(true, "CodeElement");
  }
}











Blockly.Blocks['appshare_element_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button")
        .appendField(new Blockly.FieldTextInput("Button text"), "TEXT");
    this.setColour(230);
    this.appendDummyInput().appendField("");
    this.appendDummyInput().appendField("Add callback code here");
    this.appendStatementInput("CALLBACK").setCheck("CodeElement");

    this.setPreviousStatement(true, "HtmlElement");
    this.setNextStatement(true, "HtmlElement");
  }
}
