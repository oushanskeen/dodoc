import React from "react";
import EditBoxF, {createMessage} from "./EditBoxF";
import {shallow} from "enzyme";

describe("EditBox Testing", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<EditBoxF />);
    //console.log(wrapper.debug());
  });

  // INITIAL COMPONENT STATE
  test("render the initial value of state in a div", ()=>{
    expect(wrapper.find(".editableDiv").text())
    .toBe("stub input text");
  });

  // EDITABLE CONTENT DIV ---------------------------------------------------------
  test("Find editbale div inside edit box",()=>{
    expect(wrapper.find(".editableDiv").props().contenteditable)
      .toEqual("true")
  });
  test("Correct input capture", () => {
    expect(wrapper.find(".editableDiv").text())
    .toBe("stub input text");
    expect(wrapper.find(".editableDiv")
      .invoke('onInput')({target:{value:"new text after input"}}))
    expect(wrapper.find(".editableDiv").text())
    .toBe("new text after input");
  });

  // PDF BUTTON -------------------------------------------------------------------
  test("render a button with text of pdf", () =>{
    expect(wrapper.find("#pdf").text()).toBe("PDF");
  });

  // SAVE BUTTON ------------------------------------------------------------------
  test("render a button with text of save", () =>{
    expect(wrapper.find("#save").text()).toBe("SAVE");
  });

  test("Message emitter emits message", () => {
    expect(createMessage("pdf","pdfMessage"))
    .toEqual({type:"SAVE_PDF",payload:"pdfMessage"})
  });
});

