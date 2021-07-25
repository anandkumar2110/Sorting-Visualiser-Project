function swap(el1,el2) {
    const style1 = window.getComputedStyle(el1); 
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height"); 
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2; 
    el2.style.height = transform1;
    } ;


async function merge(left,mid,right)
{
    const subArrayOne = mid - left + 1;
    const subArrayTwo = right - mid;
 
    // Create temp arrays
    let leftArray = [] ;
    let rightArray = [] ;
    
    for (let i = 0; i < subArrayOne; i++)
    {
        let style1 = window.getComputedStyle(arr[left+i]) ;
        leftArray.push(style1.getPropertyValue("height"));

    }
    for (let j = 0; j < subArrayTwo; j++)
    {
        let style2 = window.getComputedStyle(arr[mid+1+j]) ;
        rightArray.push(style2.getPropertyValue("height"));
    }
 
    let indexOfSubArrayOne = 0 ;// Initial index of first sub-array
    let indexOfSubArrayTwo = 0; // Initial index of second sub-array
    let indexOfMergedArray = left; // Initial index of merged array
    // Merge the temp arrays back into array[left..right]
    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
        if (parseFloat(leftArray[indexOfSubArrayOne]) <= parseFloat(rightArray[indexOfSubArrayTwo])) {
            arr[indexOfMergedArray].style.height = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        }
        else {
            arr[indexOfMergedArray].style.height = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }
    // Copy the remaining elements of
    // left[], if there are any
    while (indexOfSubArrayOne < subArrayOne) {
        arr[indexOfMergedArray].style.height = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }
    // Copy the remaining elements of
    // right[], if there are any
    while (indexOfSubArrayTwo < subArrayTwo) {
        arr[indexOfMergedArray].style.height = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }

    return ;
}

    
async function mergeSortUtil(begin,end){
    if(begin>=end)
        return ;

    let mid = begin + Math.floor((end - begin) / 2);

    mergeSortUtil(begin, mid);
    mergeSortUtil(mid + 1, end);
    merge(begin, mid, end);
    return ;
}

async function mergeSort() {
    let i ;
    algo.innerHTML = "MERGE SORT" ;
    for(i=0;i<arr.length;i++)
    {
        swap(arr[i],arr[i]);
    }
    
    mergeSortUtil(0,arr.length-1) ;
} ;

let merg = document.getElementsByClassName("merge-sort") ;



merg[0].addEventListener('click',()=>{
    mergeSort() ;
});