#pragma strict

var speed = 5;
var rotSpeed = 120;
var turret : GameObject;

var power = 600;
var bullet : Transform;

function Update(){
	var amtToMove = speed*Time.deltaTime;
	var amtToRot = rotSpeed*Time.deltaTime;

	var front= Input.GetAxis("Vertical");
	var ang = Input.GetAxis("Horizontal");
	var ang2 = Input.GetAxis("MyTank");

	transform.Translate(Vector3.forward*front*amtToMove);
	transform.Rotate(Vector3(0,ang*amtToRot,0));
	turret.transform.Rotate(Vector3.up * ang2 * amtToRot);

	if(Input.GetButtonDown("Fire1")){
		var myBullet = Instantiate(bullet, turret.transform.position,turret.transform.rotation);
		myBullet.GetComponent.<Rigidbody>().AddForce(turret.transform.forward*power);
	}
}