import{h as e,D as c,o as F,c as i,z as s,G as o,a as C,O as A}from"./chunks/framework.89a3316d.js";const d=s("h1",{id:"自定义行列-table",tabindex:"-1"},[C("自定义行列 table "),s("a",{class:"header-anchor",href:"#自定义行列-table","aria-label":'Permalink to "自定义行列 table"'},"​")],-1),u=s("hr",null,null,-1),g={class:"container"},m={class:"editor-container"},h=s("div",null,"html内容",-1),f={class:"editor-container"},q=s("div",null,"javascript内容",-1),E={class:"editor-container"},b=s("div",null,"css内容",-1),v=A("",5),w=JSON.parse('{"title":"自定义行列 table","description":"","frontmatter":{},"headers":[],"relativePath":"editor/base.md","filePath":"editor/base.md"}'),x={name:"editor/base.md"},S=Object.assign(x,{setup(_){const p={automaticLayout:!0,theme:"vs-dark",foldingStrategy:"indentation",renderLineHighlight:"all",selectOnLineNumbers:!0,wordWrap:"on",formatOnPaste:!0,minimap:{enabled:!1},readOnly:!1,fontSize:16,scrollBeyondLastLine:!0,overviewRulerBorder:!1},n=e({html:`<div class='add-box'  onclick="add()">
    <span class='add-box-span'>添加</span>
</div>`,css:`.add-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px dashed #ddd;padding: 0;line-height: 32px;cursor: pointer;
  }
  .add-box-span{color: #66b1ff;}`,js:`function add () {
    alert('add')
}`});e("html");const r={htmlSettings:{headSettings:"",htmlClass:"",bodyClass:"",htmlType:"html"},styleSettings:{defaultCss:0,links:[""],styleType:"css"},scriptSettings:{scripts:[""]},projectInfo:{name:"",description:""},saveSettings:{autoSave:!0,autoRun:!0,autoFormat:!0},editorSetting:{layout:1,indentSize:2,indentType:"tab"}},D=e(null);return(k,a)=>{const t=c("HuMonacoBase"),y=c("HuMonacoBasePreview");return F(),i("div",null,[d,u,s("div",g,[s("div",m,[h,o(t,{modelValue:n.value.html,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value.html=l),config:p,language:"html"},null,8,["modelValue"])]),s("div",f,[q,o(t,{modelValue:n.value.js,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value.js=l),config:p,language:"javascript"},null,8,["modelValue"])]),s("div",E,[b,o(t,{modelValue:n.value.css,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value.css=l),config:p,language:"css"},null,8,["modelValue"])])]),o(y,{ref_key:"runIframeRef",ref:D,options:n.value,"pre-settings":r},null,8,["options"]),v])}}});export{w as __pageData,S as default};
