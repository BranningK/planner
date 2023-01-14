var tasks = []

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
}); 

//Displays the current date in the header
document.getElementById('currentDay').textContent = dayjs().format('dddd, MMMM D, YYYY');

//Adds event listener to all save buttons
$( ".saveBtn" ).click(function() {
  console.log( "Saving..." );
  saveTask();
});

function saveTask() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("Tasks", JSON.stringify(tasks));
}

// Add submit event to form
$( ".saveBtn" ).click(function(event) {
  event.preventDefault();

  var taskText = taskInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (taskText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  tasks.push(taskText);
  taskInput.value = "";

  // Store updated todos in localStorage, re-render the list
  saveTask();
});

// The following function renders items in a todo list as <li> elements
function renderTasks() {
  preventDefault()
  // Clear todoList element and update todoCountSpan
  tasks.innerHTML = "";
  tasksCountSpan.textContent = tasks.length;

  // Render a new li for each todo
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];

    var li = document.createElement("li");
    li.textContent = task;
    li.setAttribute("data-index", i);


    li.appendChild(button);
    todoList.appendChild(li);
  }
}