// Name: Syed Amir Shah Hamdani
// Roll No: PIAIC69714
// BCC Assignment No: 3
// Create a token based on ERC20 which is buyable. Following features should present;

// 1. Anyone can get the token by paying against ether
// 2. Add fallback payable method to Issue token based on Ether received. Say 1 Ether = 100 tokens.
// 3. There should be an additional method to adjust the price that allows the owner to adjust the price.

pragma solidity ^0.8.0;

interface ERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    // This is check that the person who give Approval to transfer token from.
    // How many Approval token are left in account.
    function approve(address spender, uint256 amount) external returns (bool);

    // This is Approval to transfer certain amount of token from your account to another person account.
    // Your account to other someone account else;
    function transferFrom(address spender, address recipient, uint256 amount) external returns (bool);

    // spender will be use the function  transferFrom for transfer amount;
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract tokenPIAIC is ERC20 {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    address public owner;

    string public name;
    string public symbol;
    uint256 public decimals;

    constructor() public{
        name = "Token made by Hamdani";
        symbol = "SASH";
        decimals = 18;
        owner = msg.sender;

        _totalSupply = 1000 * 10**decimals;
        _balances[owner] = _totalSupply;

        emit Transfer(address(this), owner, _totalSupply);
    }
     // 1 ether=100 token
    // 1 wei=100 Token smalest unit
    uint256 public wei_equals=100;
    
    
    // There should be an additional method to adjust the price that allows the owner to adjust the price.
    function set_token_Price(uint256 _wei_equals) external returns(uint256){
        require(msg.sender==owner,"Only owner can set the price");
        wei_equals=_wei_equals;
        return wei_equals;
    }
    // . Anyone can get the token by paying against ether
     function Buy_token() public payable returns(bool){
         address buyer=msg.sender;
         uint256 amount=msg.value*wei_equals;
         require(buyer!=address(0),"address should not be 0");
         require(_balances[owner]>amount,"transfer amount execdes balances");
         
         _balances[owner]=_balances[owner]-amount;
         
         _balances[buyer]=_balances[buyer]+amount;
         
         emit Transfer(owner,buyer,amount);
         return true;
     }
    //   Add fallback payable method to Issue token based on Ether received. Say 1 Ether = 100 tokens.
    fallback() external payable{
        }
    function totalSupply() public view override returns(uint256){
        return _totalSupply;
    }
     function balanceOf(address account) public override view returns(uint256){
         return _balances[account];
     }
     function transfer(address recipient,uint256 amount) public virtual override returns(bool){
         address sender=msg.sender;
         require(sender!=address(0),"address should not be 0");
         require(recipient!=address(0),"address should not be 0");
         require(_balances[sender]>amount,"transfer amount execdes balances");
         
         _balances[sender]=_balances[sender]-amount;
         
         _balances[recipient]=_balances[recipient]+amount;
         
         emit Transfer(sender,recipient,amount);
         return true;
     }
      function allowance(address owner,address spender) public view virtual override returns(uint256){
          return _allowances[owner][spender];
      }
      
       function approve(address spender,uint256 amount) public virtual override returns(bool){
           address tokenOwner=msg.sender;
           require(tokenOwner!=address(0),"approve from the zero address");
           require(spender!=address(0),"Approve from the zero address");
           
           _allowances[tokenOwner][spender]=amount;
           emit Approval(tokenOwner,spender,amount);
           return true;
           
       }
       
       function transferFrom(address tokenOwner,address recipient,uint256 amount) public virtual override returns(bool){
       address spender=msg.sender;
       uint256 _allowance=_allowances[tokenOwner][spender];
       require(_allowance>amount,"Transfer amount execdes allowance");
           _allowance=_allowance-amount;
           _balances[tokenOwner]=_balances[tokenOwner]-amount;
           _balances[recipient]=_balances[recipient]+amount;
             emit Transfer(tokenOwner,recipient,amount);
             _allowances[tokenOwner][spender]=_allowance;
             emit Approval(tokenOwner,recipient,amount);
         return true;
           
       }
}
// Name: Syed Amir Shah Hamdani
// Roll No: PIAIC69714
// BCC Assignment No: 3