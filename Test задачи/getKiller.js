function getKiller(suspects, dead) {
    let control = 0;
  
    for (const nameMorder in suspects) {
      for (let i = 0; i < suspects[nameMorder].length; i++) {
        for (const nameDead of dead) {
          if (nameDead === suspects[nameMorder][i]) control++;
        }
        if (control === dead.length) return nameMorder;
      }
    }
  }