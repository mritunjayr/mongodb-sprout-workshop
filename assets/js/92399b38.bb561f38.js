"use strict";(self.webpackChunkmongodb_sprout_workshop=self.webpackChunkmongodb_sprout_workshop||[]).push([[978],{9412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var o=t(4848),r=t(8453);const d={},i="Read",s={id:"spring-data-mongodb/Read",title:"Read",description:"We have our documents stored, but now we want to read them! Let's start with two common operations:",source:"@site/docs/04-spring-data-mongodb/4-Read.mdx",sourceDirName:"04-spring-data-mongodb",slug:"/spring-data-mongodb/Read",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/Read",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mongodb-sprout-workshop/blob/main/docs/04-spring-data-mongodb/4-Read.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/Create"},next:{title:"Update",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/Update"}},a={},l=[{value:"findAll",id:"findall",level:2},{value:"findById",id:"findbyid",level:2},{value:"Query Generation",id:"query-generation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"read",children:"Read"}),"\n",(0,o.jsx)(n.p,{children:"We have our documents stored, but now we want to read them! Let's start with two common operations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"findAll()"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"findById()"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"findall",children:"findAll"}),"\n",(0,o.jsxs)(n.p,{children:["To retrieve all the grades form the database, all you need is the ",(0,o.jsx)(n.code,{children:"findAll()"})," method provided by the ",(0,o.jsx)(n.code,{children:"StudentRepository"}),".\nThis method will return all the grade documents present in the grades collection."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public List<Grade> getAllGrades() {\n    return repository.findAll();\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"findbyid",children:"findById"}),"\n",(0,o.jsxs)(n.p,{children:["To retrieve individual documents, you can use the ",(0,o.jsx)(n.code,{children:"findById()"})," method provided by the ",(0,o.jsx)(n.code,{children:"StudentRepository"}),". This allows you\nto retrieve an individual document from the database, identified by the ",(0,o.jsx)(n.code,{children:"ObjectId"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public Optional<Grade> getGradeById(String id) {\n    return repository.findById(id);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"query-generation",children:"Query Generation"}),"\n",(0,o.jsxs)(n.p,{children:["While these methods are powerful as they are, it only touches on the capabilities of ",(0,o.jsx)(n.code,{children:"MongoRepository"}),". Query generation allows\nus to build queries solely based of the method names. If we look back on our document model for this collection;"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "_id": ObjectId,\n  "studentId": double,\n  "classId": double,\n  "scores": [\n    {\n      "type": String,\n      "score": double\n    }\n  ],\n  "comment": String\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Imagine if you wanted to search by ",(0,o.jsx)(n.code,{children:"comment"}),". With ",(0,o.jsx)(n.code,{children:"MongoRepository"}),", all you have to do is create a method called ",(0,o.jsx)(n.code,{children:"findByComment(String comment)"}),"\nand it will generate a query to find documents with a specific comment."]}),"\n",(0,o.jsxs)(n.p,{children:["There are a number of ways you can adjust these methods, such as paging, iterating large results, sorting & limiting, and\nif you want to read about the nitty gritty of each of these, head over to the\n",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-data/mongodb/reference/repositories/query-methods-details.html",children:"Spring Documentation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In simple terms, When creating query method names, they are split into two parts: the ",(0,o.jsx)(n.strong,{children:"subject"})," and the ",(0,o.jsx)(n.strong,{children:"predicate"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Subject:"})," The first part (like findBy or existsBy) tells what the query will do."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Predicate:"})," The second part describes the conditions of the query."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The subject can include additional words that describe the query. Any words between ",(0,o.jsx)(n.code,{children:"find"})," (or other starting keywords)\nand ",(0,o.jsx)(n.code,{children:"By"})," are just for description, unless they are special keywords like ",(0,o.jsx)(n.code,{children:"Distinct"})," (to ensure unique results) or\n",(0,o.jsx)(n.code,{children:"Top"}),"/",(0,o.jsx)(n.code,{children:"First"})," (to limit the number of results). You can see what each word maps to in the\n",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-data/mongodb/reference/repositories/query-keywords-reference.html",children:"Spring documentation"}),",\nand it is largely intuitive."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, in the method ",(0,o.jsx)(n.code,{children:"findTop3ByAge"}),", ",(0,o.jsx)(n.code,{children:"findTop3"})," is the subject, and ",(0,o.jsx)(n.code,{children:"ByAge"})," is the predicate. The ",(0,o.jsx)(n.code,{children:"Top3"})," indicates\nthat the query should return the first three results based on the ",(0,o.jsx)(n.code,{children:"Age"})," condition."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const r={},d=o.createContext(r);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);