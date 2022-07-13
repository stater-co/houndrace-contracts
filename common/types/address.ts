const isAlphaNumeric = (str: string): boolean => {
  var code: number, i: number, len: number;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};





type StringOfLength<AccountAddress> = string & {
  StringOfLength: string // this is the phantom type
};

// This is a type guard function which can be used to assert that a string
// is of type StringOfLength<Min,Max>
const isStringOfLength = <>(
  accountAddress: string
): accountAddress is StringOfLength<AccountAddress> => accountAddress.startsWith('0x') && accountAddress.length === 42 && isAlphaNumeric(accountAddress);
    
// type constructor function
export const stringOfLength = <AccountAddress extends string>(
  input: unknown,
  accountAddress: AccountAddress
): StringOfLength<AccountAddress> => {
  if (typeof input !== "string") {
    throw new Error("invalid address");
  }
    
  if (!isStringOfLength(input, accountAddress)) {
    throw new Error("input is not between specified min and max");
  }
    
  return input; // the type of input here is now StringOfLength<Min,Max>
};

// Now we can use our type constructor function
const myString = stringOfLength('hello', 1, 10) // myString has type StringOfLength<1,10>

// the type constructor fails if the input is invalid
stringOfLength('a', 5, 10) // Error: input is not between specified min and max

// The phantom type prevents us from assigning StringOfLength manually like this:
const a: StringOfLength<0, 10> = 'hello' // Type '"hello"' is not assignable to type { StringOfLength: unique symbol }