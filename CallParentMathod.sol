pragma solidity ^0.8.0;

interface vehicle{
    event Log(string);
    function service() external virtual;
}

contract car is vehicle{
    function service() override public{
        emit Log("car.service");
    }
}
contract Truck is vehicle{
    function service() override public{
        emit Log("Truck.service");
    }
}
contract MBike is vehicle{
    function service() override public{
        emit Log("MBike.service");
    }
}
contract Mehran is car{
    function service() override public{
        emit Log("car.service");
    }
}
contract Hino is Truck{
    function service() override public{
        emit Log("car.service");
    }
}
contract Honda is MBike{
    function service() override public{
        emit Log("car.service");
    }
}
contract ServiceCenter{
    // method overloading
    function DoService(car aCar) public{
        aCar.service();
    }
    function DoService(Truck bTruck) public{
        bTruck.service();
    }
    function DoService(MBike cMBike) public{
        cMBike.service();
    }
}