'use strict';


        
     angular.module('myapp',[]) 
        .controller('menuController',function() {
         this.tab=1; 
            this.filtText ='';
         var dishes =[
                 { 
       
       name :'bla bla bla', 
       class :'appetizer' ,
       section :'a',
       commemnt : ''
       },
                 
                         { 
       
       name :'la la la', 
       class :'appetizer' , 
       section :'b',
       commemnt : ''
       },
                         { 
       
       name :'bla bla bla', 
       class :'desserts' ,
       section :'c',
       commemnt : ''
       }
                 
                 
                 
                 ];
            this.dishes = dishes;
            this.select = function(setTab)
            {
                
                this.tab ="setTab";
           
            if(setTab === 2)
                {
                    
                    
                    this.filtText ="appetizer";
                }
            else if(setTab === 3)
                {
                    
                    
                    this.filtText ="mains";
                }
           
                else if(setTab === 4)
                {
                    
                    
                    this.filtText ="dessert";
                }
            else
                {
                    
                    
                    this.filtText ="";
                }
            }
            
            this.isSelected = function(checkTab)
            {
                
             return(this.tab === checktab); 
            }
            
            
        });
