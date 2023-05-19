// // ---------------------------------------------------------------
// // DEMO 1: Long task
// const observer = new PerformanceObserver(handlePerformanceEntries);

// function handlePerformanceEntries(list) {
//   for (const entry of list.getEntries()) {
//     if (entry.entryType === 'longtask') {
//         console.log('Long Task:', entry);
//         // name: browsing context or frame that can be attributed 
//         //       to the long task
//         // attribution: the work involved in a long task and its 
//         //              associate frame context
//     }
//   }
// }

// observer.observe({ entryTypes: ['longtask'] });

// function triggerLongTask(duration) {
//   const startTime = performance.now();
//   while (performance.now() - startTime < duration) {
//     // Busy loop for the specified duration
//   }
// }

// function performAction() {
//   const actionOutput = document.getElementById('action-output');
//   actionOutput.textContent = 'Action performed at ' + new Date().toLocaleTimeString();
// }

// const longTaskButton = document.getElementById('trigger-longtask');
// longTaskButton.addEventListener('click', () => triggerLongTask(2000));

// const actionButton = document.getElementById('action-button');
// actionButton.addEventListener('click', performAction);
// // ---------------------------------------------------------------


// // ---------------------------------------------------------------
// // DEMO 2: Layout shift
// const observer = new PerformanceObserver(handlePerformanceEntries);

// function handlePerformanceEntries(list) {
//   for (const entry of list.getEntries()) {
//     if (entry.entryType === 'layout-shift') {
//         console.log('Layout Shift:', entry);
//         // value: impact fraction (fraction of the viewport that was shifted) 
//         //        multiplied by the distance fraction (distance moved as a 
//         //        fraction of viewport).
//     }
//   }
// }

// observer.observe({ entryTypes: ['layout-shift'] });

// function insertImage() {
//     const imageContainer = document.getElementById('image-container');
//     const newImage = document.createElement('img');
//     newImage.src = 'image3.jpg';
//     newImage.alt = 'Image 3';
//     newImage.width = 100;
//     imageContainer.insertBefore(newImage, imageContainer.firstChild);
// }

// const insertImageButton = document.getElementById('insert-image');
// insertImageButton.addEventListener('click', insertImage);
// // // ---------------------------------------------------------------


// // ---------------------------------------------------------------
// // DEMO 3: Element timing
// const observer = new PerformanceObserver(handlePerformanceEntries);

// function handlePerformanceEntries(list) {
//   for (const entry of list.getEntries()) {
//     if (entry.entryType === 'element') {
//         console.log('Element Timing:', entry);
//     }
//   }
// }

// observer.observe({ entryTypes: ['element'] });

// // ---------------------------------------------------------------


// // ---------------------------------------------------------------
// // Demo 4: PerformanceMark and PerformanceMeasure
// const observer = new PerformanceObserver(handlePerformanceEntries);

// function handlePerformanceEntries(list) {
//   for (const entry of list.getEntries()) {
//     if (entry.entryType === 'mark' || entry.entryType === 'measure') {
//         console.log(entry.entryType, ': ', entry);
//     }
//   }
// }

// observer.observe({ entryTypes: ['mark', 'measure'] });

// async function fetchData() {
//     performance.mark('fetchDataStart');
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     performance.mark('fetchDataEnd');
//     performance.measure('Fetch Data Duration', 'fetchDataStart', 'fetchDataEnd');
//     return data;
//   }
  
//   function renderData(data) {
//     performance.mark('renderDataStart');
//     const dataContainer = document.getElementById('data-container');
//     dataContainer.innerHTML = '';
  
//     data.slice(0, 10).forEach(item => {
//       const post = document.createElement('div');
//       post.className = 'post';
//       post.innerHTML = `
//         <h3>${item.title}</h3>
//         <p>${item.body}</p>
//       `;
//       dataContainer.appendChild(post);
//     });
  
//     performance.mark('renderDataEnd');
//     performance.measure('Render Data Duration', 'renderDataStart', 'renderDataEnd');
//   }
  
//   async function fetchDataAndRender() {
//     const data = await fetchData();
//     renderData(data);
//   }
  
//   const fetchDataButton = document.getElementById('fetch-data');
//   fetchDataButton.addEventListener('click', fetchDataAndRender);
// // ---------------------------------------------------------------