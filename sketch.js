function random_hah() {
  let x="0123456789abcdef",hah="0x";
  for(let i=64;i>0;--i)hah+=x[Math.floor(Math.random() * x.length)];
  return hah;
}
let hash = random_hah();
tokenId=(Math.random()*300)|0;
let doneflag=false;

let rngt,rngs,S=Uint32Array.from([0,1,rngs=rngt=2,3].map(i=>parseInt(hash.substr(i*8+5,8),16)));R=(a=1)=>a*(rngt=S[3],S[3]=S[2],S[2]=S[1],S[1]=rngs=S[0],rngt^=rngt<<11,S[0]^=(rngt^rngt>>>8)^(rngs>>>19),S[0]/2**32);let mtN=parseInt(tokenId)%1000000;RT=(a=1)=>R(a)-R(a);RV=(v)=>v[R(v.length)|0];C=(a)=>R()<a;M=(p,a,b)=>a+(b-a)*p;psn=(x)=>{let os=pPR,out=1;if(x<0||x>1)out=0;if(x<os)out=Math.sin(Math.PI/2*x/os)**2;if(x>(1-os))out=1-Math.sin(Math.PI/2*(x-(1-os))/os)**2;return out};rfa=(a,i)=>array.splice(a.indexOf(i),1);acv=(n,c)=>{for(let i=0;i<n;i++){cv.push(c)}};let cSH=[[6,50,52],[25,55,53],[45,48,54],[106,31,41],[220,37,47],[244,27,49]],cBG=[[44,14,81],[0,0,10]],cv=[],ocv=[10,[0,2,4],10,[0,2,3,4],7,[0,1,2,3,4,5],3,[0,1,2],1,[0,1,3],3,[0,1,4],3,[0,1,5],3,[0,3,4],3,[0,1],3,[0,2],1,[0,3],5,[0,4],2,[0,5],2,[1,2],2,[1,3],3,[1,4],1,[1,5],5,[2,3],7,[2,4],2,[2,5],5,[3,4],1,[3,5],1,[4,5]],cH=[0,1,2,3,4,5],cN=3+R(2)|0,ci=[];for(let i=0;i<cN;i++){let cn=RV(cH);ci.push(cn);cH.splice(cH.indexOf(cn),1);}ocv.push(25);ocv.push(ci);for(let i=0;i<ocv.length;i+=2)acv(ocv[i],ocv[i+1]);let gr,wc,hc,w,h,p,s3=3**.5,lv=mtN<15?0:mtN<45?1:mtN<225?2:3,pRC=C(.5),pSO=C(.5),pCT=.9+RT(.1)-.6*R()*R(),pCH=.66+RT(.5),pSM=1-R()*R()*R(),pSS=1-R()*R()*R(),pGM=R(),pOC=(lv==1)?1:(.3+RT(.3)),pBB=C(.05)?0:C(.05)?1:(R()*R(.5)),pCM=C(.5),psS=.25+R(1.5)*R(),psV=R(2)*R(),psT=R(.08),pL1=R(2)*R(),pL2=R(.05)*R(),pL3=RT(.3),pFC=(lv==1)?0:R(),pPR=.1+R()*R(.4),pSG=C(.5)?1:(1-R()*R()),pSG2=R()*R()*R(),pPS=R(),pKP=.03+Math.abs(RT()),pOL=3*R()*R(),pDS=C(.5),pCD=C(.03)?(1+R(3)|0):0,p1O=RT(.3),p1V=R(.3),pBL=R()*R(),p3S=C(.5),pCG=C(.2),pBK=C(.5)?(.0005+R()*R(.002)):0,pCGxy=RV(4)|0,pFM=C(.8)?0:C(.5)?1:2,pFMv=R(),bgCi=(lv==0)?((R(6)|0)+2):C(.5)?1:0,hn=pRC?.75:4/3,pxn=(.05)*(pRC?.75:1),Nm=(1+R(20)*R())|0,Nx=Nm*(pRC?48:36),twn=(1-2*pxn)/Nx,thn=2/s3*twn,Ny=Math.round((hn-2*pxn)/thn*2)+1,pyn=((pRC?3/4:4/3)-(Ny-1)/2*thn)/2,filled=[],item=[],itemo=[],colS=[];
if(bgCi>=2){colB=cSH[bgCi-2];colF=RV(cBG);colS=cBG;if(bgCi==4)colF=cBG[1];}else{colB=cBG[bgCi];colF=cBG[(bgCi+1)%2];let cvp=RV(cv);if(lv==3)colS=[RV(cSH)];else for(let i=0;i<cvp.length;i++)colS[i]=cSH[cvp[i]];}for(let i=0;i<Nx*Ny;i++)filled[i]=0;let sMX=(Nx*(pRC?.65:1)*(pKP<=.1?.9:(.5+R(.5)*R())))|0,sMN=1+((sMX-1)*(R()*R(.2)))|0,Nk=2000+R(10000),sv=[sMX];for(let i=0;i<sMX-sMN;i++)sv.push(sMX-i-1);chsc=(x)=>{let cg=colS.length>=3;return C(pOC)?(C(pBB)?colB:colF):(C(pCG)&&cg)?colS[colS.length*x|0]:RV(colS)};let kflag=0;for(let k=0;k<Nk;k++){if(kflag==0)k=0;let sh=C(pCT)?0:(C(pCH)?1:2),ss=pDS?sh:(sh==0?(C(pCT)?0:1):(C(pCH)?1:2)),s=sv[((k/Nk)**pKP*sv.length)|0],strim=sh==0?0:(s/3)|0,i=R(Nx)|0,j=((C(.05)&&pCD==0)?(R(Ny)):(s+R(Ny-2*s)))|0,dir=((j+i+pSO)%2)*2-1,ind=[];if((i+(s-1)>=Nx&&dir==1)||(i-(s-1)<0&&dir==-1)||(j-(s-1)<=0&&(j>0&&j<Ny-1))||(j+(s-1)>=Ny-1&&(j>0&&j<Ny-1)))continue;for(let si=strim;si<s;si++){let sm=(si>s-strim-1)?(2*(si-(s-strim-1))-1):0;for(let sj=-si+sm;sj<=si-sm;sj++){let iN=(i+si*dir),jN=(j+sj);if(jN<0||jN>=Ny||iN<0||iN>=Nx)continue;ind.push(jN*Nx+iN);}}let flag=0;if(C(1-pBK)){for(let j=0;j<ind.length;j++)if(filled[ind[j]]>0)flag=1};if(flag)continue;for(let j=0;j<ind.length;j++)filled[ind[j]]=1;let xt=pxn+i*twn+(dir==-1?twn:0)+dir*s*thn*s3/3,yt=pyn+j*thn/2,tb=(j==0)?1:(j==Ny-1)?2:0,tL=!(tb==1&&dir==-1)&&!(tb==2&&dir==1),tR=!(tb==1&&dir==1)&&!(tb==2&&dir==-1),xm=(xt-pxn/2)/(1-pxn),ym=(yt-pxn/2)/((pRC?(3/4):(4/3))-pxn),xyv=[xm,1-xm,ym,1-ym],xg=xyv[pCGxy],cML=chsc(xg),cSL=chsc(xg),cMR=chsc(xg),cSR=chsc(xg);if(pCM){cSR=[...cML];cSL=[...cMR];}dM=[C(Math.min(psn(xm),psn(ym)))&&C(pSM),C(Math.min(psn(xm),psn(ym)))&&C(pSM)];cM=[cMR,cML];dS=[C(Math.min(psn(xm),psn(ym)))&&C(pSS),C(Math.min(psn(xm),psn(ym)))&&C(pSS)];cS=[cSR,cSL];let ang=(tL==0||tR==0)?0:pCD>0?(pCD*2*Math.PI/3):2*Math.PI/3*(R(3)|0);kflag=1;item.push([xt,yt,dir,s,sh,ss,[tR,tL],dM,cM,dS,cS,ang]);}

