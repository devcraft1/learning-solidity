pragma solidity >=0.6.0 <0.7.0;

contract Schedules {

   enum State {
       work, home, field
   }
   
   State internal state;
   
   function setToWork() public{
       state = State.work;
   }
   
    function setToHome() public{
       state = State.home;
   }
   
     function setToField() public{
       state = State.field;
   }
 
   
   function checkState() public view returns(string memory){
       if(state == State.work){
           return "at work";
       }else if( state == State.home){
           return "at home";
       }else if( state == State.field){
           return "at field";
       }else return "Task not set";
       }
}
