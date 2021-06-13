<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Material;
use App\PrMat;
use App\Warehouse;
use Illuminate\Support\Facades\DB;
class QueryController extends Controller
{
    public function getdata(){

     $data = DB::select("SELECT JSON_OBJECT( 'product_name', p.product_name, 'product_qty', p.product_qty, 
    'product_materials', (SELECT CONCAT('[', GROUP_CONCAT(JSON_OBJECT( 'warehouse_id',w.mat_id,
    'material_name', m.material_name, 'qty', w.remainder, 'price', w.price )),']') 
    AS JSON FROM pr_mats pm INNER JOIN materials m ON m.mat_id = pm.mat_id 
    INNER JOIN warehouses w ON w.mat_id = m.mat_id WHERE p.pr_id = pm.pr_id )) 
    FROM products p");

      return response($data,200);
    }
}
