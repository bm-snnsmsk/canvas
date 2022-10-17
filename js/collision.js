let collision = {
    distance : function(circle0, circle1){ // iki dairenin merkezler arası uzaklığı
        let dx = circle1.x - circle0.x ;
        let dy = circle1.y - circle0.y ;
        return Math.sqrt(dx * dx + dy * dy) ;
    },
    distanceXY : function(x0, y0, x1, y1){  // nokta ve dairenin merkezi arası uzaklığı
        let dx = x1 - x0 ;
        let dy = y1 - y0 ;
        return Math.sqrt(dx * dx + dy * dy) ;
    },
    isCircleCircleCollision : function(circle0, circle1){
        return this.distance(circle0, circle1) <= circle0.radius + circle1.radius ;
    },
    isCirclePointCollision : function(x, y, circle){
        return this.distanceXY(x, y, circle.x, circle.y) < circle.radius ;
    },
    isRectPointCollision : function(x, y, rect){
        return this.inRange(x, rect.x, rect.x + rect.width) && 
               this.inRange(y, rect.y, rect.y + rect.height) ;
    },
    isRectRectCollision(rect0, rect1){
        return this.rangeIntersect(rect0.x, rect0.x + rect0.width, rect1.x, rect1.x + rect1.width) && 
               this.rangeIntersect(rect0.y, rect0.y + rect0.height, rect1.y, rect1.y + rect1.height) ;
    },
    inRange : function(value, min, max){
        //kullanıcı negatif yükseklik-genişlik değerleri verirse şayet burdan otomatik olarak müdahale edilmiş oluyor
        return value >= Math.min(min, max) && value <= Math.max(min, max) ;
    },
    rangeIntersect: function(min0, max0, min1, max1){        
        return Math.max(min0, max0) >= Math.min(min1, max1) && 
               Math.min(min0, max0) <= Math.max(min1, max1) ;
    }
}