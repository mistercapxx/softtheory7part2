enum UserRole {
    CEO = "ceo",
    CTO = "cto",
    SUBORDINATE = "inferior-person",
  }
  
  type User = {
    firstName: string;
    age: number;
    isNice: boolean;
    role: UserRole;
    skills: string[];
    friends?: User[];
  }
  
  const user = {
    firstName: "Pat",
    age: 23,
    isNice: false,
    role: UserRole.CTO, // равняется "cto"
    skills: ["HTML", "CSS", "jQuery"],
  }

  function fireUser(firstName: string, age: number, isNice: boolean) {
    // ...
  }

  function fireUser1({ firstName, age, isNice }: {
    firstName: string;
    age: number;
    isNice: boolean;
  }) {
    // ...
  }

  type User1 = {
    firstName: string;
    age: number;
    role: UserRole;
  }
  
  function fireUser2({ firstName, age, role }: User1) {
    // ...
  }
  const fireUser3 = (firstName: string, age: number, role: UserRole): User1 => {
    // ...
    return { firstName, age, role };
  }