setup=()=>{let wh=windowHeight,ww=windowWidth;wh>=ww/.75?(wc=ww):(wc=wh*.75);hc=wc/.75;p=wc/1000;pRC?(w=hc,h=wc):(w=wc,h=hc);can=createCanvas(wc,hc);gr=createGraphics(w,h);colorMode(HSL);gr.colorMode(HSL);strokeCap(SQUARE);gr.strokeCap(SQUARE);let pd=pixelDensity();if(hc<2048)pd=ceil(2048/hc);pixelDensity(pd);gr.pixelDensity(pd);}

draw=()=>{let fc=frameCount,i=(fc-1)%item.length,l=(fc-1)/item.length|0;frameRate(10+round(fc/2)+1);let px=pxn*w,py=pyn*w,gw=twn*w,gh=thn*w;if(pRC){translate(wc,0);rotate(PI/2);}if (frameCount==1){background(colB);dtg(px,py,gw,gh,colF);}let v=item[i],xt=v[0]*w,yt=v[1]*w,dir=v[2],s=v[3],sh=v[4],ss=v[5],tM=v[6],dM=v[7],cM=v[8],dS=v[9],cS=v[10],aS=v[11]+((dir==-1)?PI:0);  
if(!(tM[0]==0&&tM[1]==0)){let th=s*gh,xsb=s3/3*th,xst=s3/6*th,yst=th/2,sc0=1,sc1=.45+p1O+RT(p1V),sc2=C(pSG)?sc1:.4+p1O+RT(p1V),sc3=0,scls=[],mFM=(pFM==0)?0:(pFM==1)?1:(C(pFMv)?0:1);if(mFM==0)scls=[[sc0,C(pSG2)?(th-10*p)/th:sc1],[sc2,sc3]];else scls=[[sc0,C(pSG2)?(th-10*p)/th:0]];if(l==0){push();translate(xt,yt);rotate(aS);noFill();for(let sci=0;sci<2;sci++){push();stroke(C(pFC)?RV(colS):colF);strokeWeight(R(pOL*p));let scl=(sci==0)?(1-R(.2)):((sc1+sc2)/2+RT(.2));if(tM[0]&&tM[1]){if(sh==0)triangle(-xsb*scl,0,xst*scl,yst*scl,xst*scl,-yst*scl,1);else if(sh==2)hexagon(scl*1/3*th);else circle(0,0,scl*xsb);}else if(tM[1]&&sh==0)triangle(-xsb*scl,0,xst*scl,0,xst*scl,yst*scl,1);else if(tM[1]&&sh==1)arc(0,0,scl*xsb,scl*xsb,0,PI,CHORD);else if(tM[0]&&sh==0)triangle(-xsb*scl,0,xst*scl,0,xst*scl,-yst*scl,1);else if(tM[0]&&sh==1)arc(0,0,scl*xsb,scl*xsb,PI,2*PI,CHORD);pop();}pop();gr.push();gr.translate(xt,yt);gr.rotate(aS);for(let shi=0;shi<scls.length;shi++){s1=scls[shi][0];s2=scls[shi][1];let shp=shi?ss:sh;for(si=0;si<2;si++){let tdir=si?1:-1,a1=tdir==1?0:PI,a2=tdir==1?PI:2*PI,col=(shi%2==0)?cM[si]:cS[si],gm1=R(pGM);if(tM[si]==0||(dM[si]==0&&shi==0)||(dS[si]==0&&shi==1))continue;gr.push();gr.translate(0,-tdir*.5);createGradient([0,-yst*(1+gm1),0,yst*(1+gm1)],RT(PI),col);gr.strokeWeight(0);if(shp==0)trish([-xsb,xst,xst],[0,tdir*yst,0],s1,s2);else if(shp==1)arcsh((sh==2&&shi==1)?(2/3*th):abs(xsb),a1,a2,s1,s2);else hexsh((1/3*th),a1,s1,s2);gr.pop();ps=C(pPS)&&shi>0;for(let ip=0;ip<1+ps;ip++){gr.push();gr.rotate((R(3)|0)*2*PI/3);gr.stroke(0);gr.erase();let dl=gw*(1+(Nx/50)|0);for(let xl=-xsb;xl<xst-.00001;){gr.stroke(0,ip==0?R(psT):1);gr.strokeWeight(p*(psS+R(psV)));gr.line(xl,-w,xl,w);xl+=ip==0?R(dl/10):dl;}gr.noErase();gr.pop();}image(gr,0,0);gr.clear();}}gr.pop();}if(l==1){push();translate(xt,yt);rotate(aS);for(let si=0;si<2;si++){if(tM[si]==0)continue;let tdir=si?1:-1,a1=tdir==1?0:PI,a2=tdir==1?PI:2*PI,at=abs(xsb);for(let j=0;j<5+R(10);j++){if(sh==0){outline([-xsb,xst,xst],[0,tdir*yst,0],th);}else if(sh==1){outlinec(xsb,a1,a2);}else{push();if(si==0)rotate(PI);let r=1/3*th,xp=[-r*s3/2],yp=[0];for(let a=0;a<3;a++){xp[a+1]=-r*cos(a*PI/3+PI/6);yp[a+1]=r*sin(a*PI/3+PI/6);}xp.push(r*s3/2);yp.push(0);outline(xp,yp,th);pop();}}}pop();}}
if(fc==item.length*2){dtg(px,py,gw,gh,colB);noStroke();for(let i=0;i<10000;i++){push();translate(R(w),R(w*4/3));let col=RV(cBG);fill(...col,R(.02));circle(0,0,R(50*p));pop();push();translate(R(w),R(w*4/3));fill(...col,R(.02));let dp=R(50*p);if (C(.5))rotate(PI+pRC?PI/2:0);triangle(-dp/2,0,dp/2,dp/2,dp/2,-dp/2);pop();}loadPixels();for(let p=0;p<pixels.length;p+=4){dp=RT(12);pixels[p]=pixels[p]+dp;pixels[p+1]=pixels[p+1]+dp;pixels[p+2]=pixels[p+2]+dp;}updatePixels();doneflag=true;noLoop();}}

