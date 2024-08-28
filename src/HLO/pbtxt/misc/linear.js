const text = `
HloModule SyncTensorsGraph.75

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.75 (p0.1: f32[1], p1.9: f32[1,1], p2.18: f32[1], p3.26: f32[1,5], p4.35: f32[5], p5.43: f32[5,10], p6.52: f32[10,10]) -> (f32[10,1]) {
  %p6.52 = f32[10,10]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="test_train_linear_model.py" source_line=111}
  %p5.43 = f32[5,10]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.7 = f32[5,10]{1,0} custom-call(f32[5,10]{1,0} %p5.43), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.51 = f32[10,5]{0,1} transpose(f32[5,10]{1,0} %custom-call.7), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.53 = f32[10,5]{1,0} dot(f32[10,10]{1,0} %p6.52, f32[10,5]{0,1} %transpose.51), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p4.35 = f32[5]{0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.8 = f32[5]{0} custom-call(f32[5]{0} %p4.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.57 = f32[10,5]{1,0} broadcast(f32[5]{0} %custom-call.8), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.58 = f32[10,5]{1,0} add(f32[10,5]{1,0} %dot.53, f32[10,5]{1,0} %broadcast.57), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.59 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.60 = f32[10,5]{1,0} broadcast(f32[] %constant.59), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.61 = f32[10,5]{1,0} maximum(f32[10,5]{1,0} %add.58, f32[10,5]{1,0} %broadcast.60), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %p3.26 = f32[1,5]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.9 = f32[1,5]{1,0} custom-call(f32[1,5]{1,0} %p3.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.3 = f32[5]{0} reshape(f32[1,5]{1,0} %custom-call.9)
  %broadcast.3 = f32[10,5]{1,0} broadcast(f32[5]{0} %reshape.3), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %multiply = f32[10,5]{1,0} multiply(f32[10,5]{1,0} %maximum.61, f32[10,5]{1,0} %broadcast.3)
  %constant = f32[] constant(0)
  %reduce = f32[10]{0} reduce(f32[10,5]{1,0} %multiply, f32[] %constant), dimensions={1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p2.18 = f32[1]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.10 = f32[1]{0} custom-call(f32[1]{0} %p2.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.7 = f32[] reshape(f32[1]{0} %custom-call.10)
  %broadcast.5 = f32[10]{0} broadcast(f32[] %reshape.7), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.1 = f32[10]{0} add(f32[10]{0} %reduce, f32[10]{0} %broadcast.5), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.9 = f32[1,1]{1,0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.11 = f32[1,1]{1,0} custom-call(f32[1,1]{1,0} %p1.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.10 = f32[] reshape(f32[1,1]{1,0} %custom-call.11)
  %broadcast.11 = f32[10]{0} broadcast(f32[] %reshape.10), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %multiply.3 = f32[10]{0} multiply(f32[10]{0} %add.1, f32[10]{0} %broadcast.11), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p0.1 = f32[1]{0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.13 = f32[1]{0} custom-call(f32[1]{0} %p0.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.14 = f32[] reshape(f32[1]{0} %custom-call.13)
  %broadcast.15 = f32[10]{0} broadcast(f32[] %reshape.14), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.4 = f32[10]{0} add(f32[10]{0} %multiply.3, f32[10]{0} %broadcast.15), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.47 = f32[10,1]{1,0} reshape(f32[10]{0} %add.4), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  ROOT %tuple.74 = (f32[10,1]{1,0}) tuple(f32[10,1]{1,0} %reshape.47), frontend_attributes={neff_output_names="output0"}
}

`

export default text;
