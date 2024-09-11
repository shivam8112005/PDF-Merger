//having error in this 3 lines
//import PDFMerger from 'pdf-merger-js';
// const PDFMerger= require('pdf-merger-js');

// var merger = new PDFMerger();

const mergePdfs=async (p1, p2) => {
    //first 2 lines are added by chatgpt
    const PDFMerger = (await import('pdf-merger-js')).default;
    var merger = new PDFMerger();
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);
 // await merger.add('surat.pdf', 2); // merge only page 2
//   await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
//   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
//   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
//   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

  // Set metadata // we dont want this
//   await merger.setMetadata({
//     producer: "pdf-merger-js based script",
//     author: "John Doe",
//     creator: "John Doe",
//     title: "My live as John Doe"
//   });
let d=new Date().getTime();

  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
module.exports={mergePdfs}