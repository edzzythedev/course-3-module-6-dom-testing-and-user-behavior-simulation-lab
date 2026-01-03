// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// Function to add an element to the DOM
function addElementToDOM(elementId, content) {
  // Check if element already exists
  let element = document.getElementById(elementId);
  
  // If element doesn't exist, create it
  if (!element) {
    element = document.createElement('div');
    element.id = elementId;
    document.body.appendChild(element);
  }
  
  // Set the content
  element.textContent = content;
}

// Function to remove an element from the DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

// Function to simulate a button click and update the DOM
function simulateClick(elementId, content) {
  // Get or create the element
  let element = document.getElementById(elementId);
  if (!element) {
    element = document.createElement('div');
    element.id = elementId;
    document.body.appendChild(element);
  }
  
  // Create a button if it doesn't exist
  let button = element.querySelector('button');
  if (!button) {
    button = document.createElement('button');
    button.textContent = 'Click me';
    element.appendChild(button);
  }
  
  // Add click event listener
  button.addEventListener('click', function() {
    // Create or update content div
    let contentDiv = element.querySelector('.content');
    if (!contentDiv) {
      contentDiv = document.createElement('div');
      contentDiv.className = 'content';
      element.appendChild(contentDiv);
    }
    contentDiv.textContent = content;
  });
  
  // Simulate click
  button.click();
}

// Function to handle form submission
function handleFormSubmit(formId, contentElementId) {
  // Get the form
  const form = document.getElementById(formId);
  if (!form) {
    // Create form if it doesn't exist
    const newForm = document.createElement('form');
    newForm.id = formId;
    
    // Add input field
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'user-input';
    newForm.appendChild(input);
    
    // Add submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    newForm.appendChild(submitButton);
    
    // Add error message div
    const errorDiv = document.createElement('div');
    errorDiv.id = 'error-message';
    errorDiv.className = 'hidden';
    newForm.appendChild(errorDiv);
    
    document.body.appendChild(newForm);
    
    // Use the newly created form
    form = newForm;
  }
  
  // Get the input and error message elements
  const input = form.querySelector('#user-input') || form.querySelector('input');
  const errorMessage = document.getElementById('error-message');
  
  // Create or get the content element
  let contentElement = document.getElementById(contentElementId);
  if (!contentElement) {
    contentElement = document.createElement('div');
    contentElement.id = contentElementId;
    document.body.appendChild(contentElement);
  }
  
  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Check if input is empty
    if (!input.value.trim()) {
      // Show error message
      errorMessage.textContent = 'Input cannot be empty';
      errorMessage.classList.remove('hidden');
    } else {
      // Hide error message if it was shown
      errorMessage.classList.add('hidden');
      
      // Update content element
      contentElement.textContent = input.value;
    }
  });
  
  // Simulate form submission
  const submitEvent = new Event('submit', { cancelable: true });
  form.dispatchEvent(submitEvent);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
  };
}