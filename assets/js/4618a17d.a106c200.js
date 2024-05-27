"use strict";(self.webpackChunkmongodb_sprout_workshop=self.webpackChunkmongodb_sprout_workshop||[]).push([[469],{3651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),o=t(8453);const r={},i="Time to Code!",a={id:"repositories-and-aggregation/Exercises",title:"Time to Code!",description:"Spring Support for MongoDB Aggregations",source:"@site/docs/05-repositories-and-aggregation/3-Exercises.mdx",sourceDirName:"05-repositories-and-aggregation",slug:"/repositories-and-aggregation/Exercises",permalink:"/mongodb-sprout-workshop/docs/repositories-and-aggregation/Exercises",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mongodb-sprout-workshop/blob/main/docs/05-repositories-and-aggregation/3-Exercises.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customizing Individual Repositories in Spring Data",permalink:"/mongodb-sprout-workshop/docs/repositories-and-aggregation/Custom-Repositories"},next:{title:"Transactions and Encrytion",permalink:"/mongodb-sprout-workshop/docs/category/transactions-and-encrytion"}},l={},c=[{value:"Question 1: Total Sales by Location",id:"question-1-total-sales-by-location",level:2},{value:"Question 2: Customer Satisfaction by Location",id:"question-2-customer-satisfaction-by-location",level:2},{value:"Question 3: Average Price of Items per Store",id:"question-3-average-price-of-items-per-store",level:2},{value:"Question 4: Number of Distinct Customers",id:"question-4-number-of-distinct-customers",level:2},{value:"Question 5: Total Sales by Day of the Week",id:"question-5-total-sales-by-day-of-the-week",level:2},{value:"Question 6: Sum of Sales Revenue by Location",id:"question-6-sum-of-sales-revenue-by-location",level:2},{value:"Question 7: Sales Performance Before and After Applying Coupons",id:"question-7-sales-performance-before-and-after-applying-coupons",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"time-to-code",children:"Time to Code!"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.spring.io/spring-data/mongodb/reference/mongodb/aggregation-framework.html",children:"Spring Support for MongoDB Aggregations"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/aggregation/?utm_campaign=devrel&utm_source=workshop&utm_term=devrel.springio.workshop.java",children:"MongoDB Aggregation Operations"})]}),"\n",(0,s.jsx)(n.p,{children:"Switch to session2 for this exercise:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout session2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-1-total-sales-by-location",children:"Question 1: Total Sales by Location"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the total sales grouped by each location and return a result that includes the location's name (or ID) and the total sales amount."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and count the total sales."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the group operation into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" mvn spring-boot:run -Dspring-boot.run.arguments=total-sales-by-location\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-2-customer-satisfaction-by-location",children:"Question 2: Customer Satisfaction by Location"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the average customer satisfaction rating for each store location, based on a 'customer.satisfaction' field in each sale document. Only accept satisfaction ratings that are greater than or equal to 1."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MatchOperation:"})," Filter documents with customer.satisfaction greater than or equal to 1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and calculate the average satisfaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Project the results to format the output."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=average-customer-satisfaction\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-3-average-price-of-items-per-store",children:"Question 3: Average Price of Items per Store"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the average price of items sold per store and return a result that includes the store's name (or ID) and the average price."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnwindOperation:"})," Unwind the items array to process each item separately."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and calculate the average price of items."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=average-item-price-per-store\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-4-number-of-distinct-customers",children:"Question 4: Number of Distinct Customers"}),"\n",(0,s.jsx)(n.p,{children:"Count the number of distinct customers and return a result that includes the identifier for grouping and the count of customers."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and collect unique customers using addToSet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Project the size of the unique customers set."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=count-distinct-customers\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-5-total-sales-by-day-of-the-week",children:"Question 5: Total Sales by Day of the Week"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the total sales grouped by each day of the week and return a result that includes the day's name (or ID) and the total sales amount."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Project the day of the week from the saleDate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by dayOfWeek and count the total sales."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=total-sales-by-day-of-week\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-6-sum-of-sales-revenue-by-location",children:"Question 6: Sum of Sales Revenue by Location"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the total revenue from sales grouped by each location and return a result that includes the location's name (or ID) and the total revenue. Sort these from highest to lowest."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UnwindOperation:"})," Unwind the items array to process each item separately."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Calculate the total revenue for each item."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and sum the total revenue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Project the final results."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SortOperation:"})," Sort the results by total revenue in descending order."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=revenue-by-location\n"})}),"\n",(0,s.jsx)(n.h2,{id:"question-7-sales-performance-before-and-after-applying-coupons",children:"Question 7: Sales Performance Before and After Applying Coupons"}),"\n",(0,s.jsx)(n.p,{children:"Compare the number of sales transactions with and without coupons at each store location and return a detailed breakdown."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Steps to Implement:"}),(0,s.jsx)("div",{children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GroupOperation:"})," Group by storeLocation and count the sales with and without coupons using conditional operators."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ProjectionOperation:"})," Project the results to format the output."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Combine the operations into an aggregation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Execution:"})," Execute the aggregation and return the results."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"Test with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mvn spring-boot:run -Dspring-boot.run.arguments=sales-performance\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);