new Vue({
    el : "#app",
    data : {
        monsterHeal : 100,
        userHeal : 100,
        countattack:2,
        countheart:2,
        show : false,
        showoyun1 :false,
        show2 : false,
        showcan: false,
        isActive: false,
        isActive2: false,
        isActiveattack: false,
        result:false,
        resultm:0,
        resultu:0,
        dcontinue:false,
        aktivet:true,
        time:false,
        link:"https://yuptechnology.com/",
        counttime:5,
        melumat:false,
        welcome:true,

       
    },

methods : {
  yeniOyun(){
    this.userHeal = 100;
    this.monsterHeal=100;
    this.isActive=false;
    this.isActive2=false;
    this.isActiveattack=false;
    this.showoyun1=true;
    this.countattack=2;
    this.countheart=2;
    this.result=false;
    this.resultm=0;
    this.resultu=0;
    this.dcontinue=false;
    this.melumat=true;
    this.welcome=false;
    
  },
  AAktivet(){
    this.time=true;
    this.showoyun1=false;
    this.countattack++;
    this.aktivet=true;
    this.counttime--;

    // if(counttime>0){
    //   setTimeout(() => {
    //     this.counttime--;
    //   }, 1000);
    //   // this.counttime;
    // }
    // else if(counttime=0){
    //   this.aktivet=true;
    //   this.time=false;
    // }
    
    // if(counttime>0){
    //   this.counttime--;
    //   return;
    // }
    
    // setTimeout(() => {
      
    // }, 4000);
    
    setTimeout(() => {
      this.time=false;
      this.isActive = false;
      this.showoyun1=false;
      
    }, 5000);

   
  }
  ,

  Ddavam(){
    this.showoyun1=false;
    this.userHeal = 100;
    this.monsterHeal=100;
    // console.log(this.monsterHeal.value);
    this.aktivet=true;
    this.isActive=false;
    this.isActive2=false;
    this.isActiveattack=false;
    this.countattack=2;
    this.countheart=2;
    this.result=false;
    this.dcontinue=false;
  }
  ,
  
    attack(){
      let point = Math.round(Math.random() * 10 );
      this.monsterHeal -= point;
      let point2 = Math.round(Math.random() * 15 );
      this.userHeal -= point2;
      this.showcan=true;
      this.showoyun1=false;
    },
    strongAttack(){
        let point = Math.round(Math.random() * 25 );
        this.monsterHeal -= point;
        let point2 = Math.round(Math.random() * 15 );
        this.showoyun1=false;
        this.userHeal -= point2;
        this.countattack--;
        console.log(this.countattack);
    },
    heart(){
        let point2 = Math.round(Math.random() * 30 );
        this.userHeal += point2;
        this.countheart--;
        this.showoyun1=false;
    },
    leave(){
        // this.userHeal = 0;
        this.show=false;
        this.showoyun1=true;
        this.showcan=false;
        this.aktivet=true;
        this.melumat=false;
        this.result=false;
        this.welcome=true;
        this.dcontinue=false;
        this.time=false;
    }
},

watch : {
  counttime(value){
    if(value <= 0){
      this.aktivet=true;
      this.time=false;
    }
  }
  ,
    monsterHeal(value){
       if(value <= 0){
          this.resultu++;
           this.monsterHeal = 0;
           this.showoyun1=false;
           this.show=true;
           
           this.aktivet=true;
           Swal.fire({
            title: 'Siz Uddunuz',
            text: "Yeni oyuna baslamaq isteyirsinizmi?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Beli, Yeni Oyun!',
            cancelButtonText: "Xeyr"
            
          }).then((result) => {
            if (result.isConfirmed) {
                this.userHeal = 100;
                this.monsterHeal = 100;
                this.showoyun1= false;
                this.showcan =false;
                this.isActiveattack= false;
                this.isActive2=false;
                this.isActive=false;
                this.countattack=2;
                this.countheart=2;
                this.result=true;
                this.resultu=0;
                this.aktivet=true;
                this.result=false;
                this.dcontinue=false;
              Swal.fire(
                'Okey!',
                'Yeni Oyun Basladi',
                'success'
              )
            }
            else{
              this.isActiveattack= true;
              this.isActive2=true;
              this.isActive=true;
              this.showcan =false;
              this.showoyun1= false;
              this.result=true;
              this.dcontinue=true;
              this.aktivet=true;
              this.resultu--;
              

            }
          })
       }
    },

    countattack(value){
      if(value < 1){
this.countattack = 0;
this.showoyun1= false;
this.isActive=true;
this.aktivet=false;
      }
      
    },
    countheart(value){
      if(value < 1){
this.countheart = 0;
this.showoyun1=false;
this.isActive2=true;
      }
    }
    ,
    userHeal(value){
        if(value <= 0){
          this.resultm++;
            this.userHeal = 0;          
            this.showoyun1=false;
            this.show=true;
                        
            Swal.fire({
                title: 'Siz Uduzdunuz',
                text: "Yeni oyuna baslamaq isteyirsinizmi?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Beli, Yeni Oyun!',
                cancelButtonText: "Xeyr"
              }).then((result) => {
                if (result.isConfirmed) {
                    this.userHeal = 100;
                    this.monsterHeal = 100;
                    this.showoyun1= false;
                    this.showcan =false;
                    this.isActiveattack= false;
                    this.isActive2=false;
                    this.isActive=false;
                    this.countattack=2;
                    this.countheart=2;
                    this.resultm=0;
                    this.aktivet=true;
                    this.result=false;
                    this.dcontinue=false;
                    
                    
                  Swal.fire(
                    'Okey!',
                    'Yeni Oyun Basladi',
                    'success'
                  )
                }
                else{
                  this.isActiveattack= true;
                  this.isActive2=true;
                  this.isActive=true;
                  this.showcan =false;
                  this.showoyun1= false;
                  this.result=true;
                  this.resultm--;
                  this.Davam=true;
                  this.dcontinue=true;
                  this.aktivet=true;

                }
              })
            
        }else if(value >= 100){
            this.userHeal = 100;
        }
    }
}


})