var array=new Array();
array[0]="Meena";
array[1]="Jashu";
array[2]="Jaanu";
array[3]="jimmy";
array[4]="Anu";
array[5]="Arpita";
array[6]="Akshay";
array[7]="Jashu";
array[8]="Jaashmi";
array[9]="jishu";

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element[0]==='j' || element[0]==='J'){
        console.log('Goodbye '+element);
    }
    else{
        console.log('Hello '+element);
    }
    
}