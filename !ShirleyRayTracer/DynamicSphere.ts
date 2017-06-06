//C++
/*
 II DynSphere.h
 #ifndef DYN_SPHERE H
 #define DYN_SPHERE H
 #include "Shape.h"
 #include "Vector3.h"
 #include "Ray.h"
 #include "rgb.h"
 class DynSphere : public Shape
 {
 public:
 DynSphere(const Vector3& _ocenter, float _radius,
 const rgb& _color, float mintime, float maxtime);
 4. Viewing
 bool hit(const Ray& r, float tmin, float tmax, float time,
 HitRecord& record)const;
 };
 bool shadowHit(const Ray& r, float tmin, float tmax, float time)
 const; Vector3 getCenter(float time)const;
 Vector3 ocenter;
 float mintime;
 float maxtime;
 float radius;
 rgb color;
 #endif II DYN_SPHERE_H __
 II DynSphere.cc
 #include "DynSphere.h"
 DynSphere::DynSphere(const Vector3& _ocenter, float _radius,
 const rgb& _color, float min_time, float max_time)
 ocenter(_ocenter), radius(_radius), color(_color), mintime(min_time),
 maxtime(max_time) {}
 bool DynSphere::hit(const Ray& r, float tmin, float tmax, float time,
 HitRecord& record) const
 {
 Vector3 new_center = getCenter(time);
 Vector3 temp = r.origin() - new_center;
 double a = dot( r.direction(), r.direction() );
 double b
 double c
 2*dot( r.direction(), temp );
 dot( temp, temp ) - radius*radius;
 double discriminant
 II first check to see if ray intersects sphere
 if ( discriminant> 0
 {
 discriminant = sqrt( discriminant );
 double t = (- b - discriminant) I (2*a);
 II now check for valid interval
 if (t < tmin)
 t = (- b + discriminant) I (2*a);
 if (t < tmin I I t > tmax)
 return false;
 II we have a valid hit
 record.t = t;
 record.normal unitVector(r.origin() + t* r.direction()
 - new_center);
 record.color
 return true;
 color;
 }
 return false;
 bool DynSphere::shadowHit(const Ray& r, float tmin, float tmax,
 float time) const
 {
 }
 Vector3 new_center = getCenter(time);
 Vector3 temp = r.origin() - new_center;
 double a = dot( r.direction(), r.direction() );
 double b 2*dot( r.direction(), temp );
 double c = dot( temp, temp ) - radius*radius;
 double discriminant
 II first check to see if ray intersects sphere
 if ( discriminant> 0
 {
 }
 discriminant = sqrt( discriminant );
 double t = (- b - discriminant) I (2*a);
 II now check for valid interval
 if (t < tmin)
 t = (- b + discriminant) I (2*a);
 if (t < tmin I I t > tmax)
 return false;
 II we have a valid hit
 return true;
 return false;
 Vector3 DynSphere::getCenter(float time)const
 {
 float realtime = time * maxtime + (1.0f - time) * mintime;
 return Vector3(ocenter.x() + realtime,
 ocenter.y() + realtime,
 ocenter.z() + realtime);
 }
 */
