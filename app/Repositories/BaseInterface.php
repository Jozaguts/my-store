<?php
namespace app\Repositories;

interface BaseInterface
{
    public function all();

    public function create(object  $data);

    public function update(object $data, $id);

    public function delete($id);

    public function find($id);
}
