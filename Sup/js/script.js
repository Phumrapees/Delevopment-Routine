// --- Data Mockup ---
let customers = [{id:1,name:"John Doe",phone:"123456789",email:"john@example.com",status:"Member"}];
let staff = [{id:1,name:"Alice",position:"Server",branch:"Main"}];
let menu = [{id:1,name:"Spaghetti",category:"Main",price:10}];
let tables = [{id:1,number:1,status:"Available"},{id:2,number:2,status:"Reserved"}];
let orders = [{id:1,table:1,customer:"John Doe",items:"Spaghetti x2",status:"Pending"}];
let bills = [{id:1,orderId:1,total:20,status:"Unpaid"}];

// --- Common Functions ---
function renderTable(data, tableId){
  const tbody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  if(!tbody) return;
  tbody.innerHTML="";
  data.forEach(item=>{
    let row = tbody.insertRow();
    Object.values(item).forEach(val=>{ let cell = row.insertCell(); cell.innerText=val; });
    let actionCell = row.insertCell();
    actionCell.innerHTML=`<button class="edit-btn" onclick="editItem('${tableId}',${item.id})">Edit</button>
                          <button class="delete-btn" onclick="deleteItem('${tableId}',${item.id})">Delete</button>`;
  });
}

function showSection(section){
  document.querySelectorAll('.section').forEach(s=>s.style.display='none');
  const el = document.getElementById(section);
  if(el) el.style.display='block';
  if(section==='customers') renderTable(customers,'customerTable');
  if(section==='staff') renderTable(staff,'staffTable');
  if(section==='menu') renderTable(menu,'menuTable');
  if(section==='tables') renderTable(tables,'tableTable');
  if(section==='orders') renderTable(orders,'orderTable');
  if(section==='bills') renderTable(bills,'billTable');
}

// --- CRUD Functions ---
function addCustomer(){ let name=prompt("Name"),phone=prompt("Phone"),email=prompt("Email"),status=prompt("Status"); if(name){customers.push({id:customers.length+1,name,phone,email,status}); renderTable(customers,'customerTable');}}
function addStaff(){ let name=prompt("Name"),position=prompt("Position"),branch=prompt("Branch"); if(name){staff.push({id:staff.length+1,name,position,branch}); renderTable(staff,'staffTable');}}
function addMenu(){ let name=prompt("Name"),category=prompt("Category"),price=prompt("Price"); if(name){menu.push({id:menu.length+1,name,category,price}); renderTable(menu,'menuTable');}}
function addTable(){ let number=prompt("Table Number"),status=prompt("Status"); if(number){tables.push({id:tables.length+1,number,status}); renderTable(tables,'tableTable');}}
function addOrder(){ let table=prompt("Table ID"),customer=prompt("Customer"),items=prompt("Items"),status=prompt("Status"); if(table){orders.push({id:orders.length+1,table,customer,items,status}); renderTable(orders,'orderTable');}}
function addBill(){ let orderId=prompt("Order ID"),total=prompt("Total"),status=prompt("Status"); if(orderId){bills.push({id:bills.length+1,orderId,total,status}); renderTable(bills,'billTable');}}

// --- Edit / Delete ---
function editItem(tableId,id){ alert("Edit "+tableId+" ID "+id+" (mockup)"); }
function deleteItem(tableId,id){ 
  if(confirm("Delete item?")){
    if(tableId==='customerTable') customers=customers.filter(c=>c.id!==id);
    if(tableId==='staffTable') staff=staff.filter(s=>s.id!==id);
    if(tableId==='menuTable') menu=menu.filter(m=>m.id!==id);
    if(tableId==='tableTable') tables=tables.filter(t=>t.id!==id);
    if(tableId==='orderTable') orders=orders.filter(o=>o.id!==id);
    if(tableId==='billTable') bills=bills.filter(b=>b.id!==id);
    renderTable(tableId==='customerTable'?customers:
                tableId==='staffTable'?staff:
                tableId==='menuTable'?menu:
                tableId==='tableTable'?tables:
                tableId==='orderTable'?orders:bills,tableId);
  }
}
