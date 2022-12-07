var array=new Array();
array[0]="Yaakov";
array[1]="John";
array[2]="Jen";
array[3]="Jason";
array[4]="Jason";
array[5]="Paul";
array[6]="Frank";
array[7]="Paula";
array[8]="Laurami";
array[9]="Jim";

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element[0]==='j' || element[0]==='J'){
        console.log('Goodbye '+element);
    }
    else{
        console.log('Hello '+element);
    }
    
}