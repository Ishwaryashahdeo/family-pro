name_of_the_student_array=[];

function submit()
{ 
    var display__name=[];

    for(j=1; j <=4;j++)
    {

    var student=document.getElementById("name_of_the_student_"+j).value;
    console.log(student);
    name_of_the_student_array.push(student);
    }
    

var length=name_of_the_student_array.length;
console.log(length);
console.log(name_of_the_student_array);


for(k=0; k <=length;k++)
{
   display__name.push("<H4> name-"+ name_of_the_student_array [k]+"</h4>");
   console.log(display__name);





document.getElementById("display_n++-ame_with_commas").innerHTML=display__name;
}
}
