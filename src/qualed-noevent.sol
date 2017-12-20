pragma solidity ^0.4.17;
contract QuaLed{
    
    struct Student{
        string fname;
        string lname;
        string qual;
        uint year;
        string school;
    }
    
    struct School{
        string school_name;
        string school_loc;
        uint index;
    }
    
    mapping(string => Student) students;
    mapping(address => School) schools;
    address owner;
    address[] schoolArray;

    event savedSchool(
        bool saved
    );
 
     modifier isOwner(){ 
        require(owner == msg.sender);
        _;
    }
    
    // modifier isAllowed(){
    //     require(isNewSchool(msg.sender));
    //     _;
    // }
    
    function QuaLed() public{
        owner = msg.sender;
    }

    function isNewSchool(address _address) private view returns (bool){
        // // check array if empty return false
        // if (schoolArray.length == 0) return true;
        // // check if input address is existing
        // return(schoolArray[schools[_address].index] == _address);
        if(schoolArray.length == 0){
            return true;
        }else{
            if(schoolArray[schools[_address].index] == _address){
                return false;
            }else{
                return true;
            }
        }
    }
    
    function isSchoolAllowed(address _address) private view returns (bool){
        if(schoolArray.length > 0){ // check if school is not empty
            if(schoolArray[schools[_address].index] == _address){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    
    modifier isAllowed(){
        require(isSchoolAllowed(msg.sender));
        _;
    }
    
    function setSchool(address _address, string _school_name, string _school_loc) isOwner public returns (bool){
        require(isNewSchool(_address));
        var new_school = schools[_address];
        new_school.school_name = _school_name;
        new_school.school_loc = _school_loc;
        new_school.index = schoolArray.push(_address) -1;
        return true;
        savedSchool(true);
    }
    
    function getSchool(address _address) public view returns (string, string){
        return(schools[_address].school_name, schools[_address].school_loc);
    }
    
    function setStudent(string _idno, string _fname, string _lname, string _qual, uint _year) isAllowed public returns (bool){
        // require(isSchoolAllowed(msg.sender));
        var new_stud = students[_idno];
        new_stud.fname = _fname;
        new_stud.lname = _lname;
        new_stud.qual = _qual;
        new_stud.year = _year;
        new_stud.school = schools[msg.sender].school_name;
        return true;
   }
   
    function viewStudent(string _idnum) view public returns (string, string, string, string, uint, string){
        return (_idnum, students[_idnum].fname, students[_idnum].lname, students[_idnum].qual, students[_idnum].year, students[_idnum].school);
   }
   
   function updateStudent(string _idnum, string _fname, string _lname, string _qual, uint _year)  isAllowed public returns (bool){
    //   require(isSchoolAllowed(msg.sender));
       var stud = students[_idnum];
       stud.fname = _fname;
       stud.lname = _lname;
       stud.qual = _qual;
       stud.year = _year;
    //   stud.school = schools[msg.sender].school_name;
       return true;
   }
   
   
    
    
    
    
}