trish=(x,y,s1,s2)=>{gr.beginShape();for(let i=0;i<x.length;i++)gr.vertex(s1*x[i],s1*y[i]);if(s2>0)for(let i=x.length-1;i>=0;i--)gr.vertex(x[i]*s2,y[i]*s2);gr.endShape();};hexsh=(r,ao,s1,s2)=>{gr.push();gr.rotate(ao);gr.beginShape();gr.vertex(-s1*r*s3/2,0);for(let a=0;a<3;a++)gr.vertex(-s1*r*cos(a*PI/3+PI/6),s1*r*sin(a*PI/3+PI/6));gr.vertex(s1*r*s3/2,0);if(s2>0){gr.vertex(s2*r*s3/2,0);for(let a=2;a>=0;a--)gr.vertex(-s2*r*cos(a*PI/3+PI/6),s2*r*sin(a*PI/3+PI/6));gr.vertex(-s2*r*s3/2,0);}gr.endShape(CLOSE);gr.pop();};arcsh=(r,a1,a2,s1,s2)=>{gr.push();if(s2>0){gr.noFill();gr.strokeWeight(s1*r/2-s2*r/2);r=(r*s1+s2*r)/2;} else r=s1*r;gr.arc(0,0,r,r,a1,a2);gr.pop();};hexagon=(r)=>{beginShape();for(let a=0;a<6;a++)vertex(r*sin(a*PI/3),r*cos(a*PI/3));endShape(CLOSE);};dtg=(px,py,gw,gh,col)=>{noFill();for(let j=-5;j<Ny/Nm+5;j+=1){for(let i=-5;i<Nx/Nm+5;i+=1){let dir=((j+i+pSO)%2),xt=px+i*gw*Nm+gh*s3/(dir?3:6)*Nm,yt=py+j*gh/2*Nm,tb=(j==0)?1:(j==Ny-1)?2:0;push();translate(xt,yt);rotate(PI*(!dir));if(tb==0)rotate(2*PI/3*(R(3)|0));stroke(...col,R(.25));strokeWeight(.5*p);let th=gh*Nm;triangle(-s3/3*th,0,s3/6*th,-th/2,s3/6*th,th/2);pop();}}};createGradient=(p,ang,col)=>{let x1=cos(ang)*p[0]-sin(ang)*p[1],y1=sin(ang)*p[0]+cos(ang)*p[1],x2=cos(ang)*p[2]-sin(ang)*p[3],y2=sin(ang)*p[2]+cos(ang)*p[3],gd=gr.drawingContext.createLinearGradient(x1,y1,x2,y2);gd.addColorStop(0.0,color(0,0,0,1));gd.addColorStop(0.5,color(...col,1));gd.addColorStop(1.0,color(0,0,100,1));gr.drawingContext.fillStyle=gd;gr.drawingContext.strokeStyle=gd;};outline=(xp,yp,dd)=>{for(let i=0;i<xp.length;i++){xp[i]=xp[i]+RT(dd*pL2);yp[i]=yp[i]+RT(dd*pL2);}xp.push(xp[0]);yp.push(yp[0]);push();scale(1+RT(pL3));strokeWeight(R(.75*p));stroke(...RV([colF,colF]),R(.4));for(let i=0;i<xp.length;i++){let p1=-R(pL1)*R(),p2=1+R(pL1)*R();line(M(p1,xp[i],xp[i+1]),(M(p1,yp[i],yp[i+1])),M(p2,xp[i],xp[i+1]),(M(p2,yp[i],yp[i+1])));}pop();};outlinec=(r,a1,a2)=>{push();translate(RT(r*pL2),RT(r*pL2));scale(1-R(pL3));strokeWeight(R(.75*p));stroke(...RV([colF,colF]),R(.4));arc(0,0,r,r,a1+RT(.1),a2+RT(.1));pop();}


let saved = false;
let lastTap = 0;

function doubleTap() {
  if (saved || doneflag==false) {
    return;
  }  
  saved = true;
  save('GivingShapeOOB_'+hash+'.png');
}

// For mobile devices
function touchStarted() {
  let currentTime = millis();
  
  if (currentTime - lastTap < 300) {
    doubleTap();
  } else {
    lastTap = currentTime;
  }
}






